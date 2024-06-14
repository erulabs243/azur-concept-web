import type { Access } from "payload/types";

export const readDraft = (({ req: { user } }) => {
	if (user) return true;

	return {
		_status: {
			equals: "published",
		},
	};
}) satisfies Access;
