import style from "./style.module.css";
import AlertSelectedTags from "../AlertSelectedTags/AlertSelectedTags";
import { useState } from "react";


export default function AlertPopUp({ isOpen, onClose }) {
    const [keywordTags, setKeywordTags] = useState([]); // Estado para as tags

    const addKeywordTag = (event) => {
        if (event.key == 'Enter') {
            let input = event.target;
            let rawInput = input.value;
            const keywords = rawInput.split(" ").join("").split(",");
            input.value = '';

            setKeywordTags((prevTags) => [...prevTags, ...keywords]);
        }
    }

    const deleteTag = () => {
        
    }

    if (!isOpen) {
        return null;
    }

    return (
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
                                {keywordTags.map((keyword, index) => (
                                    <AlertSelectedTags 
                                        key={index} 
                                        name={keyword}
                                        onClose = {deleteTag} 
                                    />
                                ))}
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