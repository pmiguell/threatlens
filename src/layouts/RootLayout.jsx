import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { SidebarProvider, useSidebar } from "../contexts/SidebarContext.jsx";
import styles from "./RootLayout.module.css";

function LayoutShell() {
  const { isOpen, close } = useSidebar();

  return (
    <div className={styles.shell}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      {isOpen && <div className={styles.backdrop} onClick={close} />}
    </div>
  );
}

export default function RootLayout() {
  return (
    <SidebarProvider>
      <LayoutShell />
    </SidebarProvider>
  );
}
