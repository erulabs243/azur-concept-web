import clsx from "clsx";
import { ArrowUp01 } from "lucide-react";

type StartCardProps = {
	id: number;
	title: string;
	description: string;
};

const steps: StartCardProps[] = [
	{
		id: 1,
		title: "Call",
		description: "View our contact form and book a call for your project",
	},
	{
		id: 2,
		title: "Step 2",
		description: "View the 2nd step before start working on your project",
	},
	{
		id: 3,
		title: "Step 3",
		description: "This is the last step. We hope everything will be fine",
	},
];

const StartCard: React.FC<StartCardProps> = ({ id, title, description }) => {
	return (
		<div className="border border-neutral p-4 rounded-box hover:border-none hover:shadow-sm flex flex-col gap-2 hover:cursor-pointer hover:bg-gray-100 shadow-sm transition-all duration-500 ease-in-out">
			<div className="p-2 rounded-box border border-neutral self-start">
				{
					{
						1: <ArrowUp01 className="size-8" />,
						2: <ArrowUp01 className="size-8" />,
						3: <ArrowUp01 className="size-8" />,
					}[id]
				}
			</div>
			<h5 className="text-xl font-semibold">{title}</h5>
			<p className="text-primary-content">{description}</p>
		</div>
	);
};

const HowStart: React.FC = () => {
	return (
		<section className="bg-primary py-12 md:py-24 lg:py-36 shadow-xl">
			<div className="container space-y-8 px-4">
				<header className="w-full md:w-1/2 px-4">
					<h4 className="section-heading">Comment travailler avec nous</h4>
					<p className="section-description text-primary-content">
						Un petit texte qui montre comment commencer a travailler avec
						Concept Azur... Je crois qu'ils vont trouver un texte interessant a
						mettre dessus
					</p>
				</header>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
					{steps.map((step) => (
						<StartCard
							key={step.title}
							id={step.id}
							title={step.title}
							description={step.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowStart;
