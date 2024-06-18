import type { Metadata, ResolvingMetadata } from "next";

import { findPost } from "@/app/(app)/_api/blog";
import { Hero } from "@/components/sections";
import type { LocaleParams } from "@/types";
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
	const { locale, slug } = params;

	const post = await findPost({ slug: slug, lang: locale });

	if (!post) return;

	return (
		<main>
			<Hero
				heading={post.title}
				description={post?.excerpt}
				image={post?.cover}
			/>
			<div className="container p-4">
				<article className="prose">{post.content_html}</article>
			</div>
		</main>
	);
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const post = await findPost({ slug: params.slug, lang: params.locale });
	const configurationData = await fetchConfiguration({ lang: params.locale });

	const [cover, configuration] = await Promise.all([post, configurationData]);
	const seo = generateSeo(configuration, cover?.title, cover?.excerpt);

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
