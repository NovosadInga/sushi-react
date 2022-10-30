import React, { memo, useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";

import { useAppDispatch } from "@store/store";
import { setSearchValue } from "@store/filter/slice";
import { selectFiltersSearchValue } from "@store/filter/selectors";

import icon from "@img/search-ico.svg";

const Search: React.FC = memo(() => {
	const dispatch = useAppDispatch();
	const inputEl = useRef<HTMLInputElement>(null);
	const searchValue = useSelector(selectFiltersSearchValue);
	const [valueInput, setValueInput] = useState<string>("");

	const clearInput = () => {
		setValueInput("");
		dispatch(setSearchValue(""));
		inputEl.current?.focus();
	};
	const updateSearchValue = useCallback(
		debounce((val: string) => {
			dispatch(setSearchValue(val));
		}, 300),
		[]
	);
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValueInput(e.target.value);
		updateSearchValue(e.target.value);
	};
	return (
		<div className="search">
			<img className="search__icon" src={icon} alt="search" />
			<input
				onChange={(e) => {
					onChangeInput(e);
				}}
				className="search__input input"
				type="text"
				placeholder="Search"
				value={valueInput}
				ref={inputEl}
			/>
			{searchValue && (
				<button onClick={clearInput} className="search__btn"></button>
			)}
		</div>
	);
});

export default Search;
