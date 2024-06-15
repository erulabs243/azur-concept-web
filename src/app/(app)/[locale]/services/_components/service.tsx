import { ArrowUpRight } from "lucide-react";

import { Link } from "@/navigation";
import type { Service } from "@/payload-types";

type Props = {
	service: string | Service;
};

export const ServiceCard: React.FC<Props> = ({ service }) => {
	if (typeof service === "string") return <p>{service}</p>;

	return (
		<div className="card rounded-box shadow w-full lg:w-96 p-4 border border-neutral hover:border-none hover:bg-primary/25 transition-all duration-500 ease-in-out group hover:cursor-pointer">
			<div className="card-body p-4">
				<Link
					href={{
						pathname: "/services/[slug]",
						params: { slug: service.slug },
					}}
					className="hover:underline"
				>
					<h3 className="card-title">{service.name}</h3>
				</Link>
				<Link
					href={{
						pathname: "/services/[slug]",
						params: { slug: service.slug },
					}}
				>
					<p className="text-neutral-700 text-sm">{service.description}</p>
				</Link>
				<div className="card-actions">
					<Link
						className="btn btn-sm btn-neutral btn-outline"
						href={{
							pathname: "/services/[slug]",
							params: { slug: service.slug },
						}}
					>
						Decouvrir <ArrowUpRight className="size-4" />
					</Link>
				</div>
			</div>
		</div>
	);
};
