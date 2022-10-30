import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
	categoryId: 0,
	searchValue: "",
	currentPage: 1,
	sortType: 0
};

export const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload;
			state.currentPage = 1;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
			state.categoryId = 0;
			state.currentPage = 1;
		},
		setSortType(state, action: PayloadAction<number>) {
			state.sortType = action.payload;
			state.currentPage = 1;
		},
		setFilters(state, action: PayloadAction<FilterSliceState>) {
			state.currentPage = Number(action.payload.currentPage);
			state.categoryId = Number(action.payload.categoryId);
			state.sortType = Number(action.payload.sortType);
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = Number(action.payload);
		}
	}
});
export const {
	setCategoryId,
	setSearchValue,
	setSortType,
	setFilters,
	setCurrentPage
} = filterSlice.actions;

export default filterSlice.reducer;