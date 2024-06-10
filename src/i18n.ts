import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
	// Validate locales
	// @ts-ignore
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`@/translations/${locale}.json`)).default,
	};
});
