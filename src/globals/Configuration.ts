import type { GlobalConfig } from "payload/types";

import { Media, Profile } from "@/collections";

export const Configuration = {
	slug: "configuration",
	fields: [
		{
			name: "site_name",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "slogan",
			type: "text",
			localized: true,
		},
		{
			name: "logo",
			type: "upload",
			relationTo: Media.slug,
		},
		{
			name: "logo_square",
			type: "upload",
			relationTo: Profile.slug,
		},
		{
			type: "array",
			name: "phone_numbers",
			fields: [{ name: "phone", type: "text" }],
		},
		{
			type: "array",
			name: "emails",
			fields: [{ name: "email", type: "text" }],
		},
		{
			type: "array",
			name: "addresses",
			fields: [
				{ name: "address", type: "text", localized: true },
				{ name: "street", type: "text", localized: true },
				{ name: "city", type: "text", localized: true },
				{ name: "province", type: "text", localized: true },
				{ name: "country", type: "text", localized: true },
			],
		},
	],
} satisfies GlobalConfig;
