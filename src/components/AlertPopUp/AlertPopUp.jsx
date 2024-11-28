import style from "./style.module.css";
import AlertSelectedTags from "../AlertSelectedTags/AlertSelectedTags";

export default function AlertPopUp({isOpen, onClose}){
    const addKeywordTag = () => {
        
    }

    if (!isOpen){
        return null;
    }

    return(
        <div className={style.alertPopUp}>
                <div className={style.closeIcon} onClick={onClose}>
                    ✖
                </div>

            <div className={style.alertContent}>
                <div className={style.alertContainer}>
                    <h1>Configure seu alerta</h1>

                    <div className={style.alertConfigs}>
                        <div className={style.keywordsInput}>
                            <h2>Keyword</h2>
                            <input type="text" placeholder="Ex: injection, sql, attack" onKeyDown={addKeywordTag} />
                        </div>
                        
                        <div className={style.selectedTags}>
                            <h2>Tags</h2>
                            <div className={style.tagsContainer}>
                                <AlertSelectedTags name={"injection"}/>
                                <AlertSelectedTags name={"SQL"}/>
                                <AlertSelectedTags name={"attack"}/>
                                <AlertSelectedTags name={"CPF"}/>
                                <AlertSelectedTags name={"email"}/>
                                <AlertSelectedTags name={"password"}/>
                                <AlertSelectedTags name={"hack"}/>
                                <AlertSelectedTags name={"virus"}/>
                            </div>
                        </div>
                    </div>
                </div>
                        <button className={style.button}>
                            Criar Alerta
                        </button>
            </div>
        </div>

    );

}