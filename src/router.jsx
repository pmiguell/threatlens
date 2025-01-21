import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Alerts from "./pages/Alerts/Alerts";
import Posts from "./pages/Posts/Posts";
import MyAccount from "./pages/MyAccount/MyAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "alerts",
        element: <Alerts />
      },
      {
        path: "posts",
        element: <Posts />
      },
      {
        path: "account",
        element: <MyAccount />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register", 
    element: <Register />,
  },
]);

export default router;
