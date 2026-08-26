import style from "./Navigation.module.css";
import NavCategory from "../NavCategory/NavCategory";
import NavItem from "../NavItem/NavItem";
import { AiOutlineHome } from "react-icons/ai";
import { PiChatCenteredDots } from "react-icons/pi";
import { CiUser, CiLogout } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navigation() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className={style.navigation}>
      <NavCategory title="Geral">
        <NavItem to="/" icon={<AiOutlineHome size={20} className={style.navIcon} />} label="Overview" />
      </NavCategory>

      <NavCategory title="Serviços">
        <NavItem to="/posts" icon={<PiChatCenteredDots size={20} className={style.navIcon} />} label="Posts" />
      </NavCategory>

      <NavCategory title="Conta">
        <NavItem to="/account" icon={<CiUser size={20} className={style.navIcon} />} label="Minha conta" />
        {user?.role === "ADMIN" && (
          <NavItem
            to="/admin"
            icon={<MdAdminPanelSettings size={20} className={style.navIcon} />}
            label="Administração"
          />
        )}
        <li>
          <button className={style.logoutBtn} onClick={handleLogout}>
            <CiLogout size={20} className={style.navIcon} />
            Logout
          </button>
        </li>
      </NavCategory>
    </nav>
  );
}
