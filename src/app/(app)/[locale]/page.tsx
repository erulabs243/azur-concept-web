import { useTranslations } from "next-intl";

import type { LocaleParams } from "@/types";
import { Hero } from "@/components/sections";
import {
	Categories,
	Values,
	Statistics,
	Why,
	HowStart,
	Testimonials,
	Blog,
	GetStarted,
} from "./_components";

interface Props {
	params: {
		locale: LocaleParams;
	};
}

export default function Page({ params }: Props) {
	const t = useTranslations("App.Home.Hero");
	const { locale } = params;

	return (
		<main>
			<Hero
				heading={t("heading")}
				subheading={{ label: "Check our services", link: "/services" }}
				image="/bg.jpg"
				description={t("description")}
				cta={{ link: "/contact", label: "Let's talk" }}
			/>
			<img
				className="inline-block size-8 rounded-full"
				src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
				alt="Description"
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

			{/* Testimonials */}
			<Testimonials locale={locale} />

			{/* Blog */}
			<Blog />

			{/* Get started */}
			<GetStarted />
		</main>
	);
}
