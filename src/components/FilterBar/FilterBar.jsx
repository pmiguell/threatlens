import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import style from "./style.module.css";

export default function FilterBar({ setFilter }) {
  const [activeFilter, setActiveFilter] = useState("Tudo");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <div className={style.filterContainer}>
      <span className={style.periodBar}>
        <button
          onClick={() => handleFilterClick("Dia")}
          className={activeFilter === "Dia" ? style.activeBtn : ""}
        >
          Dia
        </button>
        <button
          onClick={() => handleFilterClick("Semana")}
          className={activeFilter === "Semana" ? style.activeBtn : ""}
        >
          Semana
        </button>
        <button
          onClick={() => handleFilterClick("Mês")}
          className={activeFilter === "Mês" ? style.activeBtn : ""}
        >
          Mês
        </button>
        <button
          onClick={() => handleFilterClick("Ano")}
          className={activeFilter === "Ano" ? style.activeBtn : ""}
        >
          Ano
        </button>
        <button
          onClick={() => handleFilterClick("Tudo")}
          className={activeFilter === "Tudo" ? style.activeBtn : ""}
        >
          Tudo
        </button>
      </span>
      <button className={style.intervalBtn}>
        <MdFilterList size={23} />
        Filtrar período
      </button>
    </div>
  );
}
