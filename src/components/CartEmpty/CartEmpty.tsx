import React from "react";
import { Link } from "react-router-dom";

import emptyImg from "@img/empty-cart.png";

const CartEmpty: React.FC = () => {
	return (

		<div className="container--cart">
			<div className="error-bl">
				<h2>
					Корзина пустая <span>😕</span>
				</h2>
				<p>
					Вероятней всего, вы не заказывали ещё пиццу.
					<br />
					Для того, чтобы заказать пиццу, перейди на главную страницу.
				</p>
				<img src={emptyImg} alt="Empty cart" width='300px' height='255px' />

				<Link to="/" className="button button--black">
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div>

	);
};

export default CartEmpty;
