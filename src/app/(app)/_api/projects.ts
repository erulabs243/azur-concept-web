import { cache } from "react";
import { cms } from "./api";

export const getProjects = cache(
	async () => await cms.find({ collection: "projects" }),
);

export const getReviews = cache(
	async () => await cms.find({ collection: "reviews" }),
);
