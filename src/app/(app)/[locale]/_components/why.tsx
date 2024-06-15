import { ArrowUpRight } from "lucide-react";

import Image from "next/image";
import clsx from "clsx";

type WhyCardProps = {
	title: string;
	description: string;
};

const WhyCard: React.FC<WhyCardProps> = ({ title, description }) => {
	return (
		<div className="border group border-neutral p-4 gap-2 rounded-box flex flex-col hover:cursor-pointer hover:border-none hover:bg-neutral/25 transition-all duration-500 ease-in-out shadow-sm">
			<div className="p-2 rounded-box border border-primary bg-none group-hover:bg-primary group-hover:border-none self-start transition-all duration-500 ease-in-out">
				<ArrowUpRight className="size-8" />
			</div>
			<h6 className="text-xl font-semibold">{title}</h6>
			<p className="text-neutral-600">{description}</p>
		</div>
	);
};

const Why: React.FC = () => {
	const reasons: WhyCardProps[] = [
		{
			title: "Reason #1",
			description: "Une description sur la premiere raison",
		},
		{ title: "Reason #2", description: "Une description sur la 2nde raison" },
		{ title: "Reason #3", description: "Une 3eme description" },
		{ title: "Reason #4", description: "At least a last one" },
	];

	return (
		<section className="container py-12 px-4 lg:px-12 md:py-24">
			<div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
				<div className="w-full lg:w-2/5 hidden lg:flex items-center justify-start h-[50vh] overflow-hidden">
					<figure className="rounded-box overflow-hidden shadow-sm">
						<Image
							src="/portrait.jpg"
							alt="Iage de portraint"
							width={360}
							height={480}
						/>
					</figure>
				</div>
				<div className="w-full lg:flex-grow space-y-4 lg:space-y-8 px-4 lg:px-8">
					<header className="w-full lg:w-4/5 p-0 lg:p-4">
						<h2 className="section-heading">Heading</h2>
						<p className="section-description">
							Une toute petite descriptin a dire sur quelque chose sur pourquoi
							travailler avec AzurConcept. Je ne sais pas trop quoi ecrire, mais
							ca vaut vraiment la peine
						</p>
					</header>
					<div className="w-full lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4 p-0 lg:px-4 py-4 lg:py-0">
						{reasons.map((reason) => (
							<WhyCard
								key={reason.title}
								title={reason.title}
								description={reason.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Why;
