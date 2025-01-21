import { NavLink } from "react-router-dom";
import style from "./NavItem.module.css";

export default function NavItem({ to, icon, label }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? `${style.activeLink}` : "")}
      >
        {icon}
        {label}
      </NavLink>
    </li>
  );
}