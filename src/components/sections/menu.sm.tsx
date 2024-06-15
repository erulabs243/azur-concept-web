import { ArrowUpRight } from "lucide-react";
import { MenuPage } from "./menu.page";
import { Link } from "@/navigation";

const MenuMobile: React.FC = () => {
	return (
		<div className="drawer-side lg:hidden">
			<label
				htmlFor="menu"
				className="drawer-overlay"
				aria-label="close sidebar"
			/>
			<section className="p-4 w-80 min-h-full bg-base-200 space-y-2">
				<Link href="/" className="btn btn-ghost btn-sm w-full">
					Azur Concept
				</Link>
				<MenuPage mobile={true} />
				<Link href="/contact" className="btn w-full btn-secondary">
					Let's talk
					<ArrowUpRight className="size-4" />
				</Link>
			</section>
		</div>
	);
};

export default MenuMobile;
