import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/navigation";

const Values: React.FC = () => {
	const t = useTranslations("App.Home.Business");

	return (
		<section className="container py-12 px-4 lg:px-12 md:py-24 bg-primary/25 rounded-box shadow-xl">
			<div className="flex flex-col lg:flex-row gap-8 items-center">
				<div className="w-full lg:w-2/5 items-center justify-end h-[50vh] hidden lg:flex overflow-hidden">
					<figure className="rounded-box overflow-hidden shadow-sm">
						<Image
							src="/portrait.jpg"
							alt="Image de portrait"
							width={360}
							height={480}
							className="object-cover object-center"
						/>
					</figure>
				</div>
				<div className="w-full lg:flex-grow space-y-4 lg:space-y-8 px-4 lg:px-8">
					<header className="w-full lg:w-4/5 p-0 lg:p-4 ">
						<h2 className="section-heading">{t("heading")}</h2>
						<p className="section-description">{t("description")} </p>
					</header>
					<div className="w-full items-center justify-start h-72 flex lg:hidden overflow-hidden">
						<figure className="rounded-box overflow-hidden shadow-sm">
							<Image
								src="/portrait.jpg"
								alt="Image de portrait"
								width={360}
								height={480}
								className="object-cover object-center"
							/>
						</figure>
					</div>
					<div className="w-full lg:w-4/5 space-y-4 p-0 lg:px-4 py-4 lg:py-0">
						<div className="flex flex-col lg:flex-row gap-0 md:gap-2">
							<h5 className="font-semibold text-lg w-full lg:w-1/3">
								Nos valuers
							</h5>
							<div className="space-y-2 flex-grow">
								<p className="text-neutral-700 text-sm md:text-base">
									Juste quelque chose au sujet de nos valuers. Une toute petite
									description
								</p>
								<Link
									href="/about"
									className="btn btn-neutral btn-outline btn-sm"
								>
									Lire plus
									<ArrowUpRight className="size-4" />
								</Link>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row gap-0 md:gap-2">
							<h5 className="font-semibold text-lg w-full lg:w-1/3">
								Notre mission
							</h5>
							<div className="space-y-2 flex-grow">
								<p>
									Juste quelque chose au sujet de nos valuers. Une toute petite
									description
								</p>
								<Link
									href="/about"
									className="btn btn-neutral btn-outline btn-sm"
								>
									Lire plus
									<ArrowUpRight className="size-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
