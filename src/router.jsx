import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminRoute from "./components/ProtectedRoute/AdminRoute";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Posts from "./pages/Posts/Posts";
import MyAccount from "./pages/MyAccount/MyAccount";
import VerifyCode from "./pages/VerifyCode/VerifyCode";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import NotFound from "./pages/NotFound/NotFound";
import Admin from "./pages/Admin/Admin";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "posts", element: <Posts /> },
          { path: "account", element: <MyAccount /> },
          {
            element: <AdminRoute />,
            children: [
              { path: "admin", element: <Admin /> },
            ],
          },
        ],
      },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/verify", element: <VerifyCode /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
