import type { pathnames } from "@/config";

type Page = { label: string; link: keyof typeof pathnames };
export const pages: Array<Page> = [
	{ label: "About", link: "/about" },
	{ label: "Services", link: "/services" },
	{ label: "Blog", link: "/blog" },
];
