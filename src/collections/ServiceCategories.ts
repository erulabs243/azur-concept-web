import type { CollectionConfig } from "payload/types";
import { Services } from "./Services";
import { Media } from "./Media";

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
			name: "subtitle",
			type: "text",
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
		{
			name: "cover",
			type: "upload",
			relationTo: Media.slug,
		},
	],
	versions: {
		drafts: {
			autosave: true,
		},
	},
} satisfies CollectionConfig;
