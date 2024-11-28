import style from "./style.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { GoAlert } from "react-icons/go";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Alerts() {
  return (
    <div className={style.alerts}>
      <header className={style.header}>
        <div className={style.welcome}>
          <h2>Alertas</h2>
          <p>Crie alertas personalizados.</p>
        </div>
        <div className={style.alertsHeaderIcons}>
          <IoIosNotificationsOutline className={style.alertsIcon} />
          <CiUser className={style.alertsIcon} />
        </div>
      </header>
      <div className={style.alertsButtons}>
        <button>
          <GoAlert className={style.btnIcon} /> Meus alertas
        </button>
        <button>
          <IoIosAddCircleOutline className={style.btnIcon} /> Criar novo alerta
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
    </div>
  );
}
