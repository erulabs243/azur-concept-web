import { Suspense } from "react";
import { getServiceCategories } from "../../_api/services";
import { Category } from "@/components/cards/category";

export default async function Categories() {
	const categories = await getServiceCategories({});

	return (
		<section className="container py-12">
			<h3>Categories title</h3>
			<Suspense fallback={<p>Loading categories...</p>}>
				<div className="flex flex-col lg:flex-row gap-4 p-4">
					{categories.totalDocs > 0 &&
						categories.docs.map((item) => (
							<Category key={item.id} category={item} />
						))}
				</div>
			</Suspense>
		</section>
	);
}
