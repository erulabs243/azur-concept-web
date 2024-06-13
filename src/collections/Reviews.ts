import { createdByHook } from "@/hooks";
import type { CollectionConfig } from "payload/types";
import { Customers } from "./Customers";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { createdByField } from "@/fields";

export const Reviews = {
	slug: "reviews",
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "project",
	},
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "customer",
					type: "relationship",
					relationTo: Customers.slug,
					required: true,
				},
				{
					name: "project",
					type: "relationship",
					relationTo: Projects.slug,
				},
				{
					name: "service",
					type: "relationship",
					relationTo: Services.slug,
				},
			],
		},
		{
			type: "row",
			fields: [
				{
					name: "rating",
					type: "number",
					max: 5,
					min: 1,
					required: true,
					admin: {
						width: "30%",
					},
				},
				{
					name: "review",
					type: "textarea",
					required: true,
					admin: {
						width: "63%",
					},
					localized: true,
				},
			],
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
