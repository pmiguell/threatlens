import style from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { PiChatCenteredDots } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { CiUser, CiLogout } from "react-icons/ci";
import Navigation from "../Navigation/Navigation";
import { useSidebar } from "../../contexts/SidebarContext.jsx";

export default function Sidebar() {
  const { isOpen } = useSidebar();
  return (
    <aside className={style.sidebar} data-open={isOpen ? "true" : "false"}>
      <h1 className={style.title}>
        Threat<span className={style.highlight}>Lens</span>
      </h1>

      <Navigation />
    </aside>
  );
}
