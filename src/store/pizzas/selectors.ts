import { RootState } from "@store/store";
export const selectPizzas = (state: RootState) => state.pizzas;
export const selectActivePizza = (state: RootState) => state.pizzas.active;