import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";

import { Hero } from "@/components/sections";
import type { LocaleParams } from "@/types";
import { findCategory } from "@/app/(app)/_api/blog";
import Posts from "./_components/posts";
import { fetchConfiguration } from "@/app/(app)/_api/globals";
import { generateSeo } from "@/utils/seo";
import { getPreviousOgImages, setMetaImage } from "@/utils/meta-image";

interface Props {
	params: {
		slug: string;
		locale: LocaleParams;
	};
}

export default async function Page({ params }: Props) {
	const { slug, locale } = params;

	const category = await findCategory({ slug: slug, lang: locale });

	if (!category) throw Error("Not found");

	return (
		<main>
			<Hero
				heading={category?.name}
				description={category.description}
				image="/bg.jpg"
			/>

			<Suspense fallback={<p>Chargement...</p>}>
				<Posts category={category.id} />
			</Suspense>
		</main>
	);
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const category = await findCategory({
		slug: params.slug,
		lang: params.locale,
	});
	const configurationData = await fetchConfiguration({ lang: params.locale });

	const [cover, configuration] = await Promise.all([
		category,
		configurationData,
	]);
	const seo = generateSeo(configuration, cover?.name, cover?.description);

	return {
		...seo,
		openGraph: {
			images: [setMetaImage(), ...(await getPreviousOgImages(parent))],
		},
	};
}
