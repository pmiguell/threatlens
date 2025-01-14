import React from "react";
import style from "./style.module.css";

export default function AlertSelectedTags({ name, onClose }) {
    return (
        <div className={style.tag}>
            <p>{name}</p>
            <div className={style.closeIcon} onClick={onClose}>
                ✖
            </div>
        </div>
    );
}