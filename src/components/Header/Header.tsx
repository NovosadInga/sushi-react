import React from "react";
import { useLocation } from "react-router-dom";

import Search from "@components/Search";
import Logo from "@components/UI/Logo";
import HeaderCart from "@components/HeaderCart";

const Header: React.FC = () => {
	const { pathname } = useLocation();
	return (
		<div className="header">
			<div className="container">
				<Logo />
				<div className="header-wrap">
					{pathname === "/" && <Search />}
					<HeaderCart />
				</div>
			</div>
		</div>
	);
};
export default Header;
