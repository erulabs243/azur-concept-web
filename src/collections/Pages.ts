import { StatBlock } from "@/blocks";
import { createdByField, publishedOnField, slugField } from "@/fields";
import { createdByHook } from "@/hooks";
import type { CollectionConfig } from "payload/types";

export const Pages = {
	slug: "pages",
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "heading"],
	},
	versions: {
		drafts: {
			autosave: true,
		},
	},
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Meta",
					fields: [
						{
							type: "text",
							name: "title",
							required: true,
							localized: true,
						},
					],
				},
				{
					label: "Hero",
					fields: [
						{
							type: "row",
							fields: [
								{
									name: "withLink",
									type: "checkbox",
									label: "Hero with link",
									defaultValue: false,
									admin: {
										width: "30%",
									},
								},
								{
									name: "heroTag",
									type: "text",
									localized: true,
								},
							],
						},
						{
							name: "heading",
							type: "text",
							required: true,
							localized: true,
						},
						{
							name: "description",
							type: "textarea",
							localized: true,
						},
					],
				},
				{
					label: "Layout",
					fields: [
						{
							type: "blocks",
							name: "layout",
							minRows: 1,
							blocks: [StatBlock],
						},
					],
				},
			],
		},
		slugField("title"),
		publishedOnField,
		createdByField,
	],
	hooks: {
		beforeChange: [createdByHook],
	},
} satisfies CollectionConfig;
