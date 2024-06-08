import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type PageLink = { label: string; link: string };

type Props = {
	heading: string;
	description?: string;
	subheading?: string | PageLink;
	image?: string;
	cta?: PageLink;
};

const Subheading: React.FC<{ content?: string | PageLink }> = ({ content }) => {
	if (!content) return null;

	if (typeof content === "string") return <p>{content}</p>;

	return (
		<Link
			href={content.link}
			className="btn btn-sm btn-outline btn-secondary mx-4"
		>
			{content.label}
			<ArrowUpRight className="size-4" />
		</Link>
	);
};

const Hero: React.FC<Props> = ({
	heading,
	description,
	subheading,
	image,
	cta,
}) => {
	return (
		<div className="min-h-[60vh] bg-red-400 flex flex-col justify-center ">
			{image && (
				<div className="absolute top-0 w-full h-full overflow-hidden brightness-50">
					<Image
						src={image}
						alt={heading}
						width={4096}
						height={4096}
						className="w-full h-full object-cover"
					/>
				</div>
			)}
			<div className="container z-10 py-24">
				<Subheading content={subheading} />
				<div className="flex flex-col lg:flex-row gap-4">
					<div className="w-full lg:w-1/2 p-4 space-y-8">
						<h1 className="text-5xl text-base-100 font-bold">{heading}</h1>
						{cta && (
							<Link href={cta.link} className="btn btn-primary w-48">
								{cta.label}
								<ArrowUpRight className="size-4" />
							</Link>
						)}
					</div>
					{description && (
						<div className="w-full lg:w-1/2 py-4 px-8">
							<p className="text-lg text-base-300">{description}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Hero;
