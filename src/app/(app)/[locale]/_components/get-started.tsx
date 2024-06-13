const GetStarted: React.FC = () => {
	return (
		<div className="container py-12">
			<div className="card shadow-xl text-secondary-content bg-secondary">
				<div className="card-body">
					<div className="flex flex-row gap-4">
						<div className="w-full lg:w-1/2">
							<h6 className="card-title">Get started</h6>
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
