import type { CollectionConfig } from "payload/types";

import { Media } from "./Media";
import { Users } from "./Users";

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
		{
			name: "slug",
			type: "text",
			label: "Slug",
			required: true,
			localized: true,
			unique: true,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "publishedOn",
			type: "date",
			admin: {
				position: "sidebar",
				date: {
					pickerAppearance: "dayAndTime",
				},
			},
		},
		{
			name: "createdBy",
			type: "relationship",
			relationTo: Users.slug,
			access: {
				update: () => false,
			},
			admin: {
				readOnly: true,
				position: "sidebar",
				condition: (data) => Boolean(data?.createdBy),
			},
		},
	],
	hooks: {
		beforeChange: [
			({ req, operation, data }) => {
				if (operation === "create") {
					if (req.user) {
						data.createdBy = req.user.id;
						return data;
					}
				}
			},
		],
	},
} satisfies CollectionConfig;
