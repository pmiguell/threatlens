import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { PiChatCenteredDots } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { CiUser, CiLogout } from "react-icons/ci";
import style from "./style.module.css";

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <header>
        <h1 className={style.title}>
          Threat<span className={style.highlight}>Lens</span>
        </h1>
      </header>

      <nav className={style.navigation}>
        <div className={style.categoryContainer}>
          <h2 className={style.navCategory}>Geral</h2>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${style.activeLink}` : ""
                }
              >
                <AiOutlineHome size={20} color="#EEE" />
                Overview
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={style.categoryContainer}>
          <h2 className={style.navCategory}>Serviços</h2>
          <ul>
            <li>
              <NavLink
                to="/alerts"
                className={({ isActive }) =>
                  isActive ? `${style.activeLink}` : ""
                }
              >
                <GoAlert size={20} color="#EEE" />
                Alertas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive ? `${style.activeLink}` : ""
                }
              >
                <PiChatCenteredDots size={20} color="#EEE" />
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  isActive ? `${style.activeLink}` : ""
                }
              >
                <TbReportAnalytics size={20} color="#EEE" />
                Relatórios
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={style.categoryContainer}>
          <h2 className={style.navCategory}>Conta</h2>
          <ul>
            <li>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  isActive ? `${style.activeLink}` : ""
                }
              >
                <CiUser size={20} color="#EEE" />
                Minha conta
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? `${style.activeLink}` : ""
                }
              >
                <CiLogout size={20} color="#EEE" />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
