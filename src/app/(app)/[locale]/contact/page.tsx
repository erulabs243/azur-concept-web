import type { Metadata, ResolvingMetadata } from "next";

import { getCover } from "../../_api/covers";
import { fetchConfiguration } from "../../_api/globals";
import { generateSeo } from "@/utils/seo";
import { setMetaImage, getPreviousOgImages } from "@/utils/meta-image";
import type { LocaleParams } from "@/types";

interface Props {
	params: {
		locale: LocaleParams;
	};
}

export default function Page() {
	return (
		<main>
			<h1>Contact page</h1>
		</main>
	);
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const coverData = await getCover({ page: "contact", lang: params.locale });
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
