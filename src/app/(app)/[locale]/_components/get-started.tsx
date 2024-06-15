const GetStarted: React.FC = () => {
	return (
		<div className="container">
			<div className="card shadow-xl text-primary-content bg-primary py-12 md:py-24 px-0 lg:px-4 md:px-12 rounded-box">
				<div className="card-body">
					<div className="flex flex-col lg:flex-row gap-4">
						<div className="w-full lg:w-1/2">
							<h6 className="section-heading">Get started</h6>
							<p className="section-description text-primary-content">
								Une longue description sur le getting started
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
