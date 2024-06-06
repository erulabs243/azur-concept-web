import type { Field } from "payload/types";
import { merge } from "merge-anything";
import { formatSlug } from "@/hooks/fields/slug";

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

// TODO auto create slugs
export const slugField: Slug = (fieldToUse = "title", overrides = {}) =>
	merge(
		{
			name: "slug",
			label: "Slug",
			type: "text",
			index: true,
			required: true,
			localized: true,
			admin: {
				position: "sidebar",
				readOnly: true,
			},
			hooks: {
				beforeChange: [formatSlug(fieldToUse)],
			},
		},
		overrides,
	) as Field;
