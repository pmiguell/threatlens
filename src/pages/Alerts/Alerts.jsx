import style from "./style.module.css";
import { GoAlert } from "react-icons/go";
import { IoIosAddCircleOutline } from "react-icons/io";
import CreateAlertPopUp from "../../components/CreateAlertPopUp/CreateAlertPopUp";
import MyAlertsPopUp from "../../components/MyAlertsPopUp/MyAlertsPopUp.jsx"
import { useState } from "react";
import Header from "../../components/Header/Header";
import {alertsRecordList} from "./AlertsList.jsx"
import AlertRecords from "../../components/AlertRecords/AlertRecords.jsx";

export default function Alerts() {

  const[myAlertsIsOpen, setMyAlertsIsOpen] = useState(false);
  const[createAlertIsOpen, setCreateAlertIsOpen] = useState(false);
  
  const[alertsRecord, setAlertsRecord] = useState(alertsRecordList);

  const handleMyAlertsPopUp = () => {
    setMyAlertsIsOpen(!myAlertsIsOpen);
  }
  const handleCreateAlertsPopUp = () => {
    setCreateAlertIsOpen(!createAlertIsOpen);
  }
  const handleAlertRecordDelete = (recordToRemove) => {
    setAlertsRecord(alertsRecord.filter(record => record !== recordToRemove));
    //
  }


  return (
    <div className={style.alerts}>
      <Header pageName="Alertas" pageDescription="Crie alertas personalizados."/>
      <div className={style.alertsButtons}>
        <button onClick={handleMyAlertsPopUp}>
          <GoAlert className={style.btnIcon} /> Meus alertas
        </button>
        <button onClick={handleCreateAlertsPopUp}>
          <IoIosAddCircleOutline className={style.btnIcon} /> Criar novo alerta
        </button>
      </div>
      <div className={style.alertsContainer}>
        {alertsRecord.map((alertRecord, index) => (
          <AlertRecords
          id={index} 
          alertRecord={alertRecord}
          onDelete={() => handleAlertRecordDelete(alertRecord)}/>
        ))}
        
     
      </div>
      <CreateAlertPopUp 
        isOpen={createAlertIsOpen}
        onClose = {handleCreateAlertsPopUp}
      />

      <MyAlertsPopUp 
        isOpen = {myAlertsIsOpen}
        onClose = {handleMyAlertsPopUp}
      />

    </div>
  );
}
