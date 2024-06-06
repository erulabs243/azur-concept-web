import type { BeforeChangeHook } from "node_modules/payload/dist/collections/config/types";

export const createdByHook = (async ({ req, operation, data }) => {
	if (operation === "create") {
		if (req.user) {
			data.createdBy = req.user.id;
			return data;
		}
	}
}) satisfies BeforeChangeHook;
