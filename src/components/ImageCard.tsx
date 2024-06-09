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
				className="object-cover object-center"
			/>
		);

	return (
		<Image
			alt={media.alt}
			src={media.sizes?.card?.url}
			width={760}
			height={480}
			className="object-cover object-center"
		/>
	);
};
