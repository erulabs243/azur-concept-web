"use client";

import { useState } from "react";
import clsx from "clsx";

type StartCardProps = {
	id: number;
	active: boolean;
	title: string;
	description: string;
	cta?: { label: string; link: string };
};

const steps: Omit<StartCardProps, "id" | "active">[] = [
	{
		title: "Call",
		description: "View our contact form and book a call for your project",
		cta: { label: "Let's talk", link: "/contact" },
	},
	{
		title: "Step 2",
		description: "View the 2nd step before start working on your project",
	},
	{
		title: "Step 3",
		description: "This is the last step. We hope everything will be fine",
	},
];

const HowStart: React.FC = () => {
	const [activeStep, setActiveStep] = useState<number>(0);
	const focusStep = (id: number) => setActiveStep(id);

	return (
		<section className="bg-primary py-12 space-y-8">
			<div className="container">
				<header className="space-y-1 w-full md:w-1/2 mx-auto">
					<h4 className="section-heading text-center">
						Comment travailler avec nous
					</h4>
					<p className="section-description text-center text-base-content">
						Un petit texte qui montre comment commencer a travailler avec
						Concept Azur... Je crois qu'ils vont trouver un texte interessant a
						mettre dessus
					</p>
				</header>
				<div className="flex flex-row p-4">
					<div className="flex flex-col gap-2 w-1/2">
						{steps.map((item, idx) => (
							<div className="flex flex-row" key={item.title}>
								<div
									className="w-full lg:w-1/3 hover:cursor-pointer"
									onClick={() => focusStep(idx)}
									onKeyUp={() => focusStep(idx)}
								>
									<p>{`Etape ${idx + 1}`}</p>
									<h4>{item.title}</h4>
								</div>
							</div>
						))}
					</div>
					<div className="flex flex-col w-1/2">
						{steps.map((item, idx) => (
							<div
								className={clsx(
									activeStep === idx ? "flex flex-grow" : "hidden",
								)}
								key={item.title}
							>
								<p className="timeline-end">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowStart;
