import style from "./AlertRecords.module.css"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

export default function AlertRecords({alertRecord, onDelete}){
    return(
        <div className={style.alert}>
                  <div className={style.alertHeader}>
                    <div className={style.alertHeaderInfo}>
                      <h3>{alertRecord.name}</h3>
                      <p>{alertRecord.dateSet}</p>
                    </div>
                    <div className={style.trashIconContainer} onClick={onDelete}>
                      <FaRegTrashAlt className={style.trashIcon}/>
                    </div>
                  </div>
                  <div className={style.alertDescription}>
                    <p>{alertRecord.description}</p>
                    <a>
                      <FaExternalLinkAlt /> {alertRecord.post}
                    </a>
                  </div>
                </div>
    )
}