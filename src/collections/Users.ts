import type { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
	},
	// auth: true,
	auth: {
		tokenExpiration: 60 * 60 * 24,
	},
	fields: [
		// Email added by default
		// Add more fields as needed
	],
};
