import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState, RemoveItem } from "./types";

const initialState: CartSliceState = {
	totalPrice: 0,
	count: 0,
	items: []
};
export const cartSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setCartItems(state, action: PayloadAction<CartSliceState>) {
			return action.payload
		},
		addItem(state, action: PayloadAction<CartItem>) {
			const item = action.payload;
			const findItem = state.items.find((obj) => obj.id === item.id);
			findItem ? findItem.count++ : state.items.push({ ...item, count: 1 });
			state.count++;
			state.totalPrice += item.price;
		},
		addOneItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find((obj) => obj.id === action.payload);
			if (!findItem) return
			findItem.count++
			state.count++;
			state.totalPrice += findItem.price;
		},
		removeItems(state, action: PayloadAction<RemoveItem>) {
			const item = action.payload;
			state.totalPrice = state.totalPrice - item.count * item.price;
			state.count = state.count - item.count;
			state.items = state.items.filter((obj) => obj.id !== item.id);
		},
		removeOneItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find((obj) => obj.id === action.payload);
			if (!findItem) return
			if (findItem.count > 1) {
				findItem.count -= 1;
			} else {
				state.items = state.items.filter((obj) => obj.id !== findItem.id);
			}
			state.count -= 1;
			state.totalPrice -= findItem.price;
		},
		clearItems(state) {
			return initialState
		}
	}
});
export const { addOneItem, addItem, removeItems, clearItems, removeOneItem, setCartItems } =
	cartSlice.actions;

export default cartSlice.reducer;