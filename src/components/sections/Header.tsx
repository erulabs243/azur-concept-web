import { ArrowUpRight, MenuIcon } from "lucide-react";

import { MenuPage } from "./menu.page";
import { Link } from "@/navigation";

const Header: React.FC = () => {
	return (
		<div className="navbar w-full sticky bg-primary text-primary-content top-0 z-50">
			<div className="container">
				<div className="navbar-start">
					<Link href="/">AzurConcept</Link>
				</div>
				<div className="navbar-center hidden lg:flex ">
					<MenuPage />
				</div>
				<div className="navbar-end flex flex-row">
					<Link href="/contact" className="btn btn-secondary hidden lg:flex">
						Let's talk <ArrowUpRight className="size-4" />
					</Link>
					<div className="flex-none lg:hidden">
						<label htmlFor="menu" className="btn btn-ghost">
							Menu
							<MenuIcon className="size-4" />
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
