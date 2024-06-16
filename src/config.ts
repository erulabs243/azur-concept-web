import type { Pathnames } from "next-intl/routing";

export const defaultLocale = "fr";

export const locales = ["fr", "en"] as const;

export const pathnames = {
	"/": "/",
	"/about": {
		fr: "/a-propos",
		en: "/about",
	},
	"/contact": {
		fr: "/contact",
		en: "/contact",
	},
	"/services": {
		fr: "/services",
		en: "/services",
	},
	"/services/[slug]": "/services/[slug]",
	"/blog": {
		fr: "/blog",
		en: "/blog",
	},
	"/blog/[slug]": "/blog/[slug]",
	"/posts/[slug]": "/posts/[slug]",
} satisfies Pathnames<typeof locales>;
