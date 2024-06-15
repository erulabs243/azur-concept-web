import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Profile, Review } from "@/payload-types";
import { getReviews } from "@/app/(app)/_api/projects";
import type { LocaleParams } from "@/types";
import { Link } from "@/navigation";

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
		className="flex flex-col gap-4 p-4 border border-neutral hover:border-none transition-all duration-500 ease-in-out hover:bg-primary/30 hover:shadow-xs hover:cursor-pointer rounded-box w-full"
		id={review.id}
	>
		<div className="flex flex-row gap-2 justify-start content-start">
			{typeof review.customer === "string" ? (
				<Avatar avatar={review.customer} />
			) : (
				<Avatar avatar={review.customer.avatar} />
			)}
			<div className="flex-grow gap-0">
				{typeof review.customer === "string" ? (
					<p>{review.customer}</p>
				) : (
					<p>{review.customer.name}</p>
				)}
				{typeof review.project === "string" ? (
					<p className="text-sm font-semibold">{review.project}</p>
				) : (
					<p className="text-sm font-semibold">{review.project?.name}</p>
				)}
			</div>
		</div>
		<div className="flex-grow">
			<p className="italic px-2 text-sm">{review.review}</p>
		</div>
		<Link
			href="/contact"
			className="btn btn-sm btn-outline btn-neutral self-start"
		>
			Lire plus <ArrowUpRight className="size-4" />
		</Link>
	</div>
);

export default async function Testimonials({
	locale,
}: { locale?: LocaleParams }) {
	const reviews = await getReviews({ locale: locale });

	return (
		<section className="py-12 md:py-24 lg:py-36 container space-y-8">
			<div className="flex flex-col md:flex-row p-4 gap-4">
				<header className="w-full lg:w-2/5 flex flex-col justify-center px-4 lg:pl-4 lg:pr-12">
					<h4 className="section-heading">Ce qu'ils disent de nous</h4>
					<p className="section-description">
						Une petite description sur ce qu'ils disent de nous assez longue au
						sujet de leurs temoignages sur nos travaux
					</p>
					<Link href="/contact" className="btn btn-secondary self-start mt-4">
						Get started
						<ArrowUpRight className="size-4" />
					</Link>
				</header>
				<div className="w-full lg:w-3/5 mt-4 lg:mt-0 px-4 flex flex-col md:flex-row gap-4">
					{reviews.docs.map((review) => (
						<ReviewCard key={review.id} review={review} />
					))}
				</div>
			</div>
		</section>
	);
}
