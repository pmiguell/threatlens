import { Outlet } from "react-router-dom";

// TODO: reativar quando o backend estiver disponível
// import { Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  // const token = localStorage.getItem("jwtToken");
  // if (!token) return <Navigate to="/login" replace />;

  return <Outlet />;
}
