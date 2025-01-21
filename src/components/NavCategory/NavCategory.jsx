import { NavLink } from "react-router-dom";
import style from "./NavCategory.module.css";

export default function NavCategory({ title, children }) {
  return (
    <div className={style.categoryContainer}>
      <h2 className={style.navCategory}>{title}</h2>
      <ul>{children}</ul>
    </div>
  );
}