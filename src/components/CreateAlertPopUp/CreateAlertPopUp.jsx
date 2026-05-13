import style from "./CreateAlertPopUp.module.css";
import { useState } from "react";
import AlertSelectedTags from "../AlertSelectedTags/AlertSelectedTags";
import RangeSlider from "../RangeSlider/RangeSlider";

export default function CreateAlertPopUp({ isOpen, onClose }) {
    const [name, setName] = useState("");
    const [source, setSource] = useState("");
    const [email, setEmail] = useState("");
    const [periodicity, setPeriodicity] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [deadlineCheck, setDeadlineCheck] = useState(false);

    function addKeywordTag(event) {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            const newKeywords = inputValue.split(',').map(k => k.trim()).filter(k => k !== "");
            setKeywords([...keywords, ...newKeywords]);
            setInputValue("");
        }
    }

    function removeKeywordTag(keywordToRemove) {
        setKeywords(keywords.filter(k => k !== keywordToRemove));
    }

    function handleClosePopUp() {
        setName("");
        setSource("");
        setEmail("");
        setPeriodicity("");
        setKeywords([]);
        setInputValue("");
        setDeadlineCheck(false);
        onClose();
    }

    function handleDeadline() {
        setDeadlineCheck(!deadlineCheck);
    }

    function handleBtnCreate() {
        if (keywords.length === 0) {
            alert("Adicione ao menos uma keyword para criar o alerta.");
            return;
        }
        // TODO: enviar para a API { name, source, email, periodicity, keywords }
        handleClosePopUp();
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
                        <input
                            type="text"
                            placeholder="Ex: Alerta keyword 'IP'"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className={style.container}>
                        <h2>Fonte de busca:</h2>
                        <input
                            type="text"
                            placeholder="Ex: https://www.twitter.com"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                        />
                    </div>

                    <div className={style.container}>
                        <h2>Email para envio de alertas:</h2>
                        <input
                            type="email"
                            placeholder="Ex: johndoe@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={style.container}>
                        <h2>Intervalo de relevância:</h2>
                        <RangeSlider />
                    </div>

                    <div className={style.container}>
                        <h2>Periodicidade do alerta:</h2>
                        <input
                            type="text"
                            placeholder="Ex: 5 dias"
                            value={periodicity}
                            onChange={(e) => setPeriodicity(e.target.value)}
                        />
                    </div>

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
                                    <AlertSelectedTags
                                        key={index}
                                        name={keyword}
                                        onClose={() => removeKeywordTag(keyword)}
                                        editing={true}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={style.container}>
                        <h2>Data Limite</h2>
                        <div className={style.deadlineContainer}>
                            <input
                                type="date"
                                min={new Date().toISOString().split("T")[0]}
                                disabled={deadlineCheck}
                            />
                            <div className={style.deadlineCheckbox}>
                                <input type="checkbox" id="deadline" onChange={handleDeadline} />
                                <label htmlFor="deadline">Sem data limite</label>
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
