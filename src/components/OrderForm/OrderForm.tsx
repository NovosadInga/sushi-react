import DefaultBtn from '@components/UI/buttons/DefaultBtn';
import { selectOrder } from '@store/order/selector';
import { sendDataUser, setInput } from '@store/order/slice';
import { useAppDispatch } from '@store/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { EInput, IForm } from "@store/order/types";
import { useForm } from 'react-hook-form';
import { selectCart } from '@store/cart/selectors';
import { Status } from '@store/pizzas/types';
import Message from '@components/UI/Message/Message';

export interface IOrderFormProps {
}
const message = {
	required: 'Поле не может быть пустым',
	minLength: 'Недостаточно символов'
}
const inputs = [
	{
		name: EInput.NAME,
		placeholder: "Ваше имя",
		minLength: 3,

	},
	{
		name: EInput.PHONE,
		placeholder: "Ваше телефон",
		minLength: 10,

	},
	{
		name: EInput.ADDRESS,
		placeholder: "Ваш адрес",
		minLength: 10,

	}
]
const OrderForm: React.FC = () => {
	const { form, status } = useSelector(selectOrder);
	const { totalPrice } = useSelector(selectCart);
	const dispatch = useAppDispatch();
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>()
	const handlerChangeInput = (val: string, name: EInput) => {
		let obj = { ...form }
		obj[name] = val
		dispatch(setInput(obj))
	}
	const onSubmit = handleSubmit((data) => {
		dispatch(sendDataUser({ ...form }));
		reset()

	})
	if (status === Status.LOADING) {
		return <Message text="...Загрузка" status={status} />
	}
	if (status === Status.SUCCESS) {
		return <Message text="Заказ принят" status={status} />
	}
	if (status === Status.ERROR) {
		return <Message text="Произошла ошибка, попробуйте еще раз" status={status} />
	}
	return (
		<div className='order-form'>
			<h2 className='order-form__title title'>Форма заказа</h2>
			<form className='form' onSubmit={onSubmit}>
				{inputs.map(input => (
					<div key={input.name} className="input-block">
						<input
							className={`input form__input}`}
							type="text"
							placeholder={input.placeholder}
							{...register(input.name, {
								required: message.required,
								minLength: {
									value: input.minLength,
									message: message.minLength
								},
								onChange: (e) => { handlerChangeInput(e.target.value, input.name) },
							})}
						/>
						{errors[input.name] && <div className='input-error'>{errors[input.name]?.message}</div>}
					</div>
				))}
				<div className="order-form__details">
					<span>Сумма заказа: <b>{totalPrice} ₴</b></span>
				</div>
				<DefaultBtn text='Заказать' type="submit" />
			</form>
		</div>
	);
}
export default OrderForm;
