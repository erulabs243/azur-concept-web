import type { Configuration } from "@/payload-types";

export const generateSeo = (
	config: Configuration,
	title?: string,
	description?: string,
) => {
	return {
		title: `${config.site_name} - ${title ?? ""}`,
		description: description ?? "",
	};
};
