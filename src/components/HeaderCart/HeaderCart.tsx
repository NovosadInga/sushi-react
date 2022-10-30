import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCart } from "@store/cart/selectors";
import { IconCard } from "@ui/icons";

const HeaderCart: React.FC = memo(() => {
	const { count, totalPrice } = useSelector(selectCart);
	return (
		<div className="header__cart">
			<Link to="/cart" className="button button--cart">
				<span>{totalPrice} ₴</span>
				<div className="button__delimiter"></div>
				<IconCard />
				<span>{count}</span>
			</Link>
		</div>
	);
});

export default HeaderCart;
