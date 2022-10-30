import React from "react";
import { Link } from "react-router-dom";
const NotFound: React.FC = () => {
	return (

		<div className="container--cart">
			<div className="error-bl">
				<h2>
					Ошибка 404 <span>😕</span>
				</h2>
				<p>
					Такой страницы не существует.
					<br />
					Вы можете сообщить об ошибке или заказать пиццу на нашей главной
					странице.
				</p>
				<Link to="/" className="button button--black">
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div>

	);
};

export default NotFound;
