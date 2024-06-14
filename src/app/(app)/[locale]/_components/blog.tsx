import { ArrowUpRight } from "lucide-react";

import { getPosts } from "@/app/(app)/_api/blog";
import { BlogPost } from "@/components/cards/blogpost";
import { Link } from "@/navigation";
import type { LocaleParams } from "@/types";

export default async function Blog({ locale }: { locale?: LocaleParams }) {
	const posts = await getPosts({ locale: locale });

	console.log(posts);

	return (
		<section className="py-12 px-4 container">
			<header>
				<h4>Blog</h4>
				<p>Description</p>
				<Link href="/blog" className="btn btn-sm btn-ghost">
					Voir plus
					<ArrowUpRight className="size-4" />
				</Link>
			</header>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{posts.docs.map((post) => (
					<BlogPost key={post.id} post={post} />
				))}
			</div>
		</section>
	);
}
