import createMiddleware from "next-intl/middleware";

import { locales, defaultLocale, pathnames } from "./config";

export default createMiddleware({
	locales,
	pathnames,
	defaultLocale: "fr",
});

export const config = {
	matcher: ["/", "/(fr|en)/:path*"],
};
