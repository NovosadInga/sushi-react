import { Status } from './../pizzas/types';
export enum EInput {
	NAME = 'name',
	PHONE = 'phone',
	ADDRESS = 'address',
}
export interface IForm {
	name: string;
	phone: string;
	address: string;
}
export interface OrderSliceState {
	form: IForm;
	status: Status
}
export interface IFormResponse {
	status: number,
	statusText: string
}