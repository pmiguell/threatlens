import style from "./CreateAlertPopUp.module.css";
import React, { useState } from "react";
import AlertSelectedTags from "../AlertSelectedTags/AlertSelectedTags";
import DoubleRangeSlider from "../DoubleRangeSlider/DoubleRangeSlider";

export default function CreateAlertPopUp({ isOpen, onClose, alertInfo }) {
    const [keywords, setKeywords] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [deadlineCheck, setDeadlineCheck] = useState(false);

    function addKeywordTag(event) {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            const newKeywords = inputValue.split(',').map(keyword => keyword.trim()).filter(keyword => keyword !== "");
            //checar se keyword já está no array
            setKeywords([...keywords, ...newKeywords]);
            setInputValue("");
        }
    };

    function removeKeywordTag(keywordToRemove) {
        setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
    };

    function handleClosePopUp() {
        setKeywords([]);
        setInputValue('');
        onClose();
    }

    function handleDeadline(){
        setDeadlineCheck(!deadlineCheck);
    }

    function handleBtnCreate() {
        if (keywords.length == 0) {
            alert("Não possui keywords para criar alerta!");
        } else {
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

            <div className={style.alertContainer}>

                <div className={style.alertContent}>
                    <h1>Configure seu alerta</h1>

                    <div className={style.container}>
                        <h2>Nome</h2>
                        <input type="text" placeholder="Ex: Alerta keyword 'IP'" />
                    </div>

                    <div className={style.container}>
                        <h2>Fonte de busca:</h2>
                        <input type="text" placeholder="Ex: https://www.twitter.com" />
                    </div>

                    <div className={style.container}>
                        <h2>Email para envio de alertas:</h2>
                        <input type="email" placeholder="Ex: johndoe@email.com" />
                    </div>

                    <div className={style.container}>
                        <h2>Intervalo de relevância:</h2>
                        <DoubleRangeSlider />
                    </div>

                    <div className={style.container}>
                        <h2>Periodicidade do alerta:</h2>
                        <input type="email" placeholder="Ex: 5 dias" />
                    </div>

                    <div>
                        <div className={style.container}>
                            <h2>Keywords</h2>
                            <div className={style.keywordsContainer}>
                                <input
                                    type="text"
                                    placeholder="Ex: injection, sql, attack"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={addKeywordTag}
                                />
                                <div className={style.tagsContainer}>
                                    {keywords.map((keyword, index) => (
                                        <AlertSelectedTags key={index} name={keyword} onClose={() => removeKeywordTag(keyword)} editing={true} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={style.container}>
                            <h2>Data Limite</h2>

                            <div className={style.deadlineContainer}>
                                <input type="date" min={new Date().toISOString().split("T")[0]} disabled={deadlineCheck}/>
                                <div className={style.deadlineCheckbox}>
                                    <input type="checkbox" id="deadline" onClick={handleDeadline} />
                                    <label htmlFor="deadline">Sem data limite</label>
                                </div>
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