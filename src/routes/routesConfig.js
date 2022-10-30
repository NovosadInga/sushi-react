import HomePage from "@pages/HomePage";
import Cart from "@pages/Cart";
import NotFound from "@pages/NotFound";
import FullPizza from "@pages/FullPizza";

const routesConfig = [
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/cart",
		element: <Cart />
	},
	{
		path: "/pizza",
		element: <FullPizza />
	},
	{
		path: "/not-found",
		element: <NotFound />
	},
	{
		path: "*",
		element: <NotFound />
	}
];
export default routesConfig;
