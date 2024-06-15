// @ts-nocheck

import { clsx } from "clsx";

import { pages } from "@/data/menus";
import { Link } from "@/navigation";

type Props = {
	mobile?: boolean;
};
export const MenuPage: React.FC<Props> = ({ mobile = false }) => {
	return (
		<ul
			className={clsx(
				"menu",
				!mobile && "menu-horizontal",
				mobile && "menu-vertical",
			)}
		>
			{pages.map((page) => (
				<li key={page.link}>
					<Link href={{ pathname: page.link }}>{page.label}</Link>
				</li>
			))}
		</ul>
	);
};
