import FeaturesDescription from "@/components/FeaturesDescription";
import { Hero } from "@/components/Hero";
import {MarqueeDemoVertical} from "@/components/MarqueeDemoVertical";
import { Pricing } from "@/components/Pricing";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Home() {
	return (
		<main>
			<Hero />
			<FeaturesDescription/>
			<MarqueeDemoVertical/>
			<Pricing />
			<FAQ/>
			<Footer/>
		</main>
	);
}
