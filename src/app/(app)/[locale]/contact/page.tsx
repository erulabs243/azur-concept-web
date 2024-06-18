import type { Metadata, ResolvingMetadata } from "next";
import { getTranslations } from "next-intl/server";
import { Phone } from "lucide-react";

import { getCover } from "../../_api/covers";
import { fetchConfiguration } from "../../_api/globals";
import { generateSeo } from "@/utils/seo";
import { setMetaImage, getPreviousOgImages } from "@/utils/meta-image";
import type { LocaleParams } from "@/types";
import { Hero } from "@/components/sections";

interface Props {
	params: {
		locale: LocaleParams;
	};
}

interface Props {
	params: {
		locale: LocaleParams;
	};
}

export default async function Page({ params }: Props) {
	const t = await getTranslations("App.Contact");
	const configuration = await fetchConfiguration({ lang: params.locale });

	return (
		<main>
			<Hero
				heading={t("Hero.heading")}
				description={t("Hero.description")}
				image="/placeholder.jpg"
			/>
			<div className="container p-4 lg:p-12">
				<div className="card shadow-sm rounded-box">
					<div className="card-body">
						<div className="flex flex-col lg:flex-row gap-4">
							<div className="w-full lg:w-1/2 p-8 rounded-box space-y-8">
								<header>
									<h6 className="text-2xl font-semibold">
										{t("Info.heading")}
									</h6>
									<p className="text-neutral-700">
										Un petit texte sur ou les retrouver ou comment les appeler
									</p>
								</header>
								<div className="space-y-2">
									{configuration?.phone_numbers &&
										configuration?.phone_numbers?.length > 0 && (
											<div className="flex flex-row gap-4">
												<Phone className="size-6" />
												<div className="flex-grow">
													{configuration?.phone_numbers?.map((phone) => (
														<p key={phone.id}>{phone.phone}</p>
													))}
												</div>
											</div>
										)}
								</div>
							</div>
							<div className="w-full lg:w-1/2 bg-neutral/5 rounded-box p-8 shadow-sm">
								<header>
									<h6 className="text-2xl font-semibold">
										{t("Form.heading")}
									</h6>
								</header>
							</div>
						</div>
					</div>
				</div>
			</div>
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
