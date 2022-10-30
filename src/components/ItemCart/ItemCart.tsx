import React from "react";

import { useAppDispatch } from "@store/store";
import { removeItems, addOneItem, removeOneItem } from "@store/cart/slice";
import { CartItemSlice } from "@store/cart/types";
import { IconMinus, IconPlus, IconClose } from "@ui/icons";
import CircleBtn from "@components/UI/buttons/CircleBtn";
import { Link } from "react-router-dom";

const ItemCart: React.FC<CartItemSlice> = ({
	id,
	name,
	imageUrl,
	size,
	count,
	price,
	weight
}) => {
	const dispatch = useAppDispatch();
	const handlerClickButtonPlus = () => {
		dispatch(addOneItem(id));
	};
	const handlerClickButtonMinus = () => {
		dispatch(removeOneItem(id));
	};
	const handlerClickButtonRemove = () => {
		dispatch(removeItems({ id, count, price }));
	};
	return (
		<div className="cart__item">
			<div className="cart__item-wrap cart__item-left">
				<div className="cart__item-img">
					<Link to={`/pizza`} state={{ id }}>
						<img className="pizza-block__image" src={imageUrl} alt={name} />
					</Link>
				</div>
				<div className="cart__item-info">
					<Link to={`/pizza`} state={{ id }}>
						<h3>{name}</h3>
						<p>
							{weight} г.
						</p>
					</Link>
				</div>
			</div>
			<div className="cart__item-wrap cart__item-right">
				<div className="cart__item-count">
					<CircleBtn
						classes="cart__item-count-minus button--outline"
						handlerClick={handlerClickButtonMinus}
						icon={<IconMinus />}
					/>
					<b>{count}</b>
					<CircleBtn
						classes="cart__item-count-plus button--outline"
						handlerClick={handlerClickButtonPlus}
						icon={<IconPlus />}
					/>
				</div>
				<div className="cart__item-price">
					<b>{count * price} ₴</b>
				</div>
				<div className="cart__item-remove">
					<CircleBtn
						handlerClick={handlerClickButtonRemove}
						icon={<IconClose />}
						classes="button--close"
					/>
				</div>
			</div>
		</div>
	);
};

export default ItemCart;
