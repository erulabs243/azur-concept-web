import Image from "next/image";

import type { Profile, Review } from "@/payload-types";
import { getReviews } from "@/app/(app)/_api/projects";
import type { LocaleParams } from "@/types";

const Avatar: React.FC<{ avatar?: string | Profile | null }> = ({ avatar }) => {
	if (!avatar)
		return (
			<div className="avatar">
				<div className="w-12 rounded-full">
					<Image src="/portrait.jpg" alt="Avatar" width={32} height={32} />
				</div>
			</div>
		);

	if (typeof avatar === "string")
		return (
			<div className="avatar">
				<div className="w-12 rounded-full">
					<Image src={avatar} alt={avatar} width={32} height={32} />
				</div>
			</div>
		);

	return (
		<div className="avatar">
			<div className="w-12 rounded-full">
				<Image
					src={avatar?.url ?? "portrait.jpg"}
					alt={avatar.alt}
					width={32}
					height={32}
				/>
			</div>
		</div>
	);
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
	<div
		className="flex flex-col gap-2 p-4 border border-neutral hover:border-none transition-all duration-500 ease-in-out hover:bg-primary/30 hover:shadow-xs hover:cursor-pointer rounded-box w-1/2"
		id={review.id}
	>
		<div className="flex-grow">
			<p>{review.review}</p>
		</div>
		<div className="flex flex-row gap-2 justify-start content-start">
			{typeof review.customer === "string" ? (
				<Avatar avatar={review.customer} />
			) : (
				<Avatar avatar={review.customer.avatar} />
			)}
			<div className="flex-grow">
				{typeof review.customer === "string" ? (
					<p>{review.customer}</p>
				) : (
					<p>{review.customer.name}</p>
				)}
				{typeof review.project === "string" ? (
					<p>{review.project}</p>
				) : (
					<p>{review.project?.name}</p>
				)}
			</div>
		</div>
	</div>
);

export default async function Testimonials({
	locale,
}: { locale?: LocaleParams }) {
	const reviews = await getReviews({ locale: locale });

	return (
		<section className="py-12 container space-y-8">
			<header>
				<h4 className="section-heading">Ce qu'ils disent de nous</h4>
				<p className="section-description">
					Une petite description sur ce qu'ils disent de nous
				</p>
			</header>
			<div className="flex flex-col lg:flex-row p-4 gap-4">
				<div className="w-full lg:w-1/3">
					<Image
						src="/portrait.jpg"
						alt="image"
						className="m-auto"
						width={360}
						height={480}
					/>
				</div>
				<div className="w-full lg:w-2/3 flex flex-row gap-4 p-4 rounded-box">
					{reviews.docs.map((review) => (
						<ReviewCard key={review.id} review={review} />
					))}
				</div>
			</div>
		</section>
	);
}
