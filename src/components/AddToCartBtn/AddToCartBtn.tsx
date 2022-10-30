import AddBtn from "@components/UI/buttons/AddBtn";
import React from "react";
import { selectCartItemById } from "@store/cart/selectors";
import { PizzasItem } from "@store/pizzas/types";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@store/store";
import { addItem } from "@store/cart/slice";
import { IconPlus } from "@ui/icons";
const AddToCartBtn: React.FC<PizzasItem> = ({
	id,
	name,
	price,
	imageUrl,
	size,
	weight
}) => {
	const pizzaItem = useSelector(selectCartItemById(id));
	const dispatch = useAppDispatch();
	const handlerClickButton = () => {
		const item = {
			id,
			name,
			price,
			imageUrl,
			size,
			weight
		};

		dispatch(addItem(item));
	};
	return (
		<button
			className="button button--outline button--add"
			onClick={handlerClickButton}
		>
			<IconPlus />
			<span>Добавить</span>
			<i>{pizzaItem?.count || 0}</i>
		</button>
	);
};

export default AddToCartBtn;
