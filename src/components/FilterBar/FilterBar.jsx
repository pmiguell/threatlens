import style from "./FilterBar.module.css";
import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import DateRangePopUp from "../DateRangePopUp/DateRangePopUp";

export default function FilterBar({ activeFilter, setFilter, dateRange, onRangeApply, onRangeClear }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const hasCustomRange = Boolean(dateRange?.from || dateRange?.to);

  const handleApply = (range) => {
    onRangeApply(range);
    setIsPopupOpen(false);
  };

  const handleClear = () => {
    onRangeClear();
    setIsPopupOpen(false);
  };

  return (
    <div className={style.filterContainer}>
      <span className={style.periodBar}>
        <button
          onClick={() => setFilter("Dia")}
          className={!hasCustomRange && activeFilter === "Dia" ? style.activeBtn : ""}
        >
          Dia
        </button>
        <button
          onClick={() => setFilter("Semana")}
          className={!hasCustomRange && activeFilter === "Semana" ? style.activeBtn : ""}
        >
          Semana
        </button>
        <button
          onClick={() => setFilter("Mês")}
          className={!hasCustomRange && activeFilter === "Mês" ? style.activeBtn : ""}
        >
          Mês
        </button>
        <button
          onClick={() => setFilter("Ano")}
          className={!hasCustomRange && activeFilter === "Ano" ? style.activeBtn : ""}
        >
          Ano
        </button>
        <button
          onClick={() => setFilter("Tudo")}
          className={!hasCustomRange && activeFilter === "Tudo" ? style.activeBtn : ""}
        >
          Tudo
        </button>
      </span>
      <button
        className={hasCustomRange ? style.intervalBtnActive : style.intervalBtn}
        onClick={() => setIsPopupOpen(true)}
      >
        <MdFilterList size={23} />
        Filtrar período
      </button>

      <DateRangePopUp
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onApply={handleApply}
        onClear={handleClear}
        initialFrom={dateRange?.from ?? ""}
        initialTo={dateRange?.to ?? ""}
      />
    </div>
  );
}
