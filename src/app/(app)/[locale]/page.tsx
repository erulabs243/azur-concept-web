import { useTranslations } from "next-intl";

import type { LocaleParams } from "@/types";
import { Hero } from "@/components/sections";
import {
	Categories,
	Values,
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

export default async function Page({ params }: Props) {
	const t = useTranslations("App.Home.Hero");
	const { locale } = params;
	// const cover = await getCover({ page: "home" });
	// console.log(cover);

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
