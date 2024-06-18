import type { Metadata, ResolvingMetadata } from "next";
import { Camera } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { getCover } from "@/app/(app)/_api/covers";
import { fetchConfiguration } from "@/app/(app)/_api/globals";
import type { LocaleParams } from "@/types";
import { generateSeo } from "@/utils/seo";
import { getPreviousOgImages, setMetaImage } from "@/utils/meta-image";

interface Props {
	params: {
		locale: LocaleParams;
	};
}

export default function Page() {
	return (
		<main>
			<h1 className="text-cyan-500 bg-violet-400 p-4 rounded-xl">About page</h1>
			<a href="#" className="btn btn-secondary">
				<Camera />
				NextUI working fine
			</a>
		</main>
	);
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const t = await getTranslations("App.About.Hero");
	const coverData = await getCover({ page: "about", lang: params.locale });
	const configurationData = await fetchConfiguration({ lang: params.locale });

	const [cover, configuration] = await Promise.all([
		coverData,
		configurationData,
	]);
	const seo = generateSeo(configuration, cover?.heading, cover?.description);

	return {
		...seo,
		openGraph: {
			images: [
				setMetaImage(cover?.cover),
				...(await getPreviousOgImages(parent)),
			],
		},
	};
}
