import type { CollectionConfig } from "payload/types";

export const Profile = {
	slug: "profile",
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
		staticDir: "media/profiles",
		imageSizes: [
			{ name: "avatar", width: 512, height: 512, position: "centre" },
		],
		adminThumbnail: "avatar",
		mimeTypes: ["image/*"],
	},
} satisfies CollectionConfig;
