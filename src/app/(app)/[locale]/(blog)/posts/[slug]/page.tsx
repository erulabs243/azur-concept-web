import { findPost } from "@/app/(app)/_api/blog";
import { Hero } from "@/components/sections";
import type { LocaleParams } from "@/types";

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
