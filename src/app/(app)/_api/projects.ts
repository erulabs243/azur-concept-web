import { cache } from "react";
import { cms } from "./api";
import type { LocaleParams } from "@/types";

export const getProjects = cache(
	async ({ locale = "fr" }: { locale?: LocaleParams }) =>
		await cms.find({
			collection: "projects",
			locale: locale,
			where: { and: [{ _status: { equals: "published" } }] },
		}),
);

export const getReviews = cache(
	async ({ locale = "fr" }: { locale?: LocaleParams }) =>
		await cms.find({
			collection: "reviews",
			locale: locale,
			where: { and: [{ _status: { equals: "published" } }] },
		}),
);
