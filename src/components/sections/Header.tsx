import { ArrowUpRight, MenuIcon } from "lucide-react";
import Link from "next/link";

import { MenuPage } from "./menu.page";

const Header: React.FC = () => {
	return (
		<div className="navbar w-full sticky top-0 z-50">
			<div className="navbar-start">
				<Link href="/">AzurConcept</Link>
			</div>
			<div className="navbar-center hidden lg:flex ">
				<MenuPage />
			</div>
			<div className="navbar-end">
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
	);
};

export default Header;
