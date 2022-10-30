import React, { memo } from "react";
import { IconPlus } from "@ui/icons";
interface AddBtnProps {
	count: number;
	handlerClick: () => void;
}
const AddBtn: React.FC<AddBtnProps> = memo(({ count, handlerClick }) => {
	return (
		<button
			className="button button--outline button--add"
			onClick={handlerClick}
		>
			<IconPlus />
			<span>Добавить</span>
			<i>{count}</i>
		</button>
	);
});

export default AddBtn;
