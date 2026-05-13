import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Alerts from "./pages/Alerts/Alerts";
import Posts from "./pages/Posts/Posts";
import MyAccount from "./pages/MyAccount/MyAccount";
import VerifyCode from "./pages/VerifyCode/VerifyCode";
import Reports from "./pages/Reports/Reports";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "alerts", element: <Alerts /> },
          { path: "posts", element: <Posts /> },
          { path: "account", element: <MyAccount /> },
          { path: "reports", element: <Reports /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/verify", element: <VerifyCode /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
