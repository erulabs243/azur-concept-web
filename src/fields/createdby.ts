import { Users } from "@/collections";
import type { Field } from "payload/types";

export const createdByField = {
	name: "createdBy",
	type: "relationship",
	relationTo: Users.slug,
	required: true,
	admin: {
		readOnly: true,
		position: "sidebar",
	},
	access: {
		update: () => false,
	},
} satisfies Field;
