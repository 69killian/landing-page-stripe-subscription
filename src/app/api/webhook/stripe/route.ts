import prisma from '@/db/prisma';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
    console.log("Webhook endpoint hit");
    const body = await req.text();

    const sig = req.headers.get("stripe-signature")!;
    let event: Stripe.Event;


    try {
        event = stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
        console.log("Constructed event:", event);
   
    if (!event.data.object || !(event.data.object as Stripe.Checkout.Session).id) {
        console.error("Invalid event data object:", event.data.object);
        return new Response("Invalid event data", { status: 400 });
    }
    console.log("Valid event data object:", event.data.object);
    } catch (err: any) {
        console.error("Webhook signature verification failed.", err.message);
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    try {
        switch (event.type) {
            case "checkout.session.completed":
                console.log("Checkout session completed:", event.data.object);

                const session = await stripe.checkout.sessions.retrieve(
                    (event.data.object as Stripe.Checkout.Session).id,
                    { expand: ["line_items"] }
                );
                
                console.log("Retrieved session:", session);

                const customerId = session.customer as string;
                const customerDetails = session.customer_details;
                console.log("Customer details:", customerDetails);

                if (customerDetails?.email) {
                    const user = await prisma.user.findUnique({where: {email: customerDetails.email}});
                    if (!user) throw new Error("User not found");

                    if (!user.customerId) {
                        await prisma.user.update({
                            where: { id: user.id },
                            data: { customerId },
                        });
                    }
                    const lineItems = session.line_items?.data || [];

                    for (const item of lineItems) {
                        const priceId = item.price?.id;
                        const isSubscription = item.price?.type === "recurring";

                        if (isSubscription) {
                            let endDate = new Date();
                            if (priceId === process.env.STRIPE_YEARLY_PRICE_ID!) {
                                endDate.setFullYear(endDate.getFullYear() + 1);
                            } else if (priceId === process.env.STRIPE_MONTHLY_PRICE_ID!) {
                                endDate.setMonth(endDate.getMonth() + 1);
                            } else {
                                throw new Error("Invalid priceId");
                            }

                            // create a subscription on the DB if not exist or update if exist
                            const updatedUser = await prisma.subscription.upsert({
                                where: { userId: user.id! },
                                create: {
                                    userId: user.id,
                                    startDate: new Date(),
                                    endDate: endDate,
                                    plan: "premium",
                                    period: priceId === process.env.STRIPE_YEARLY_PRICE_ID! ? "yearly" : "monthly",
                                },
                                update: {
                                    plan: "premium", 
                                    period: priceId === process.env.STRIPE_YEARLY_PRICE_ID! ? "yearly" : "monthly",
                                    startDate: new Date(),
                                    endDate: endDate,
                                },                                
                            });
                            console.log("User updated:", updatedUser);

                            const subscription = await prisma.user.update({
                                where: { id: user.id },
                                data: { plan: "premium" },
                            });
                            console.log("Subscription upserted:", subscription);
                        }
                    }
                }
                break;

                case "customer.subscription.deleted": {
                    // Utilise stripe.subscriptions.retrieve au lieu de stripe.subscriptionItems.retrieve
                    const subscription = await stripe.subscriptions.retrieve((event.data.object as Stripe.Subscription).id);
                    
                    // Récupère l'utilisateur basé sur le customerId
                    const user = await prisma.user.findUnique({
                        where: { customerId: subscription.customer as string },
                    });
                
                    if (user) {
                        // Met à jour le plan de l'utilisateur à "free"
                        await prisma.user.update({
                            where: { id: user.id },
                            data: { plan: 'free' },
                        });
                        console.log(`User plan updated to 'free' for subscription ${subscription.id}`);
                    } else {
                        console.error("User not found for the subscription deleted event.");
                        throw new Error("User not found for the subscription deleted event.");
                    }
                    break;
                }
                
                
                default: 
                    console.log(`handled event type ${event.type}`);
        }
    } catch (error) {
        console.error("Error handling event", error);
        return new Response("Webhook Error", { status: 400 });
    }
    return new Response("Webhook received", { status: 200 });
}