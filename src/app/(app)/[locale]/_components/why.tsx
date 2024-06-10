"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const Why: React.FC = () => {
	const [currentTab, setCurrentTab] = useState<string>("tab-1");
	const focusTab = (id: string) => setCurrentTab(id);

	return (
		<section className="container py-12">
			<div className="flex flex-col lg:flex-row-reverse gap-4 items-center">
				<figure className="w-full lg:w-1/2 flex items-center justify-center h-[50vh] overflow-hidden">
					<Image
						src="/portrait.jpg"
						alt="Iage de portraint"
						width={360}
						height={480}
					/>
				</figure>
				<div className="w-full lg:w-1/2 space-y-8 px-4">
					<header>
						<h2 className="text-4xl">Heading</h2>
						<p>
							Une toute petite descriptin a dire sur quelque chose sur pourquoi
							travailler avec AzurConcept. Je ne sais pas trop quoi ecrire, mais
							ca vaut vraiment la peine
						</p>
					</header>
					<div>
						<nav role="tablist" className="flex flex-row">
							<button
								role="tab"
								className={clsx(
									"btn",
									currentTab === "tab-1"
										? "btn-primary flex-grow"
										: "btn-ghost",
								)}
								onClick={() => focusTab("tab-1")}
							>
								Reaon #1
							</button>
							<button
								role="tab"
								className={clsx(
									"btn",
									currentTab === "tab-2"
										? "btn-primary flex-grow"
										: "btn-ghost",
								)}
								onClick={() => focusTab("tab-2")}
							>
								Reason #2
							</button>
							<button
								role="tab"
								className={clsx(
									"btn",
									currentTab === "tab-3"
										? "btn-primary flex-grow"
										: "btn-ghost",
								)}
								onClick={() => focusTab("tab-3")}
							>
								Reason #3
							</button>
						</nav>
						{currentTab === "tab-1" && (
							<div role="tabpanel">
								<p>
									Ceci est au sujet de la premiere raison. Il faudrait juste
									faire something awesome about it and all is set up
								</p>
							</div>
						)}
						{currentTab === "tab-2" && (
							<div role="tabpanel">
								<p>Ceci est la deuxieme raison. Juste un autre paragraphe</p>
							</div>
						)}
						{currentTab === "tab-3" && (
							<div role="tabpanel">
								<p>Ceci est le dernier paragraphe a voir</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Why;
