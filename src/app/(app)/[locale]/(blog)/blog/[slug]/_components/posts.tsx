import { findPostsForCategory } from "@/app/(app)/_api/blog";
import { BlogPost } from "@/components/cards/blogpost";
import type { LocaleParams } from "@/types";

export default async function Posts({
	category,
	lang = "fr",
}: { category: string; lang?: LocaleParams }) {
	const posts = await findPostsForCategory({ id: category, lang: lang });

	return (
		<div className="container px-4 py-12 md:py-24">
			{posts.totalDocs === 0 ? (
				<div>Aucun post dans cette categorie</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
					{posts.docs.map((post) => (
						<BlogPost key={post.id} post={post} />
					))}
				</div>
			)}
		</div>
	);
}
