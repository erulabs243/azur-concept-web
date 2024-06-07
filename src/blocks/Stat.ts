import type { Block } from "payload/types";
import { Media } from "@/collections";

export const StatBlock = {
	slug: "statistics",
	interfaceName: "Statistics",
	imageAltText: "Stat Card",
	fields: [
		{
			name: "statTitle",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "statValue",
			type: "number",
			min: 0,
			required: true,
		},
		{
			name: "statDescription",
			type: "text",
			localized: true,
		},
		{
			name: "statType",
			type: "radio",
			required: true,
			options: [
				{ label: "Percentage", value: "percent" },
				{ label: "Raw", value: "raw" },
			],
			defaultValue: "raw",
			admin: { layout: "horizontal" },
		},
		{
			name: "image",
			type: "upload",
			relationTo: Media.slug,
		},
	],
} satisfies Block;
