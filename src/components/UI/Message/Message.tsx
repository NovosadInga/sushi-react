import { Status } from "@store/pizzas/types";
import React, { memo } from "react";
import loading from "@img/loading.svg";
import success from "@img/success.svg";
import error from "@img/error.svg";
interface MessageProps {
	text: string;
	status: Status
}
const Message = memo(({ text, status }: MessageProps) => {
	return (
		<div className={`message message_${status}`}>
			<img className='message__icon'
				alt={status}
				src={
					status === Status.LOADING && loading ||
					status === Status.ERROR && error ||
					status === Status.SUCCESS && success
				}
			/>
			<div className="message__text">
				{text}
			</div>
		</div>
	);
});

export default Message;
