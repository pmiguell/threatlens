import style from "./Sidebar.module.css";
import { MdClose } from "react-icons/md";
import Navigation from "../Navigation/Navigation";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`${style.sidebar} ${isOpen ? style.open : ""}`}>
      <button className={style.closeBtn} onClick={onClose} aria-label="Fechar menu">
        <MdClose />
      </button>
      <h1 className={style.title}>
        Threat<span className={style.highlight}>Lens</span>
      </h1>
      <Navigation />
    </aside>
  );
}
