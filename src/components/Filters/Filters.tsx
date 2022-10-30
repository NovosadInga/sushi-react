import React, { memo } from "react";
import { SortListItem } from "@store/pizzas/types";
import Categories from "@components/Categories";
import Sort from "@components/Sort";
interface Filters {
	categoryId: number;
	sortList: SortListItem[];
	sortType: number;
	sortActive: string;
}
const categories = [
	"Все",
	"Филадельфия",
	"Запеченные",
	"Дракон",
	"Другие",
	"Сладкие"
];
const Filters: React.FC<Filters> = memo(
	({ categoryId, sortList, sortActive, sortType }) => {
		return (
			<>
				<div className="content__top">
					<Categories categoryId={categoryId} categories={categories} />
					<Sort
						sortList={sortList}
						sortActive={sortActive}
						sortType={sortType}
					/>
				</div>
				<h2 className="title">{categories[categoryId]}</h2>
			</>
		);
	}
);

export default Filters;
