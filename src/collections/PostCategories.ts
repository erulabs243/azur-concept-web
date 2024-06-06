import { createdByField, slugField } from "@/fields";
import { createdByHook } from "@/hooks";
import type { CollectionConfig } from "payload/types";

export const PostCategories = {
	slug: "postCategories",
	admin: {
		useAsTitle: "name",
		group: "Blog",
	},
	access: {
		read: () => true,
	},
	versions: {
		drafts: true,
	},
	fields: [
		{
			name: "name",
			label: "Name",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "description",
			type: "textarea",
			label: "Description",
			required: true,
			localized: true,
		},
		slugField("name"),
		createdByField,
	],
	hooks: {
		beforeChange: [createdByHook],
	},
} satisfies CollectionConfig;
