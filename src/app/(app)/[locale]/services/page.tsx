import { Hero } from "@/components/sections";
import { getServiceCategories } from "../../_api/services";
import { CategorySection } from "./_components/category";

export default async function Page() {
	const categories = await getServiceCategories({});

	return (
		<main>
			<Hero
				heading="Page des services"
				image="/bg.jpg"
				description="Une description sur les services"
				cta={{ label: "Let's talk", link: "/contact" }}
			/>
			<div className="p-4">
				{categories.totalDocs > 0 &&
					categories.docs.map((category) => (
						<CategorySection key={category.id} category={category} />
					))}
			</div>
		</main>
	);
}
