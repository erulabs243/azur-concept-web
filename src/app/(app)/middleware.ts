import { type NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

const locales = ["fr", "en"];

const getLocale = () => {
	const headersList = headers();

	console.info(headersList);
	return "fr";
};

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in pathname
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) return;

	// Redirect if there is no locale
	const locale = getLocale();
	request.nextUrl.pathname = `/${locale}${pathname}`;
	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};
