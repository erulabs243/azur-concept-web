import { cache } from "react";

import { cms } from "./api";
import type { Config } from "@/payload-types";

export const fetchConfiguration = cache(
	async ({ lang = "fr" }: { lang?: Config["locale"] }) =>
		await cms.findGlobal({ slug: "configuration", locale: lang }),
);
