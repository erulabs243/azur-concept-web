import { cache } from "react";

import { cms } from "./api";
import type { Config } from "@/payload-types";

export const getCover = cache(
	async ({ page, lang = "fr" }: { page: string; lang?: Config["locale"] }) =>
		await cms.find({
			collection: "covers",
			locale: lang,
			where: {
				and: [{ page: { equals: page } }],
			},
		}),
);
