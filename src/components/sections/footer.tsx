import { getServiceCategories } from "@/app/(app)/_api/services";
import { Link } from "@/navigation";

export default async function Footer() {
	const categories = await getServiceCategories({});

	return (
		<footer className="p-12 mt-12 bg-neutral/20">
			<div className="container flex flex-col md:flex-row gap-4 text-base-content">
				<aside className="w-full lg:w-1/3">
					<p>Azur Concept</p>
				</aside>
				<div className="footer w-full lg:flex-grow grid grid-rows-2 gap-4">
					{categories.totalDocs > 0 &&
						categories.docs.map((category) => (
							<nav key={category.id}>
								<h6 className="footer-title">{category.title}</h6>
								{category?.services &&
									category?.services?.length > 0 &&
									category?.services?.map((service) =>
										typeof service === "string" ? (
											<Link
												href={{
													pathname: "/services/[slug]",
													params: { slug: service },
												}}
												key={service}
											>
												{service}
											</Link>
										) : (
											<Link
												href={{
													pathname: "/services/[slug]",
													params: { slug: service.slug },
												}}
												key={service.id}
											>
												{service.name}
											</Link>
										),
									)}
							</nav>
						))}
					<nav>
						<h6 className="footer-title">Company</h6>
					</nav>
					<nav>
						<h6 className="footer-title">Legal</h6>
					</nav>
				</div>
			</div>
		</footer>
	);
}
