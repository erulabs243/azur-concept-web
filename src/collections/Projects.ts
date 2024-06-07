import type { CollectionConfig } from "payload/types";
import { Profile } from "./Profile";
import { Customers } from "./Customers";
import { Media } from "./Media";
import { createdByField, publishedOnField, slugField } from "@/fields";
import { createdByHook } from "@/hooks";

export const Projects = {
	slug: "projects",
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "website",
			type: "text",
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			name: "logo",
			type: "upload",
			relationTo: Profile.slug,
		},
		{
			type: "row",
			fields: [
				{
					name: "startDate",
					type: "date",
					admin: {
						date: {
							pickerAppearance: "dayAndTime",
						},
					},
				},
				{
					name: "endDate",
					type: "date",
					admin: {
						date: {
							pickerAppearance: "dayAndTime",
						},
					},
				},
			],
		},
		{
			name: "customer",
			type: "relationship",
			relationTo: Customers.slug,
			hasMany: false,
		},
		{
			name: "screenshots",
			type: "array",
			label: "Screenshots",
			minRows: 1,
			maxRows: 5,
			fields: [
				{
					name: "screenshots",
					type: "upload",
					relationTo: Media.slug,
				},
			],
		},
		slugField("name"),
		createdByField,
		publishedOnField,
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
