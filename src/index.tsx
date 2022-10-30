import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	);
}
