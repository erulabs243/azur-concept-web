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
