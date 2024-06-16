import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

import { Hero } from "@/components/sections";
import type { LocaleParams } from "@/types";
import { findCategory } from "@/app/(app)/_api/blog";
import Posts from "./_components/posts";

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

			<Suspense fallback={<p>Chargement...</p>}>
				<Posts category={category.id} />
			</Suspense>
		</main>
	);
}
