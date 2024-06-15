import type { ServiceCategory } from "@/payload-types";
import { ServiceCard } from "./service";

type Props = {
	category: ServiceCategory;
};

export const CategorySection: React.FC<Props> = ({ category }) => {
	return (
		<section className="py-12 md:py-24 container flex flex-col lg:flex-row gap-4">
			<aside className="w-full lg:w-2/5 px-4 lg:pr-12">
				<h2 className="section-heading">{category.title}</h2>
				<p className="section-description">{category.description}</p>
			</aside>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4">
				{category?.services &&
					category?.services?.length > 0 &&
					category?.services?.map((service) => (
						<ServiceCard
							key={typeof service === "string" ? service : service.id}
							service={service}
						/>
					))}
			</div>
		</section>
	);
};
