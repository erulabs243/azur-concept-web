import { findService } from "@/app/(app)/_api/services";
import { Hero } from "@/components/sections";
import type { LocaleParams } from "@/types";

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