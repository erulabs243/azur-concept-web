import { ArrowUpRight } from "lucide-react";

import { getPosts } from "@/app/(app)/_api/blog";
import { BlogPost } from "@/components/cards/blogpost";
import { Link } from "@/navigation";
import type { LocaleParams } from "@/types";

export default async function Blog({ locale }: { locale?: LocaleParams }) {
	const posts = await getPosts({ locale: locale });

	return (
		<section className="py-12 md:py-24 px-4 container space-y-8">
			<header className="flex flex-col lg:flex-row gap-4 px-4 lg:px-12">
				<div className="flex-grow">
					<h4 className="section-heading">Blog</h4>
					<p className="section-description">Description</p>
				</div>
				<div className="flex-grow flex flex-col justify-start lg:justify-end items-start lg:items-end">
					<Link href="/blog" className="btn btn-secondary">
						Decouvrir nos articles
						<ArrowUpRight className="size-4" />
					</Link>
				</div>
			</header>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
				{posts.docs.map((post) => (
					<BlogPost key={post.id} post={post} />
				))}
			</div>
		</section>
	);
}
