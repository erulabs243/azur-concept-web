import type { ServiceCategory } from "@/payload-types";
import { CtaButton } from "../cta";
import { ImageCard } from "../ImageCard";
import { Link } from "@/navigation";

type Props = {
	category: ServiceCategory;
};

export const Category: React.FC<Props> = ({ category }) => {
	return (
		<div className="card w-full lg:max-w-96 border group hover:cursor-pointer border-neutral rounded-box hover:border-none hover:bg-primary/30 transition-all duration-500 ease-in-out p-4">
			{category.cover && (
				<Link
					href={{
						pathname: "/services/[slug]",
						params: { slug: category.id },
					}}
				>
					<ImageCard media={category.cover} />
				</Link>
			)}
			<div className="card-body  flex flex-col justify-between">
				<div>
					<Link
						href={{
							pathname: "/services/[slug]",
							params: { slug: category.id },
						}}
					>
						<h4 className="card-title mt-2 group-hover:text-primary ">
							{category.title}
						</h4>
					</Link>
					<Link
						href={{
							pathname: "/services/[slug]",
							params: { slug: category.id },
						}}
					>
						<div className="text-gray-700 text-sm line-clamp-4 mt-1">
							{category.description}
						</div>
					</Link>
				</div>
				<footer className="card-actions">
					<CtaButton label="Voir plus" link={`/services/${category.id}`} />
				</footer>
			</div>
		</div>
	);
};
