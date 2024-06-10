import Image from "next/image";

import type { Profile, Review } from "@/payload-types";
import { getReviews } from "@/app/(app)/_api/projects";

/* const Avatar: React.FC<{ avatar: Profile }> = ({ avatar }) => {
	if (typeof avatar === "string")
		return (
			<Image
				src={avatar}
				width={32}
				height={32}
				className="avatar"
				alt={avatar}
			/>
		);

	return (
		<Image
			src={avatar.url}
			alt={avatar.alt}
			width={32}
			height={32}
			className="avatar"
		/>
	);
}; */

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
	<div>
		<p>{review.review}</p>
		<div>
			{/* <Avatar avatar={review.customer} /> */}
			<p>Avatar</p>
		</div>
	</div>
);

export default async function Testimonials() {
	const reviews = await getReviews();
	console.log(reviews);

	return (
		<section className="py-12 container space-y-8">
			<h4>Ce qu'ils disent de nous</h4>
		</section>
	);
}
