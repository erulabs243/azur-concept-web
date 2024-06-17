import { getTranslations } from "next-intl/server";

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
import { getCover } from "../_api/covers";

interface Props {
	params: {
		locale: LocaleParams;
	};
}

export default async function Page({ params }: Props) {
	const t = await getTranslations("App.Home.Hero");
	const { locale } = params;
	const cover = await getCover({ page: "home" });

	return (
		<main>
			<Hero
				heading={cover?.heading ?? t("heading")}
				subheading={{ label: t("subheading"), link: "/services" }}
				image={cover?.cover ?? "/bg.jpg"}
				description={cover?.description ?? t("description")}
				cta={{ link: "/contact", label: t("cta") }}
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
