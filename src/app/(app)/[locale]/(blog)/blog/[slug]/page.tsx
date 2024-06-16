import { getTranslations } from "next-intl/server";

import { Hero } from "@/components/sections";
import type { LocaleParams } from "@/types";
import { findCategory } from "@/app/(app)/_api/blog";

interface Props {
	params: {
		slug: string;
		locale: LocaleParams;
	};
}

export default async function Page({ params }: Props) {
	const { slug, locale } = params;

	const category = await findCategory({ slug: slug, lang: locale });

	if (!category) throw Error("Not found");

	return (
		<main>
			<Hero
				heading={category?.name}
				description={category.description}
				image="/bg.jpg"
			/>

			<div className="p-4 container">
				<p>Posts</p>
			</div>
		</main>
	);
}
