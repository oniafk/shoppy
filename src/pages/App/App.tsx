import { useRoutes, BrowserRouter } from "react-router-dom";

import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { NavBar } from "../../components/Navbar";
import { CheckOutSideMenu } from "../../components/CheckOutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/404", element: <NotFound /> },
    { path: "/men", element: <Home /> },
    { path: "/women", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    { path: "/electronics", element: <Home /> },
  ]);

  return routes;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </div>
  );
}

export { App };
