import React, { memo, useEffect, useRef, useState } from "react";

import { useAppDispatch } from "@store/store";
import { setSortType } from "@store/filter/slice";

import { SortListItem } from "@store/pizzas/types";
import { IconCarriage } from "@ui/icons";

interface SortProps {
	sortList: SortListItem[];
	sortType: number;
	sortActive: string;
}
const Sort: React.FC<SortProps> = memo(({ sortList, sortActive, sortType }) => {
	const dispatch = useAppDispatch();
	const sortRef = useRef<HTMLDivElement>(null);
	const [openList, setOpenList] = useState<boolean>(false);

	const handlerClickFilter = (i: number) => {
		dispatch(setSortType(i));
		setOpenList(false);
	};
	const handelClickDocument = (e: MouseEvent) => {
		if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
			setOpenList(false);
		}
	};
	useEffect(() => {
		document.addEventListener("click", handelClickDocument);
		return () => document.removeEventListener("click", handelClickDocument);
	}, []);
	return (
		<div className="sort" ref={sortRef}>
			<div className="sort__label">
				<IconCarriage />
				<b>Сортировка по:</b>
				<span
					onClick={() => {
						setOpenList(!openList);
					}}
				>
					{sortActive}
				</span>
			</div>
			{openList && (
				<div className="sort__popup">
					<ul>
						{sortList.map((item: SortListItem, i: number) => (
							<li
								onClick={() => {
									handlerClickFilter(i);
								}}
								className={sortType === i ? "active" : ""}
								key={item.text}
							>
								{item.text}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
});
export default Sort;
