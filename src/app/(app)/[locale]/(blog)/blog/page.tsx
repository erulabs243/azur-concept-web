import { getTranslations } from "next-intl/server";

import { getCover } from "@/app/(app)/_api/covers";
import { Hero } from "@/components/sections";
import { BlogCategories } from "../_components";

export default async function Page() {
	const t = await getTranslations("App.Home");

	const cover = await getCover({ page: "blog" });

	return (
		<main>
			<Hero
				heading={cover?.heading ?? t("Hero.heading")}
				description={cover?.description ?? t("Hero.description")}
				image={cover?.cover ?? "/bg.jpg"}
			/>

			<div className="container p-4">
				{/* Categories nav */}
				<BlogCategories />
			</div>
		</main>
	);
}

/**
 * Metadata
 */
