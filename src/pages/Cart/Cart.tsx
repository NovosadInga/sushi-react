import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@store/store";
import { selectCart } from "@store/cart/selectors";

import ItemCart from "@components/ItemCart";
import CartEmpty from "@components/CartEmpty";
import CartTop from "@components/CartTop";
import CartBottom from "@components/CartBottom";
import Modal from "@components/UI/Modal/Modal";
import OrderForm from "@components/OrderForm";
import { claerStatus } from "@store/order/slice";
import { selectOrder } from "@store/order/selector";
import { Status } from "@store/pizzas/types";

const Card: React.FC = () => {
	const { totalPrice, count, items } = useSelector(selectCart);
	const { status } = useSelector(selectOrder);
	const [active, setActive] = useState(false);
	const dispatch = useAppDispatch();
	const closeModal = () => {
		setActive(false)
	}
	const openModal = () => {
		if (status !== Status.NONE) dispatch(claerStatus())
		setActive(true)
	}
	return (
		<>
			{!totalPrice ? (
				<CartEmpty />
			) : (
				<div className="container--cart">
					<div className="cart">
						<CartTop />
						<div className="cart__items">
							{items?.map((props: any) => {
								return <ItemCart key={props.id} {...props} />;
							})}
						</div>
						<CartBottom openModal={openModal} count={count} totalPrice={totalPrice} />
					</div>
					<Modal closeModal={closeModal} active={active}>
						<OrderForm />
					</Modal>
				</div>

			)}
		</>
	);
};

export default Card;
