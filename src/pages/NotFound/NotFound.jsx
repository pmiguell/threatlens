import { Link } from "react-router-dom";
import style from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={style.container}>
      <h1 className={style.code}>404</h1>
      <p className={style.message}>Página não encontrada.</p>
      <Link to="/" className={style.link}>Voltar ao Dashboard</Link>
    </div>
  );
}
