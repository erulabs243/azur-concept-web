import { useTranslations } from "next-intl";

import { Hero } from "@/components/sections";
import { Categories, Values, Statistics, Why, HowStart } from "./_components";

export default function Page() {
	const t = useTranslations("App.Home.Hero");

	return (
		<main>
			<Hero
				heading={t("heading")}
				subheading={{ label: "Check our services", link: "/services" }}
				image="/bg.jpg"
				description={t("description")}
				cta={{ link: "/contact", label: "Let's talk" }}
			/>

			{/* Categories */}
			<Categories />

			{/* Our values */}
			<Values />

			{/* Statistics */}
			<Statistics />

			{/* Why work with us */}
			<Why />

			{/* How getting started */}
			<HowStart />
		</main>
	);
}
