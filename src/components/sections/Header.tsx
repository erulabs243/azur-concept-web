import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
	return (
		<div className="navbar container">
			<div className="navbar-start">
				<Link href="/">AzurConcept</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/services">Services</Link>
					</li>
					<li>
						<Link href="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<Link href="/contact" className="btn btn-secondary">
					Let's talk <ArrowUpRight className="size-4" />
				</Link>
			</div>
		</div>
	);
};

export default Header;
