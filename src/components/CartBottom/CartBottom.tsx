import React from "react";
import BackBtn from "@ui/buttons/BackBtn";
import DefaultBtn from "@ui/buttons/DefaultBtn";
interface CartBottomProps {
	count: number;
	totalPrice: number;
	openModal: () => void
}
const CartBottom: React.FC<CartBottomProps> = ({ count, totalPrice, openModal }) => {
	return (
		<div className="cart__bottom">
			<div className="cart__bottom-details">
				<span>
					Всего пицц: <b>{count}</b>
				</span>
				<span>
					Сумма заказа: <b>{totalPrice} ₴</b>
				</span>
			</div>
			<div className="cart__bottom-buttons">
				<BackBtn />
				<DefaultBtn text="Оплатить сейчас" handlerClick={openModal} />
			</div>
		</div>
	);
};

export default CartBottom;
