import clsx from "clsx";

type StartCardProps = {
	id: number;
	active: boolean;
	title: string;
	description: string;
	cta?: { label: string; link: string };
};

const StartCard: React.FC<StartCardProps> = ({
	id,
	active,
	title,
	description,
	cta,
}) => (
	<li>
		<p className="timeline-start">{`Etape ${id}`}</p>
		<p className="timeline-end">{description}</p>
		<hr />
	</li>
);

const steps: Omit<StartCardProps, "id">[] = [
	{
		active: true,
		title: "Call",
		description: "View our contact form and book a call for your project",
		cta: { label: "Let's talk", link: "/contact" },
	},
	{
		active: false,
		title: "Step 2",
		description: "View the 2nd step before start working on your project",
	},
	{
		active: false,
		title: "Step 3",
		description: "This is the last step. We hope everything will be fine",
	},
];

const HowStart: React.FC = () => {
	return (
		<section className="bg-primary py-12">
			<div className="container">
				<h3 className="text-4xl text-center font-semibold">
					Comment travailler avec nous
				</h3>
				<p className="text-center">
					Un petit texte qui montre comment commencer a travailler avec Concept
					Azur... Je crois qu'ils vont trouver un texte interessant a mettre
					dessus
				</p>
			</div>
		</section>
	);
};

export default HowStart;
