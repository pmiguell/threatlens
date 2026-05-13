import style from "./Reports.module.css";
import Header from "../../components/Header/Header";

export default function Reports() {
  return (
    <div className={style.reports}>
      <Header
        pageName="Relatórios"
        pageDescription="Visualize e exporte relatórios de inteligência."
      />
      <div className={style.placeholder}>
        <p>Em breve.</p>
      </div>
    </div>
  );
}
