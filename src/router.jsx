import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  }
]);

export default router;
