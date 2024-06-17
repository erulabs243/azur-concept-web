import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

import { getServiceCategories } from "@/app/(app)/_api/services";
import { Category } from "@/components/cards/category";

export default async function Categories() {
	const t = await getTranslations("App.Home.Categories");

	const categories = await getServiceCategories({});

	return (
		<section className="container py-12 md:py-24 space-y-8">
			<header className="w-full lg:w-1/3 px-4">
				<h3 className="section-heading">{t("heading")}</h3>
				<p className="section-description">{t("description")}</p>
			</header>
			<Suspense fallback={<p>Loading categories...</p>}>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
					{categories.totalDocs > 0 &&
						categories.docs.map((item) => (
							<Category key={item.id} category={item} />
						))}
				</div>
			</Suspense>
		</section>
	);
}
