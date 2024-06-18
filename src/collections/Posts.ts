import type { CollectionConfig } from "payload/types";
import {
	lexicalEditor,
	lexicalHTML,
	HTMLConverterFeature,
} from "@payloadcms/richtext-lexical";

import { Media } from "./Media";
import { createdByField, publishedOnField, slugField } from "@/fields";
import { createdByHook } from "@/hooks";
import { PostCategories } from "./PostCategories";
import { readDraft } from "@/access/draft";

export const Posts = {
	slug: "posts",
	admin: {
		useAsTitle: "title",
		group: "Blog",
		defaultColumns: ["title", "description", "createdBy"],
	},
	access: {
		read: readDraft,
	},
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Meta",
					fields: [
						{
							name: "title",
							type: "text",
							label: "Title",
							required: true,
							localized: true,
						},
						{
							name: "cover",
							type: "upload",
							relationTo: Media.slug,
						},
						{
							name: "excerpt",
							type: "textarea",
							label: "Description",
							localized: true,
							required: true,
						},
						{
							name: "categories",
							type: "relationship",
							relationTo: PostCategories.slug,
							hasMany: true,
							label: "Categories",
						},
						{
							name: "related",
							type: "relationship",
							relationTo: "posts",
							hasMany: true,
							filterOptions: ({ id }) => {
								return {
									id: {
										not_in: [id],
									},
								};
							},
						},
					],
				},
				{
					label: "Content",
					fields: [
						{
							name: "content",
							type: "richText",
							label: "Content",
							localized: true,
							required: true,
							editor: lexicalEditor({
								features: ({ defaultFeatures }) => [
									...defaultFeatures,
									HTMLConverterFeature({}),
								],
							}),
						},
						lexicalHTML("content", { name: "content_html" }),
					],
				},
			],
		},
		// {
		// 	name: "slug",
		// 	type: "text",
		// 	label: "Slug",
		// 	required: true,
		// 	localized: true,
		// 	unique: true,
		// 	admin: {
		// 		position: "sidebar",
		// 	},
		// },
		// {
		// 	name: "publishedOn",
		// 	type: "date",
		// 	admin: {
		// 		position: "sidebar",
		// 		date: {
		// 			pickerAppearance: "dayAndTime",
		// 		},
		// 	},
		// },
		slugField("title"),
		publishedOnField,
		createdByField,
	],
	hooks: {
		beforeChange: [createdByHook],
	},
	versions: {
		drafts: true,
	},
} satisfies CollectionConfig;
