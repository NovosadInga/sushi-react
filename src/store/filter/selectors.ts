import { RootState } from "@store/store";

export const selectFilters = (state: RootState) => state.filters;
export const selectFiltersCategoryId = (state: RootState) => state.filters.categoryId;
export const selectFiltersSearchValue = (state: RootState) => state.filters.searchValue;
export const selectFiltersSortType = (state: RootState) => state.filters.sortType;
export const selectFiltersCurrentPage = (state: RootState) => state.filters.currentPage;