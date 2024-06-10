import type { Pathnames } from "next-intl/routing";

export const defaultLocale = "fr";

export const locales = ["fr", "en"] as const;

export const pathnames = {
	"/": "/",
	"/about": {
		fr: "/a-propos",
		en: "/about",
	},
} satisfies Pathnames<typeof locales>;
