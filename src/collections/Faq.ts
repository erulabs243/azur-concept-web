import { createdByHook } from "@/hooks";
import type { CollectionConfig } from "payload/types";
import { Services } from "./Services";
import { createdByField } from "@/fields";

export const Faq = {
	slug: "faq",
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "question",
	},
	fields: [
		{
			type: "text",
			name: "question",
			required: true,
			localized: true,
		},
		{
			type: "textarea",
			name: "response",
			required: true,
			localized: true,
		},
		{
			type: "relationship",
			name: "service",
			relationTo: Services.slug,
			hasMany: true,
		},
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
