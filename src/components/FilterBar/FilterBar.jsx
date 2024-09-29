import { MdFilterList } from "react-icons/md";
import style from "./style.module.css";

export default function FilterBar() {
    return (
        <div className={style.filterContainer}>
            <span className={style.periodBar}>
                <button className={style.activeBtn}>Dia</button>
                <button>Semana</button>
                <button>Mês</button>
                <button>Ano</button>
                <button>Tudo</button>
            </span>
            <button className={style.intervalBtn}><MdFilterList size={23} />Filtrar período</button>
        </div>
    )
}