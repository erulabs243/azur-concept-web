import type { ResolvingMetadata } from "next";
import type { Media } from "@/payload-types";

export const setMetaImage = (image?: string | Media) =>
	(typeof image === "string" ? image : image?.url) ?? "";

export const getPreviousOgImages = async (parent: ResolvingMetadata) =>
	(await parent).openGraph?.images || [];
