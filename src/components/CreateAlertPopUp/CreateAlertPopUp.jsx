import React, { useState } from "react";
import style from "./style.module.css";
import AlertSelectedTags from "../AlertSelectedTags/AlertSelectedTags";

export default function CreateAlertPopUp({ isOpen, onClose , alertInfo}) {
    const [keywords, setKeywords] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function addKeywordTag(event){
        if (event.key === "Enter" && inputValue.trim() !== "") {
            const newKeywords = inputValue.split(',').map(keyword => keyword.trim()).filter(keyword => keyword !== "");
            //checar se keyword já está no array
            setKeywords([...keywords, ...newKeywords]);
            setInputValue("");
        }
    };

    function removeKeywordTag(keywordToRemove){
        setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
    };

    function handleClosePopUp(){
        setKeywords([]);
        setInputValue('');
        onClose();
    }

    function handleBtnCreate(){
        if(keywords.length==0){
            alert("Não possui keywords para criar alerta!");
        }else{
            //salvar as keywords no banco
            // alerta criado pop up
            // chamada handleClosePopUp
            handleClosePopUp();
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className={style.alertPopUp}>
            <div className={style.closeIcon} onClick={handleClosePopUp}>
                ✖
            </div>

            <div className={style.alertContent}>
                <div className={style.alertContainer}>
                    <h1>Configure seu alerta</h1>

                    <div className={style.alertConfigs}>
                        
                        <div className={style.keywordsInput}>
                            <h2>Keywords</h2>
                            <input
                                type="text"
                                placeholder="Ex: injection, sql, attack"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={addKeywordTag}
                            />
                        </div>

                        <div className={style.selectedTags}>
                            <h2>Tags</h2>
                            <div className={style.tagsContainer}>
                                {keywords.map((keyword, index) => (
                                    <AlertSelectedTags key={index} name={keyword} onClose={() => removeKeywordTag(keyword)} editing={true} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <button className={style.button} onClick={handleBtnCreate}>
                    Criar Alerta
                </button>
            </div>
        </div>
    );
}