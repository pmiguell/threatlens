import React, { useState } from "react";
import AlertSelectedTags from "../AlertSelectedTags/AlertSelectedTags"
import style from "./style.module.css"
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";



export default function AlertCard({ key, alertInfo, handleEditAlert, handleDeleteAlert }) {
    const [isActive, setIsActive] = useState(alertInfo.active);


    return (
        <div className={`${style.alertCard} ${isActive ? style.active : style.inactive}`}>
            <div className={style.alertContent}>

                <div className={style.options}>
                    <FaRegEdit className={style.optionIcon} onClick={handleEditAlert}/>
                    <IoTrashOutline className={style.optionIcon} onClick={handleDeleteAlert}  />
                </div>

                <div className={style.alertInfo}>
                    <div className={style.nameContainer}>
                        <div className={`${style.activitySign} ${isActive ? style.activeSign : style.inactiveSign}`}></div>
                        <h2>{alertInfo.name}</h2>
                    </div>
                    <div className={style.alertInfoDetails}>Criado em {alertInfo.creationDate }</div>
                    { alertInfo.expirationDate !== "" && 
                        <div className={style.alertInfoDetails}>Data limite: {alertInfo.expirationDate }</div>
                    }
                </div>

                <div className={style.keywordsContainer}>
                    <h3>Keywords cadastradas</h3>
                    <div className={style.keywords}>
                        {alertInfo.keywords.map((element, index) => (
                            <AlertSelectedTags key={index} name={element} editing={false} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}