import style from "./MyAlertsPopUp.module.css";
import React, { useState } from "react";
import AlertCard from "../AlertCard/AlertCard";
import MyAlerts from "./MyAlerts.json"
import CreateAlertPopUp from "../CreateAlertPopUp/CreateAlertPopUp.jsx"

export default function MyAlertPopUp({ isOpen, onClose}) {
    const [myAlerts, setMyAlerts] = useState(MyAlerts.Alerts);


    if (!isOpen) {
        return null;
    }

    function handleDeleteAlert(alertToRemove){
        setMyAlerts(myAlerts.filter(alertInfo => alertInfo !== alertToRemove));
        // delete na API
    }

    function handleEditAlert(alertToEdit){
        <CreateAlertPopUp />
    }


    return (
        <div className={style.alertPopUp}>
            <div className={style.closeIcon} onClick={onClose}>
                ✖
            </div>

            <div className={style.alertContainer}>
                <h1>Meus alertas</h1>

                <div className={style.alertContent}>
                    {myAlerts.sort((a,b) => b.active - a.active)
                        .map((alertObject, index) => (
                            <AlertCard 
                            key={index} 
                            alertInfo={alertObject} 
                            active={alertObject.active} 
                            handleEditAlert={() => handleEditAlert(alertObject)}
                            handleDeleteAlert={() => handleDeleteAlert(alertObject)}/>
                    ))} 
                    
                </div>
            </div>
        </div>
    );
}