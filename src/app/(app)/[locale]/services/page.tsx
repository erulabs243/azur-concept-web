import { getTranslations } from "next-intl/server";

import { Hero } from "@/components/sections";
import { getServiceCategories } from "@/app/(app)/_api/services";
import { getCover } from "@/app/(app)/_api/covers";
import { CategorySection } from "./_components/category";

export default async function Page() {
	const t = await getTranslations("App.Home");

	const categories = await getServiceCategories({});
	const cover = await getCover({ page: "service", lang: "fr" });

	return (
		<main>
			<Hero
				heading={cover?.heading ?? t("Hero.heading")}
				image={cover?.cover ?? "/bg.jpg"}
				description={cover?.description ?? t("Hero.description")}
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
