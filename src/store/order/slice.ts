import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Status } from './../pizzas/types';
import { OrderSliceState, IForm, IFormResponse } from './types';

export const sendDataUser = createAsyncThunk(
	"order/sendDataUser",
	async (form: IForm) => {
		const res: IFormResponse = await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ status: 200, statusText: "OK" });
			}, 1000);

		});
		return res.status
	}
);
const initialState: OrderSliceState = {
	form: {
		name: "",
		phone: "",
		address: ""
	},
	status: Status.NONE
};
export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setInput(state, action: PayloadAction<IForm>) {
			state.form = action.payload
		},
		claerStatus(state) {
			state.status = Status.NONE
		}
	},
	extraReducers: (builder) => {
		builder.addCase(sendDataUser.pending, (state) => {
			state.status = Status.LOADING;

		})
		builder.addCase(sendDataUser.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;

		})
		builder.addCase(sendDataUser.rejected, (state, action) => {
			state.status = Status.ERROR;
		})
	}
});
export const { setInput, claerStatus } =
	orderSlice.actions;

export default orderSlice.reducer;