// @ts-nocheck

import type { Metadata, ResolvingMetadata } from "next";

import { findPost } from "@/app/(app)/_api/blog";
import { Hero } from "@/components/sections";
import type { LocaleParams } from "@/types";
import { fetchConfiguration } from "@/app/(app)/_api/globals";
import { generateSeo } from "@/utils/seo";
import { getPreviousOgImages, setMetaImage } from "@/utils/meta-image";
import { BlogPost } from "@/components/cards/blogpost";

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
	console.log(post.related);

	return (
		<main>
			<Hero
				heading={post.title}
				description={post?.excerpt}
				image={post?.cover}
			/>
			<div className="container p-4">
				<div
					dangerouslySetInnerHTML={{ __html: post?.content_html }}
					className="prose mx-auto py-12"
				/>
			</div>

			{/* Related posts */}
			{post?.related && post?.related?.length > 0 && (
				<div className="py-12 container space-y-12 p-4">
					<header className="px-4 lg:px-12">
						<h6 className="section-heading">Related posts</h6>
					</header>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{post?.related?.map((item) => {
							if (typeof item === "string")
								return (
									<a key={item} href="#">
										{item}
									</a>
								);

							return <BlogPost key={item.id} post={item} />;
						})}
					</div>
				</div>
			)}
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
