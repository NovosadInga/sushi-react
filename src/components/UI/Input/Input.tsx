import { useForm, Controller } from 'react-hook-form';
import { EInput, IForm } from "@store/order/types";
import React from "react";

interface IInputProps {
	placeholder: string;
	type?: string;
	dataName: EInput;
	classes?: string;
	children?: JSX.Element;
	valid?: any;
	onBlur?: () => void;
	handlerChange: (val: string, name: EInput) => void;
}
const Input: React.FC<IInputProps> = ({
	placeholder,
	type = 'text',
	dataName,
	classes,
	children,
	onBlur,
	handlerChange
}) => {
	const { register } = useForm<IForm>()
	return <div className="input-block">

		<input
			className={`input ${classes ? classes : ""}`}
			type={type}
			placeholder={placeholder}
			{...register(EInput.NAME, {
				required: 'Поле не может быть пустым',
				onChange: (e) => { handlerChange(e.target.value, dataName) },
				onBlur: (e) => { },
			})}
		/>
		{/* <input
			id={dataName}
			className={`input ${classes ? classes : ""}`}
			// onChange={(e) => { onChange(e.target.value, dataName) }}
			onBlur={() => { }}
			type={type}
			placeholder={placeholder}
		// value={value}
		/> */}
		{children}
	</div>


}

export default Input;