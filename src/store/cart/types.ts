export interface CartItem {
	id: string;
	name: string;
	imageUrl: string;
	size: number;
	price: number;
    weight: number;
};
export interface CartItemSlice extends CartItem {
	count: number;
};
export interface RemoveItem {
    id: string;
    count: number;
    price: number;
}
export interface CartSliceState {
    totalPrice: number;
    count: number;
    items: CartItemSlice[]
}