import { generateSlugId } from "@/utils/id.gen";
import type { FieldHook } from "payload/types";
import slug from "slug";

export const formatSlug =
	(fallback: string): FieldHook =>
	({ operation, value, originalDoc, data }) => {
		const id = generateSlugId();

		if (typeof value === "string") {
			return operation === "create" ? `${slug(value)}-${id}` : slug(value);
		}

		if (operation === "create" || operation === "update") {
			const fallbackData = data?.[fallback] || originalDoc?.[fallback];

			// console.log(fallbackData);
			// TODO update slug everytime
			if (fallbackData && typeof fallbackData === "string") {
				return operation === "create"
					? `${slug(fallbackData)}-${id}`
					: slug(fallbackData);
			}
		}

		return value;
	};
