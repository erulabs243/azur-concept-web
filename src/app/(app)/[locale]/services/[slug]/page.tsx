import type { Metadata, ResolvingMetadata } from "next";

import { findService } from "@/app/(app)/_api/services";
import { Hero } from "@/components/sections";
import type { LocaleParams } from "@/types";
import { fetchConfiguration } from "@/app/(app)/_api/globals";
import { generateSeo } from "@/utils/seo";
import { getPreviousOgImages, setMetaImage } from "@/utils/meta-image";

interface Props {
	params: {
		slug: string;
		locale: LocaleParams;
	};
}

export default async function Page({ params }: Props) {
	const { slug, locale } = params;
	const service = await findService({ slug: slug, lang: locale });

	if (!service) throw Error("Something was wrong");

	return (
		<main>
			<Hero
				heading={service.name}
				image="/bg.jpg"
				description={service.description}
			/>
			<div className="p-4">
				<h1>A simple service</h1>
				{/* TODO contact form for this service */}
				{/* TODO List of all projects about this service */}
			</div>
		</main>
	);
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const serviceData = await findService({
		slug: params.slug,
		lang: params.locale,
	});
	const configurationData = await fetchConfiguration({ lang: params.locale });

	const [cover, configuration] = await Promise.all([
		serviceData,
		configurationData,
	]);
	const seo = generateSeo(configuration, cover?.name, cover?.description);

	return {
		...seo,
		openGraph: {
			images: [setMetaImage(), ...(await getPreviousOgImages(parent))],
		},
	};
}
