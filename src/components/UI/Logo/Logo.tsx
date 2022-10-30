import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "@img/sushi-logo.svg";
const Logo = memo(() => {
	return (
		<Link to="/" className="header__logo">
			<img width="38" src={logo} alt="Pizza logo" />
			<div>
				<h1><span>Suchi</span> React</h1>
				<p>самые вкусные ролы</p>
			</div>
		</Link>
	);
});

export default Logo;
