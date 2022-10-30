import React, { memo } from "react";
import { Interface } from "readline";
interface DefaultBtnProps {
	text: string;
	type?: 'submit' | 'reset' | 'button';
	handlerClick?: (pr: boolean) => void;
	disabled?: boolean
}
const DefaultBtn: React.FC<DefaultBtnProps> = memo(({ text, handlerClick, type = 'button', ...props }) => {
	const onClickHandler = () => {
		if (handlerClick) handlerClick(true)
	}
	return (
		<button className="button pay-btn" onClick={onClickHandler} type={type && type} {...props}>
			<span>{text}</span>
		</button>
	);
});

export default DefaultBtn;
