import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { PizzasItem } from "@store/pizzas/types";
import AddToCartBtn from "@components/AddToCartBtn";
import { fetchPizzas, setActivePizza } from "@store/pizzas/slice";
import { useAppDispatch } from "@store/store";
import { selectPizzas } from "@store/pizzas/selectors";
import BackBtn from "@components/UI/buttons/BackBtn";

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = useState<null | PizzasItem>(null);
	const [pizzasTitle, setPizzasTitle] = useState<string[]>([""]);
	const dispatch = useAppDispatch();
	const { items, status, active } = useSelector(selectPizzas);
	const location = useLocation();
	useEffect(() => {
		const active = location.state ? location.state.id : 0;
		dispatch(setActivePizza(Number(active)));
		const getPizzas = async () => {
			dispatch(fetchPizzas(""));
		};
		getPizzas();
	}, []);
	useEffect(() => {
		if (items.length) {
			setPizza(items[active]);
			setPizzasTitle(items.map((el) => el.name));
		}
	}, [items]);
	if (!pizza) {
		return (
			<div className="container">
				<h2 className="title">Загрузка...</h2>
			</div>
		);
	}
	return (
		<div className="full">
			<ul className="full__menu">
				{pizzasTitle.map((title, i) => (
					<li
						key={title}
						onClick={() => {
							dispatch(setActivePizza(Number(i)));
							setPizza(items[i]);
						}}
						className={`full__menu-item ${pizza.name === title ? "active" : ""
							}`}
					>
						{title}
					</li>
				))}
			</ul>
			<div className="full__bl">
				<div className="full__bl-img">
					<img src={pizza.imageUrl} alt={pizza.name} />
				</div>
				<div className="full__bl-content">
					<BackBtn />
					<h2 className="title">{pizza.name}</h2>
					<p>{pizza.description}</p>
					<div className="full__data">
						<span>{pizza.weight} г.</span>
					</div>
					<div className="full__price">{pizza.price} ₴</div>
					<AddToCartBtn {...pizza} />
				</div>
			</div>
		</div>
	);
};

export default FullPizza;
