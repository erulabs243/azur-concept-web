import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Values: React.FC = () => {
	return (
		<section className="container py-12">
			<div className="flex flex-col lg:flex-row gap-4 items-center">
				<figure className="w-full lg:w-1/2 flex items-center justify-center h-[50vh] overflow-hidden">
					<Image
						src="/portrait.jpg"
						alt="Image de portrait"
						width={360}
						height={480}
					/>
				</figure>
				<div className="w-full lg:w-1/2 space-y-8">
					<h2 className="text-4xl">Heading</h2>
					<div className="flex flex-col lg:flex-row gap-2">
						<h5 className="font-semibold w-full lg:w-1/5">Nos valuers</h5>
						<div className="space-y-4">
							<p>
								Juste quelque chose au sujet de nos valuers. Une toute petite
								description
							</p>
							<Link
								href="/about#values"
								className="btn btn-neutral btn-outline btn-sm"
							>
								Lire plus
								<ArrowUpRight className="size-4" />
							</Link>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row gap-2">
						<h5 className="font-semibold w-full lg:w-1/5">Notre mission</h5>
						<div className="space-y-4">
							<p>
								Juste quelque chose au sujet de nos valuers. Une toute petite
								description
							</p>
							<Link
								href="/about#values"
								className="btn btn-neutral btn-outline btn-sm"
							>
								Lire plus
								<ArrowUpRight className="size-4" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
