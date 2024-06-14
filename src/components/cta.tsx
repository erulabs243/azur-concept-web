import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Props = {
	label: string;
	link: string;
};

export const CtaButton: React.FC<Props> = ({ label, link }) => {
	return (
		<Link href={link} className="group btn btn-secondary btn-outline">
			{label}
			<ArrowUpRight className="size-4" />
		</Link>
	);
};
