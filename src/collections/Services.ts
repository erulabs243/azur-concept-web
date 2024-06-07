import type { CollectionConfig } from "payload/types";

import { Media } from "./Media";
import { createdByField, slugField } from "@/fields";
import { createdByHook } from "@/hooks";

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
		slugField("name"),
		createdByField,
		{
			name: "icon",
			label: "Icon",
			type: "upload",
			relationTo: Media.slug,
		},
	],
	versions: {
		drafts: {
			autosave: true,
		},
	},
	hooks: {
		beforeChange: [createdByHook],
	},
} satisfies CollectionConfig;
