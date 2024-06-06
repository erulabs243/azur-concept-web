import type { CollectionConfig } from "payload/types";

export const Services = {
	slug: "services",
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			label: {
				en: "Name",
				fr: "Nom",
			},
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "description",
			label: "Description",
			type: "textarea",
			required: true,
			localized: true,
		},
	],
} satisfies CollectionConfig;
