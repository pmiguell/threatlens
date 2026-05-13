import style from "./MyAlertsPopUp.module.css";
import { useState } from "react";
import AlertCard from "../AlertCard/AlertCard";
import CreateAlertPopUp from "../CreateAlertPopUp/CreateAlertPopUp.jsx";
import MyAlerts from "./MyAlerts.json";

export default function MyAlertPopUp({ isOpen, onClose }) {
    const [myAlerts, setMyAlerts] = useState(MyAlerts.Alerts);
    const [editingAlert, setEditingAlert] = useState(null);

    if (!isOpen) {
        return null;
    }

    function handleDeleteAlert(alertToRemove) {
        setMyAlerts(myAlerts.filter(alert => alert !== alertToRemove));
        // TODO: DELETE na API
    }

    function handleEditAlert(alertToEdit) {
        setEditingAlert(alertToEdit);
    }

    function handleCloseEditPopUp() {
        setEditingAlert(null);
    }

    return (
        <>
            <div className={style.alertPopUp}>
                <div className={style.closeIcon} onClick={onClose}>
                    ✖
                </div>

                <div className={style.alertContainer}>
                    <h1>Meus alertas</h1>

                    <div className={style.alertContent}>
                        {myAlerts
                            .sort((a, b) => b.active - a.active)
                            .map((alertObject, index) => (
                                <AlertCard
                                    key={index}
                                    alertInfo={alertObject}
                                    handleEditAlert={() => handleEditAlert(alertObject)}
                                    handleDeleteAlert={() => handleDeleteAlert(alertObject)}
                                />
                            ))}
                    </div>
                </div>
            </div>

            <CreateAlertPopUp
                isOpen={editingAlert !== null}
                onClose={handleCloseEditPopUp}
            />
        </>
    );
}
