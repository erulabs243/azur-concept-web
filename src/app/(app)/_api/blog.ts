import { cache } from "react";

import type { LocaleParams } from "@/types";
import { cms } from "./api";

export const getPosts = cache(
	async ({ locale = "fr" }: { locale?: LocaleParams }) =>
		await cms.find({ collection: "posts", locale: locale }),
);

export const getPostCategories = cache(
	async ({ locale = "fr" }: { locale?: LocaleParams }) =>
		await cms.find({ collection: "postCategories", locale: locale }),
);
