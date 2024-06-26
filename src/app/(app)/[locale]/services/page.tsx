import { getTranslations } from "next-intl/server";
import type { Metadata, ResolvingMetadata } from "next";

import { Hero } from "@/components/sections";
import { getServiceCategories } from "@/app/(app)/_api/services";
import { getCover } from "@/app/(app)/_api/covers";
import { CategorySection } from "./_components/category";
import type { LocaleParams } from "@/types";
import { fetchConfiguration } from "../../_api/globals";
import { generateSeo } from "@/utils/seo";
import { getPreviousOgImages, setMetaImage } from "@/utils/meta-image";

interface Props {
	params: {
		locale: LocaleParams;
	};
}

export default async function Page() {
	const t = await getTranslations("App.Home");

	const categories = await getServiceCategories({});
	const cover = await getCover({ page: "service", lang: "fr" });

	return (
		<main>
			<Hero
				heading={cover?.heading ?? t("Hero.heading")}
				image={cover?.cover ?? "/bg.jpg"}
				description={cover?.description ?? t("Hero.description")}
				cta={{ label: "Let's talk", link: "/contact" }}
			/>
			<div className="p-4">
				{categories.totalDocs > 0 &&
					categories.docs.map((category) => (
						<CategorySection key={category.id} category={category} />
					))}
			</div>
		</main>
	);
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const coverData = await getCover({ page: "service", lang: params.locale });
	const configurationData = await fetchConfiguration({ lang: params.locale });

	const [cover, configuration] = await Promise.all([
		coverData,
		configurationData,
	]);
	const seo = generateSeo(configuration, cover?.heading, cover?.description);

	return {
		...seo,
		openGraph: {
			images: [
				setMetaImage(cover?.cover),
				...(await getPreviousOgImages(parent)),
			],
		},
	};
}
