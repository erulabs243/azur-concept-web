import Image from "next/image";

const Why: React.FC = () => {
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
						<nav role="tablist" className="tabs tabs-bordered">
							<a role="tab" className="tab tab-active">
								Reaon #1
							</a>
							<a role="tab" className="tab">
								Reason #2
							</a>
							<a role="tab" className="tab">
								Reason #3
							</a>
						</nav>
						<div role="tabpanel">
							<p>
								Ceci est au sujet de la premiere raison. Il faudrait juste faire
								something awesome about it and all is set up
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Why;
