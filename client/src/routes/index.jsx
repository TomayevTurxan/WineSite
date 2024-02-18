import UserRoot from "../UserRoot";
import Login from "../components/login";
import Register from "../components/register";
import Detail from "../pages/detail";
import FilterWine from "../pages/filterWine";
import Home from "../pages/home";
export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/filterWine",
        element: <FilterWine />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
];
