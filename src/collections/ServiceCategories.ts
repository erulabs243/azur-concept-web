import type { CollectionConfig } from "payload/types";
import { Services } from "./Services";

export const ServiceCategories = {
	slug: "serviceCategories",
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			name: "services",
			type: "relationship",
			relationTo: Services.slug,
			hasMany: true,
		},
	],
} satisfies CollectionConfig;
