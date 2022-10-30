import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { getStringParameters, setStringParameters } from "@utils/queryString";

import { useAppDispatch } from "@store/store";
import { setFilters } from "@store/filter/slice";
import { selectFilters } from "@store/filter/selectors";
import { EType, EOrder, SortListItem } from "@store/pizzas/types";
import { fetchPizzas } from "@store/pizzas/slice";
import { selectPizzas } from "@store/pizzas/selectors";

import Filters from "@components/Filters";
import PizzaBlock from "@components/PizzaBlock";
import Skeleton from "@components/PizzaBlock/Skeleton";
import Pagination from "@components/Pagination";

const sortList: SortListItem[] = [
	{ text: "популярности (DESC)", type: EType.RATING, order: EOrder.DESK },
	{ text: "популярности (ASC)", type: EType.RATING, order: EOrder.ASK },
	{ text: "цене (DESC)", type: EType.PRICE, order: EOrder.DESK },
	{ text: "цене (ASC)", type: EType.PRICE, order: EOrder.ASK },
	{ text: "алфавиту (DESC)", type: EType.NAME, order: EOrder.DESK },
	{ text: "алфавиту (ASC)", type: EType.NAME, order: EOrder.ASK }
];

const HomePage: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const isMounted = useRef(false);

	const { categoryId, sortType, searchValue, currentPage } =
		useSelector(selectFilters);
	const { items, status } = useSelector(selectPizzas);

	let activeSort = sortList[sortType];
	const getPizzas = async () => {
		const search: string = searchValue ? `&search=${searchValue}` : ``;
		const category: string = categoryId > 0 ? `&category=${categoryId}` : ``;
		let queryString = `?page=${currentPage}&limit=4${category}${search}&sortBy=${activeSort.type}&order=${activeSort.order}`;
		dispatch(fetchPizzas(queryString));
	};

	useEffect(() => {
		if (location.search) {
			const params = getStringParameters(window.location.search);
			const sortIndex = sortList.findIndex((el) => {
				return el.type === params.sortBy && el.order === params.order;
			});
			dispatch(
				setFilters({
					currentPage: Number(params.currentPage),
					categoryId: Number(params.categoryId),
					sortType: sortIndex
				})
			);
		}
	}, []);
	// при первом рендере не вшивать параметры в адресную строку
	useEffect(() => {
		if (isMounted.current) {
			const queryString = setStringParameters({
				sortBy: activeSort.type,
				order: activeSort.order,
				categoryId,
				currentPage
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sortType, currentPage]);
	useEffect(() => {
		getPizzas();
	}, [categoryId, sortType, currentPage, searchValue]);

	return (
		<>
			<Filters
				categoryId={categoryId}
				sortList={sortList}
				sortActive={activeSort.text}
				sortType={sortType}
			/>
			<div className="content__items">
				{status === "error" ? (
					<div className="cart cart--empty">
						<h2>
							Корзина пустая <span>😕</span>
						</h2>
						<p>Вероятней всего, вы не заказывали ещё пиццу.</p>
					</div>
				) : status === "loading" ? (
					[...new Array(4)].map((_, i) => <Skeleton key={i} />)
				) : (
					items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
				)}
			</div>
			{categoryId === 0 && <Pagination />}
		</>
	);
};
export default HomePage;
