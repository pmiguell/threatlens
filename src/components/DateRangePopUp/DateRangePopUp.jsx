import { useState } from "react";
import style from "./DateRangePopUp.module.css";

export default function DateRangePopUp({ isOpen, onClose, onApply, onClear, initialFrom = "", initialTo = "" }) {
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleApply = () => {
    if (!from && !to) {
      setError("Informe ao menos uma data.");
      return;
    }
    if (from && to && from > to) {
      setError("A data inicial não pode ser depois da data final.");
      return;
    }
    setError("");
    onApply({ from, to });
  };

  const handleClear = () => {
    setFrom("");
    setTo("");
    setError("");
    onClear();
  };

  return (
    <>
      <div className={style.overlay} onClick={onClose} />
      <div className={style.popup} role="dialog" aria-modal="true">
        <h3 className={style.title}>Filtrar período</h3>
        <div className={style.field}>
          <label htmlFor="date-from">De</label>
          <input
            id="date-from"
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="date-to">Até</label>
          <input
            id="date-to"
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        {error && <p className={style.error}>{error}</p>}
        <div className={style.actions}>
          <button className={style.clearBtn} onClick={handleClear}>
            Limpar
          </button>
          <button className={style.applyBtn} onClick={handleApply}>
            Aplicar
          </button>
        </div>
      </div>
    </>
  );
}
