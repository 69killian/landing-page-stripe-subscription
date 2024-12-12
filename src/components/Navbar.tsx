"use client";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { LogOut } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { isUserSubscribed } from "@/app/premium/actions";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
];

export const Navbar = () => {
  const { isAuthenticated } = useKindeBrowserClient();

  const { data } = useQuery({
    queryKey: ["isUserSubscribed"],
    queryFn: async () => isUserSubscribed(),
  });

  const isSubscribed = data?.subscribed;

  return (
    <header
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 rounded-full shadow-lg border dark:border-slate-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{
        boxShadow: 'inset 0 1px 15px rgba(255, 255, 255, 0.1)',
      }}
    >
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList className='container h-12 flex items-center justify-between px-4'>
          <NavigationMenuItem className='font-bold md:flex hidden'>
            <a rel='noreferrer noopener' href='/' className='ml-2 font-bold text-xl flex'>
              <Image src="/stripintlogo.png" width={150} height={150} alt="logo" />
            </a>
          </NavigationMenuItem>

          <nav className='md:flex gap-2'>
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel='noreferrer noopener'
                href={route.href}
                key={i}
                className={`text-[15px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
            {isAuthenticated && isSubscribed && (
              <Link
                rel='noreferrer noopener'
                href={"process.env.NET_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL!"}
                target='_blank'
                className={`text-[15px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                Billing Portal
              </Link>
            )}
          </nav>

          <div className='hidden md:flex gap-2'>
            {isAuthenticated && (
              <Link
                rel='noreferrer noopener'
                href='/api/auth/logout'
                className={`border ${buttonVariants({ variant: "secondary" })}`}
              >
                Logout
                <LogOut className='w-4 h-4 ml-2' />
              </Link>
            )}

            {!isAuthenticated && (
              <Link
                rel='noreferrer noopener'
                href='/api/auth/login'
                className={`border ${buttonVariants({ variant: "secondary" })}`}
              >
                Login
              </Link>
            )}

            {isAuthenticated && isSubscribed && (
              <Link
                rel='noreferrer noopener'
                href='/premium'
                className={`border bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-white ${buttonVariants(
                  {
                    variant: "secondary",
                  }
                )}`}
              >
                Premium ✨
              </Link>
            )}
            <div>
              <ModeToggle />
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
