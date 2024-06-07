import type { CollectionConfig } from "payload/types";
import { Profile } from "./Profile";
import { createdByField } from "@/fields";
import { createdByHook } from "@/hooks";

export const Customers = {
	slug: "customers",
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			type: "row",
			fields: [
				{
					name: "twitter",
					type: "text",
				},
				{
					name: "website",
					type: "text",
				},
			],
		},
		{
			name: "avatar",
			type: "upload",
			relationTo: Profile.slug,
		},
		createdByField,
	],
	hooks: {
		beforeChange: [createdByHook],
	},
	versions: {
		drafts: true,
	},
} satisfies CollectionConfig;
