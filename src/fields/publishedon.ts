import type { Field } from "payload/types";

export const publishedOnField = {
	name: "publishedOn",
	type: "date",
	admin: {
		position: "sidebar",
		date: {
			pickerAppearance: "dayAndTime",
		},
	},
} satisfies Field;
