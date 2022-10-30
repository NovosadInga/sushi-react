import { RootState } from "@store/store";
export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: number | string) => (state: RootState) =>
	state.cart.items.find((el) => el.id === id);