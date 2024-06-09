import Image from "next/image";

import type { ServiceCategory } from "@/payload-types";
import { CtaButton } from "../cta";
import { ImageCard } from "../ImageCard";

type Props = {
	category: ServiceCategory;
};

export const Category: React.FC<Props> = ({ category }) => {
	return (
		<div className="card w-96">
			<div className="card-body">
				<h4 className="card-title">{category.title}</h4>
				{category.cover && (
					<figure className="h-48 overflow-hidden">
						<ImageCard media={category.cover} />
					</figure>
				)}
				<p className="text-gray-800 text-sm">{category.description}</p>
				<footer className="card-actions">
					<CtaButton label="Voir plus" link={`/services/${category.id}`} />
				</footer>
			</div>
		</div>
	);
};
