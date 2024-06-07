import type { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "alt",
		group: "Library",
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
			localized: true,
		},
	],
	upload: {
		staticDir: "media/posts",
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				height: 300,
				position: "centre",
			},
			{
				name: "card",
				width: 760,
				height: 1024,
				position: "centre",
			},
			{
				name: "tablet",
				width: 1024,
				height: undefined,
				position: "centre",
			},
		],
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*"],
	},
};
