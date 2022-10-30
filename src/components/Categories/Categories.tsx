import React, { memo, useCallback } from "react";

import { useAppDispatch } from "@store/store";
import { setCategoryId } from "@store/filter/slice";

export interface CategoriesProps {
	categoryId: number;
	categories: string[];
}
const Categories: React.FC<CategoriesProps> = memo(
	({ categoryId, categories }) => {
		const dispatch = useAppDispatch();
		const onChangaCategory = useCallback((id: number) => {
			dispatch(setCategoryId(id));
		}, []);

		return (
			<div className="categories">
				<ul>
					{categories.map((item, i) => {
						return (
							<li
								onClick={() => {
									onChangaCategory(i);
								}}
								key={item}
								className={categoryId === i ? "active" : ""}
							>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
);
export default Categories;
