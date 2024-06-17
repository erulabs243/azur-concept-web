import { useTranslations } from "next-intl";

const GetStarted: React.FC = () => {
	const t = useTranslations("App.Home.CTA");

	return (
		<div className="container">
			<div className="card shadow-xl text-primary-content bg-primary py-12 md:py-24 px-0 lg:px-4 md:px-12 rounded-box">
				<div className="card-body">
					<div className="flex flex-col lg:flex-row gap-4">
						<div className="w-full lg:w-1/2">
							<h6 className="section-heading">{t("heading")}</h6>
							<p className="section-description text-primary-content">
								{t("description")}{" "}
							</p>
						</div>
						<div className="w-full lg:w-1/2 bg-neutral text-neutral-content p-8 rounded-box shadow-sm shadow-neutral">
							<p>Content around</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
