import clsx from "clsx";

import { getPostCategories } from "@/app/(app)/_api/blog";
import { Link } from "@/navigation";

interface Props {
	active?: string;
}

const BlogCategories: React.FC<Props> = async ({ active }) => {
	const categories = await getPostCategories({});

	return (
		<nav className="menu menu-horizontal rounded-box">
			<li>
				<Link href="/blog" className={clsx(!active && "active")}>
					Tous les posts
				</Link>
			</li>
			{categories.docs.map((category) => (
				<li key={category.id}>
					<Link
						href={{ pathname: "/blog/[slug]", params: { slug: category.slug } }}
						className={clsx(active === category.slug && "active")}
					>
						{category.name}
					</Link>
				</li>
			))}
		</nav>
	);
};

export default BlogCategories;
