import style from "./style.module.css";
import { GoAlert } from "react-icons/go";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import AlertPopUp from "../../components/AlertPopUp/AlertPopUp";
import { useState } from "react";
import Header from "../../components/Header/Header";


export default function Alerts() {
  const[isOpen, setIsOpen] = useState(false);
  
  const handleOpenPopup = ()=> {
    setIsOpen(true);
  };
  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.alerts}>
      <Header pageName="Alertas" pageDescription="Crie alertas personalizados."/>
      <div className={style.alertsButtons}>
        <button>
          <GoAlert className={style.btnIcon} /> Meus alertas
        </button>
        <button onClick={handleOpenPopup}>
<<<<<<< HEAD
          <IoIosAddCircleOutline className={style.btnIcon} /> Criar novo alerta
=======
          <IoIosAddCircleOutline className={style.btnIcon}/> Criar novo alerta
>>>>>>> 368cc0dee6e7fbeacad9bb8f5b86729a44a5767e
        </button>
      </div>
      <div className={style.alertsContainer}>
        <div className={style.alert}>
          <div className={style.alertHeader}>
            <div className={style.alertHeaderInfo}>
              <h3>Alerta Keyword "IP"</h3>
              <p>25/08/2024 - 11:31</p>
            </div>
            <div className={style.trashIconContainer}>
              <FaRegTrashAlt className={style.trashIcon}/>
            </div>
          </div>
          <div className={style.alertDescription}>
            <p>Post com keyword “IP” adicionado no banco de dados.</p>
            <a>
              <FaExternalLinkAlt /> 10003 - "Como obter o endereço IP de um..."
            </a>
          </div>
        </div>
        <div className={style.alert}>
          <div className={style.alertHeader}>
            <div className={style.alertHeaderInfo}>
              <h3>Alerta Keyword "IP"</h3>
              <p>25/08/2024 - 11:31</p>
            </div>
            <div className={style.trashIconContainer}>
              <FaRegTrashAlt className={style.trashIcon}/>
            </div>
          </div>
          <div className={style.alertDescription}>
            <p>Post com keyword “IP” adicionado no banco de dados.</p>
            <a>
              <FaExternalLinkAlt /> 10003 - "Como obter o endereço IP de um..."
            </a>
          </div>
        </div>
        <div className={style.alert}>
          <div className={style.alertHeader}>
            <div className={style.alertHeaderInfo}>
              <h3>Alerta Keyword "IP"</h3>
              <p>25/08/2024 - 11:31</p>
            </div>
            <div className={style.trashIconContainer}>
              <FaRegTrashAlt className={style.trashIcon}/>
            </div>
          </div>
          <div className={style.alertDescription}>
            <p>Post com keyword “IP” adicionado no banco de dados.</p>
            <a>
              <FaExternalLinkAlt/> 10003 - "Como obter o endereço IP de um..."
            </a>
          </div>
        </div>
      </div>
      <AlertPopUp 
        isOpen={isOpen}
        onClose = {handleClosePopup}
      />
    </div>
  );
}
