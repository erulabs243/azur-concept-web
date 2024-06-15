import { Hero } from "@/components/sections";
import { getServiceCategories } from "@/app/(app)/_api/services";
import { getCover } from "@/app/(app)/_api/covers";
import { CategorySection } from "./_components/category";

export default async function Page() {
	const categories = await getServiceCategories({});
	const cover = await getCover({ page: "service", lang: "fr" });
	console.log(cover);

	return (
		<main>
			<Hero
				heading={cover.docs[0].heading}
				image={cover.docs[0].cover}
				description={cover.docs[0].description}
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
