import { cache } from "react";

import type { LocaleParams } from "@/types";
import { cms } from "./api";

export const getPosts = cache(
	async ({ locale = "fr" }: { locale?: LocaleParams }) =>
		await cms.find({
			collection: "posts",
			locale: locale,
			where: { and: [{ _status: { equals: "published" } }] },
		}),
);

export const getPostCategories = cache(
	async ({ locale = "fr" }: { locale?: LocaleParams }) =>
		await cms.find({
			collection: "postCategories",
			locale: locale,
			where: {
				and: [{ _status: { equals: "published" } }],
			},
		}),
);

export const findCategory = cache(
	async ({ slug, lang = "fr" }: { slug: string; lang?: LocaleParams }) => {
		const categories = await cms.find({
			collection: "postCategories",
			locale: lang,
			where: {
				and: [{ _status: { equals: "published" } }, { slug: { equals: slug } }],
			},
		});

		return categories.totalDocs > 0 ? categories.docs[0] : null;
	},
);

export const findPost = cache(
	async ({ slug, lang = "fr" }: { slug: string; lang?: LocaleParams }) => {
		const posts = await cms.find({
			collection: "posts",
			locale: lang,
			where: {
				and: [{ _status: { equals: "published" } }, { slug: { equals: slug } }],
			},
		});

		return posts.totalDocs > 0 ? posts.docs[0] : null;
	},
);

export const findPostsForCategory = cache(
	async ({ id, lang = "fr" }: { id: string; lang?: LocaleParams }) =>
		await cms.find({
			collection: "posts",
			locale: lang,
			where: {
				and: [
					{ _status: { equals: "published" } },
					{ categories: { contains: id } },
				],
			},
		}),
);
