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
              <a href="#" className={style.activeLink}><AiOutlineHome size={20} color="#EEE" />Overview</a>
            </li>
          </ul>
        </div>

        <div className={style.categoryContainer}>
          <h2 className={style.navCategory}>Serviços</h2>
          <ul>
            <li>

              <a href="#"><GoAlert size={20} color="#EEE" />Alertas</a>
            </li>
            <li>
              <a href="#"><PiChatCenteredDots size={20} color="#EEE" />Posts</a>
            </li>
            <li>
              <a href="#"><TbReportAnalytics size={20} color="#EEE" />Relatórios</a>
            </li>
          </ul>
        </div>

        <div className={style.categoryContainer}>
          <h2 className={style.navCategory}>Conta</h2>
          <ul>
            <li>
              <a href="#"><CiUser size={20} color="#EEE" />Minha conta</a>
            </li>
            <li>
              <a href="#"><CiLogout size={20} color="#EEE" />Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
