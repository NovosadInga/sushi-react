
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterSlice from "./filter/slice";
import cartSlice from "./cart/slice"
import pizzasSlice from "./pizzas/slice";
import orderSlice from './order/slice';
import { useDispatch } from "react-redux";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
	filters: filterSlice,
	cart: cartSlice,
	pizzas: pizzasSlice,
	order: orderSlice
})


const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),

});
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()