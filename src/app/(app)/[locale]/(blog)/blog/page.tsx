import type { Metadata, ResolvingMetadata } from "next";
import { getTranslations } from "next-intl/server";

import { getCover } from "@/app/(app)/_api/covers";
import { Hero } from "@/components/sections";
import { BlogCategories } from "../_components";
import type { LocaleParams } from "@/types";
import { fetchConfiguration } from "@/app/(app)/_api/globals";
import { generateSeo } from "@/utils/seo";
import { SSG_GET_INITIAL_PROPS_CONFLICT } from "next/dist/lib/constants";
import { getPreviousOgImages, setMetaImage } from "@/utils/meta-image";

interface Props {
	params: {
		locale: LocaleParams;
	};
}

export default async function Page() {
	const t = await getTranslations("App.Home");

	const cover = await getCover({ page: "blog" });

	return (
		<main>
			<Hero
				heading={cover?.heading ?? t("Hero.heading")}
				description={cover?.description ?? t("Hero.description")}
				image={cover?.cover ?? "/bg.jpg"}
			/>

			<div className="container p-4">
				{/* Categories nav */}
				<BlogCategories />
			</div>
		</main>
	);
}

/**
 * Metadata
 */
export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const coverData = await getCover({ page: "blog", lang: params.locale });
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
