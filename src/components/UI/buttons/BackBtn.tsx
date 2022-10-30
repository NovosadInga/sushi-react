import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const BackBtn: React.FC = memo(() => {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate('/')}
			className="button button--outline go-back-btn"
		>
			<svg x="0px" y="0px" viewBox="0 0 177.7 335.6" >
				<path d="M23.8,167.8L174.8,16.9c3.9-3.9,3.9-10.1,0-14c-3.9-3.9-10.1-3.9-14,0L2.9,160.8c-1.9,1.9-2.9,4.4-2.9,7
	c0,2.6,1.1,5.2,2.9,7l157.9,157.9c1.9,1.9,4.4,2.9,7,2.9c2.6,0,5.2-1.1,7-2.9c1.9-1.9,2.9-4.4,2.9-7c0-2.6-1.1-5.2-2.9-7L23.8,167.8
	z"/>
			</svg>

			<span>Вернуться назад</span>
		</button>
	);
});

export default BackBtn;
