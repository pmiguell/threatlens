import style from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { PiChatCenteredDots } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { CiUser, CiLogout } from "react-icons/ci";
import Navigation from "../Navigation/Navigation";

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <h1 className={style.title}>
        Threat<span className={style.highlight}>Lens</span>
      </h1>

      <Navigation />
    </aside>
  );
}
