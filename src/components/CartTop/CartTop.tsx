import React from "react";
import { useAppDispatch } from "@store/store";
import { clearItems } from "@store/cart/slice";
import { IconCard, IconBucket } from "@ui/icons";
const CartTop: React.FC = () => {
	const dispatch = useAppDispatch();
	return (
		<div className="cart__top">
			<h2 className="title">
				<IconCard />
				Корзина
			</h2>
			<button
				onClick={() => {
					dispatch(clearItems());
				}}
				className="cart__clear"
			>
				<IconBucket />
				<span>Очистить корзину</span>
			</button>
		</div>
	);
};

export default CartTop;
