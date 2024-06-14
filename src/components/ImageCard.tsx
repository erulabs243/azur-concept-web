// @ts-nocheck

import Image from "next/image";
import type { Media } from "@/payload-types";

type Props = {
	media: string | Media;
};

export const ImageCard: React.FC<Props> = ({ media }) => {
	if (typeof media === "string")
		return (
			<Image
				src={media}
				alt={media}
				width={760}
				height={480}
				className="object-cover object-center rounded-box hover:scale-110 transition-transform duration-500 ease-in-out hover:cursor-pointer"
			/>
		);

	return (
		<figure className="h-64 rounded-box overflow-hidden">
			<Image
				alt={media.alt}
				src={media.sizes?.card?.url}
				width={360}
				height={360}
				className="object-cover object-center w-full hover:scale-110 transition-transform duration-500 ease-in-out hover:cursor-pointer"
			/>
		</figure>
	);
};
