import { BASE_URL } from "@constants/index";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzasSliceState, Status, PizzasItem } from "./types"
export const fetchPizzas = createAsyncThunk(
	"pizzas/fetchPizzasItems",
	async (srt: string) => {
		const res = await axios.get<PizzasItem[]>(BASE_URL + srt);
		return res.data as PizzasItem[];
	}
);
const initialState: PizzasSliceState = {
	items: [],
	active: 0,
	status: Status.LOADING // loading | success | error
};
export const pizzasSlice = createSlice({
	name: "pizzas",
	initialState,
	reducers: {
		setPizzasItems(state, action: PayloadAction<PizzasItem[]>) {
			state.items = action.payload;
		},
		setActivePizza(state, action: PayloadAction<number>) {
			state.active = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.pending, (state) => {
			state.status = Status.LOADING;
			state.items = [];
		})
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.items = action.payload;
		})
		builder.addCase(fetchPizzas.rejected, (state, action) => {
			state.status = Status.ERROR;
			state.items = [];
		})
	}

});
export const { setPizzasItems, setActivePizza } = pizzasSlice.actions;

export default pizzasSlice.reducer;