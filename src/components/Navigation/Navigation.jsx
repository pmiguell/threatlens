import style from "./Navigation.module.css";
import NavCategory from "../NavCategory/NavCategory";
import NavItem from "../NavItem/NavItem";
import { AiOutlineHome } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { PiChatCenteredDots } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { CiUser, CiLogout } from "react-icons/ci";

export default function Navigation() {
  return (
    <nav className={style.navigation}>
      <NavCategory title="Geral">
        <NavItem to="/" icon={<AiOutlineHome size={20} color="#EEE" />} label="Overview" />
      </NavCategory>

      <NavCategory title="Serviços">
        <NavItem to="/alerts" icon={<GoAlert size={20} color="#EEE" />} label="Alertas" />
        <NavItem to="/posts" icon={<PiChatCenteredDots size={20} color="#EEE" />} label="Posts" />
        <NavItem to="/reports" icon={<TbReportAnalytics size={20} color="#EEE" />} label="Relatórios" />
      </NavCategory>

      <NavCategory title="Conta">
        <NavItem to="/account" icon={<CiUser size={20} color="#EEE" />} label="Minha conta" />
        <NavItem to="/logout" icon={<CiLogout size={20} color="#EEE" />} label="Logout" />
      </NavCategory>
    </nav>
  );
}