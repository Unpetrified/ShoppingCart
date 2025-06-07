import App from "./App";
import Shop from "./components/shop";
import Cart from "./components/cart";
import ErrorPage from "./components/errorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
