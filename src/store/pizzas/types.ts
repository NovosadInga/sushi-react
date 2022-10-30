export enum EType {
	RATING = "rating",
	PRICE = "price",
	NAME = "name"
}
export enum EOrder {
	DESK = "desc",
	ASK = "asc"
}
export enum Status {
	NONE = "none",
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error"
}
export type TPizzaType = EType.RATING | EType.PRICE | EType.NAME;
export type TPizzaOrder = EOrder.DESK | EOrder.ASK;
export interface PizzasItem {
	id: string;
	name: string;
	price: number;
	weight: number;
	size: number;
	category: number;
	imageUrl: string;
	rating: number;
	description: string;
}
export interface PizzasParams {
	currentPage: number;
	category: string;
	search: string;
	sortType: TPizzaType;
	orderSort: TPizzaOrder;
}

export interface PizzasSliceState {
	items: PizzasItem[];
	active: number;
	status: Status
}
export interface SortListItem {
	text: string;
	type: TPizzaType;
	order: TPizzaOrder;
}

