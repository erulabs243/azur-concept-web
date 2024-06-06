import type { CollectionConfig } from "payload/types";

import { Media } from "./Media";

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
		{
			name: "slug",
			label: "Slug",
			type: "text",
			localized: true,
			// TODO generate slug on name
		},
		{
			name: "icon",
			label: "Icon",
			type: "upload",
			relationTo: Media.slug,
		},
	],
} satisfies CollectionConfig;
