import type { CollectionConfig } from "payload/types";

import { Media } from "./Media";

export const Covers = {
	slug: "covers",
	admin: {
		useAsTitle: "heading",
	},
	fields: [
		{
			name: "page",
			type: "select",
			options: [
				{ label: "Home", value: "home" },
				{ label: "Services", value: "service" },
				{ label: "About", value: "about" },
				{ label: "Contact", value: "contact" },
			],
			required: true,
			unique: true,
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
			required: true,
		},
		{
			name: "cover",
			type: "upload",
			relationTo: Media.slug,
			required: true,
		},
	],
} satisfies CollectionConfig;
