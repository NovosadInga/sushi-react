import React, { memo } from "react";
interface CircleBtnProps {
	classes?: string;
	handlerClick: () => void;
	icon: React.ReactNode;
}
const CircleBtn: React.FC<CircleBtnProps> = memo(
	({ classes, handlerClick, icon }) => {
		let btn_class: string = `button button--circle ${classes}`;
		return (
			<button
				onClick={() => {
					handlerClick();
				}}
				className={btn_class}
			>
				{icon}
			</button>
		);
	}
);

export default CircleBtn;
