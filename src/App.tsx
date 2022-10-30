import { Route, Routes } from "react-router-dom";
import "@scss/app.scss";
import routesConfig from "@routes/routesConfig";
import Layout from "@layouts/Layout";
import React from "react";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{routesConfig.map((route, index) => {
					return (
						<Route key={index} element={route.element} path={route.path} />
					);
				})}
			</Route>
		</Routes>
	);
};

export default App;
