import style from "./Alerts.module.css";
import { GoAlert } from "react-icons/go";
import { IoIosAddCircleOutline } from "react-icons/io";
import CreateAlertPopUp from "../../components/CreateAlertPopUp/CreateAlertPopUp";
import MyAlertsPopUp from "../../components/MyAlertsPopUp/MyAlertsPopUp.jsx";
import { useState } from "react";
import Header from "../../components/Header/Header";
import AlertRecords from "../../components/AlertRecords/AlertRecords.jsx";
import { useAlerts } from "../../hooks";

export default function Alerts() {
  const [myAlertsIsOpen, setMyAlertsIsOpen] = useState(false);
  const [createAlertIsOpen, setCreateAlertIsOpen] = useState(false);
  const { alerts, deleteAlert } = useAlerts();

  return (
    <div className={style.alerts}>
      <Header pageName="Alertas" pageDescription="Crie alertas personalizados."/>
      <div className={style.alertsButtons}>
        <button onClick={() => setMyAlertsIsOpen(!myAlertsIsOpen)}>
          <GoAlert className={style.btnIcon} /> Meus alertas
        </button>
        <button onClick={() => setCreateAlertIsOpen(!createAlertIsOpen)}>
          <IoIosAddCircleOutline className={style.btnIcon} /> Criar novo alerta
        </button>
      </div>
      <div className={style.alertsContainer}>
        {alerts.map((alertRecord) => (
          <AlertRecords
            key={alertRecord.id}
            alertRecord={alertRecord}
            onDelete={() => deleteAlert(alertRecord.id)}
          />
        ))}
        
     
      </div>
      <CreateAlertPopUp
        isOpen={createAlertIsOpen}
        onClose={() => setCreateAlertIsOpen(false)}
      />

      <MyAlertsPopUp
        isOpen={myAlertsIsOpen}
        onClose={() => setMyAlertsIsOpen(false)}
      />

    </div>
  );
}
