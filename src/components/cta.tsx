// @ts-nocheck

import { ArrowUpRight } from "lucide-react";
import { Link } from "@/navigation";

import type { pathnames } from "@/config";

type Props = {
	label: string;
	link: keyof typeof pathnames;
	size?: string;
};

export const CtaButton: React.FC<Props> = ({ label, link, size }) => {
	return (
		<Link
			href={{ pathname: link }}
			className={`group btn btn-secondary btn-outline ${size}`}
		>
			{label}
			<ArrowUpRight className="size-4" />
		</Link>
	);
};
