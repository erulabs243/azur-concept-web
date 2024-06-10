import { Suspense } from "react";

type Stat = { title: string; value: number; description?: string };

const stats: Stat[] = [
	{
		title: "Projects",
		value: 4,
		description: "Projets sur lesquels nous avons travailles",
	},
	{ title: "Clients", value: 24, description: "Clients satisfaits" },
	{ title: "Annees", value: 3, description: "Annees d'experience" },
];

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
	<div className="stat hover:bg-base-300 hover:cursor-pointer">
		<div className="stat-title">{stat.title}</div>
		<p className="stat-value">{stat.value}</p>
		{stat.description && <p className="stat-desc">{stat?.description}</p>}
	</div>
);

export default async function Statistics() {
	return (
		<section className="container py-4">
			<Suspense>
				<div className="flex flex-col lg:flex-row gap-4">
					{stats.map((stat) => (
						<StatCard key={stat.title} stat={stat} />
					))}
				</div>
			</Suspense>
		</section>
	);
}
