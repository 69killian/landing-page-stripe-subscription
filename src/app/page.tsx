import FeaturesDescription from "@/components/FeaturesDescription";
import { Hero } from "@/components/Hero";
import {MarqueeDemoVertical} from "@/components/MarqueeDemoVertical";
import { Pricing } from "@/components/Pricing";

export default function Home() {
	return (
		<main>
			<Hero />
			<FeaturesDescription/>
			<MarqueeDemoVertical/>
			<Pricing />
		</main>
	);
}
