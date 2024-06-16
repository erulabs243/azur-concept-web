import { cache } from "react";
import type { Config } from "@/payload-types";

import { cms } from "./api";

export const getServiceCategories = cache(
	async ({ lang = "fr" }: { lang?: Config["locale"] }) =>
		await cms.find({
			collection: "serviceCategories",
			locale: lang,
			where: { and: [{ _status: { equals: "published" } }] },
		}),
);

export const getServices = cache(
	async ({ lang = "fr" }: { lang?: Config["locale"] }) =>
		await cms.find({
			collection: "services",
			locale: lang,
			where: { and: [{ _status: { equals: "published" } }] },
		}),
);

export const findService = cache(
	async ({ slug, lang = "fr" }: { slug: string; lang?: Config["locale"] }) => {
		const services = await cms.find({
			collection: "services",
			locale: lang,
			where: {
				and: [{ _status: { equals: "published" } }, { slug: { equals: slug } }],
			},
		});

		return services.totalDocs > 0 ? services.docs[0] : null;
	},
);
