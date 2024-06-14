import { cache } from "react";

import type { LocaleParams } from "@/types";
import { cms } from "./api";

export const getPosts = cache(
	async ({ locale = "fr" }: { locale?: LocaleParams }) =>
		await cms.find({
			collection: "posts",
			locale: locale,
			where: { and: [{ _status: { equals: "published" } }] },
		}),
);

export const getPostCategories = cache(
	async ({ locale = "fr" }: { locale?: LocaleParams }) =>
		await cms.find({
			collection: "postCategories",
			locale: locale,
			where: {
				and: [{ _status: { equals: "published" } }],
			},
		}),
);
