import React from "react";
import { PizzasItem } from "@store/pizzas/types";
import { Link } from "react-router-dom";
import AddToCartBtn from "@components/AddToCartBtn";

const PizzaBlock: React.FC<PizzasItem> = (props) => {
	const { id, name, price, size, weight, imageUrl } = props;
	return (
		<div className="pizza-block">
			<Link to="/pizza" state={{ id }}>
				<img className="pizza-block__image" src={imageUrl} alt="Pizza" width="250px" height="250px" />
				<h4 className="pizza-block__title">{name}</h4>
			</Link>
			<div className="pizza-block__selector">
				<span>{weight} г.</span>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">{price} ₴</div>
				<AddToCartBtn {...props} />
			</div>
		</div>
	);
};

export default PizzaBlock;
