import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
