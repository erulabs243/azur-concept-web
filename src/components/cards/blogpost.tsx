import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Post, Media } from "@/payload-types";
import { Link } from "@/navigation";

type Props = {
	post: Post;
};

const PostCover: React.FC<{ image: string | Media | null }> = ({ image }) => {
	if (!image)
		return (
			<figure>
				<Image
					src="/bg.jpg"
					alt="Image d'arriere plan"
					width={1024}
					height={1024}
				/>
			</figure>
		);

	if (typeof image === "string")
		return (
			<figure>
				<Image src={image} alt="Image du post" width={1024} height={1024} />
			</figure>
		);

	return (
		<figure>
			<Image
				src={image?.url ?? "/bg.jpg"}
				alt={image.alt ?? "Image du blog"}
				width={1024}
				height={1024}
			/>
		</figure>
	);
};

export const BlogPost: React.FC<Props> = ({ post }) => {
	return (
		<div className="card w-96 h-64 group bg-base-100 shadow-xl rounded-box image-full hover:cursor-pointer mx-auto">
			<Link href="/blog">
				<PostCover image={post.cover} />
			</Link>
			<div className="card-body flex flex-col justify-end">
				<Link
					href={{ pathname: "/services/[slug]", params: { slug: post.slug } }}
				>
					<h5 className="card-title hover:underline line-clamp-2">
						{post.title}
					</h5>
				</Link>
				<Link
					href={{ pathname: "/services/[slug]", params: { slug: post.slug } }}
				>
					<p className="line-clamp-3 text-sm text-gray-300 flex-grow-0">
						{post.excerpt}
					</p>
				</Link>
				<Link
					href={{ pathname: "/services/[slug]", params: { slug: post.slug } }}
					className="btn btn-sm self-start btn-neutral"
				>
					Lire <ArrowUpRight className="size-4" />
				</Link>
			</div>
		</div>
	);
};
