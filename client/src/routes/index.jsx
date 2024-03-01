import UserRoot from "../UserRoot";
import Login from "../components/login";
import Register from "../components/register";
import AdminLoginForm from "../admin/components/login";
import Basket from "../pages/basket";
import Detail from "../pages/detail";
import FilterWine from "../pages/filterWine";
import Home from "../pages/home";
import PaymentForm from "../pages/payment";
import Wishlist from "../pages/wishList";
import AdminHome from "../admin/pages/home";
import AdminRoot from "../admin/AdminRoot";
import Analytics from "../admin/pages/analytics";
import Users from "../admin/pages/users";
import Wines from "../admin/pages/wines";
import AddProduct from "../admin/pages/addProduct";

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/filterWine",
        element: <FilterWine />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/payment",
        element: <PaymentForm/>,
      },
      {
        path: "/wishlist",
        element: <Wishlist/>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot/>,
    children: [
      {
        path: "/admin",
        element: <AdminLoginForm/>,
      },
      {
        path: "/admin/home",
        element: <AdminHome/>,
      },
      {
        path: "/admin/analytics",
        element: <Analytics/>,
      },
      {
        path: "/admin/users",
        element: <Users/>,
      },
      {
        path: "/admin/wines",
        element: <Wines/>,
      },
      {
        path: "/admin/addProduct",
        element: <AddProduct/>,
      },
    ]
  }
];
