import type { CollectionConfig } from "payload/types";

import { Media } from "./Media";
import { createdByField, publishedOnField, slugField } from "@/fields";
import { createdByHook } from "@/hooks";
import { PostCategories } from "./PostCategories";

export const Posts = {
	slug: "posts",
	admin: {
		useAsTitle: "title",
		group: "Blog",
		defaultColumns: ["title", "description", "createdBy"],
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
							required: true,
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
						},
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
		drafts: {
			autosave: true,
		},
	},
} satisfies CollectionConfig;
