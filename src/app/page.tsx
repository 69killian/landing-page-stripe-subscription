import FeaturesDescription from "@/components/FeaturesDescription";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";

export default function Home() {
	return (
		<main>
			<Hero />
			<FeaturesDescription/>
			<Pricing />
		</main>
	);
}
