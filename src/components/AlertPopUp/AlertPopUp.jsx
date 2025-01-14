import React, { useState } from "react";
import style from "./style.module.css";
import AlertSelectedTags from "../AlertSelectedTags/AlertSelectedTags";
import { useState } from "react";

<<<<<<< HEAD
export default function AlertPopUp({ isOpen, onClose }) {
    const [keywords, setKeywords] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addKeywordTag = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            const newKeywords = inputValue.split(',').map(keyword => keyword.trim()).filter(keyword => keyword !== "");
            setKeywords([...keywords, ...newKeywords]);
            setInputValue("");
        }
    };

    const removeKeywordTag = (keywordToRemove) => {
        setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
    };

=======

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

>>>>>>> 368cc0dee6e7fbeacad9bb8f5b86729a44a5767e
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
<<<<<<< HEAD
                                {keywords.map((keyword, index) => (
                                    <AlertSelectedTags key={index} name={keyword} onClose={() => removeKeywordTag(keyword)} />
=======
                                {keywordTags.map((keyword, index) => (
                                    <AlertSelectedTags 
                                        key={index} 
                                        name={keyword}
                                        onClose = {deleteTag} 
                                    />
>>>>>>> 368cc0dee6e7fbeacad9bb8f5b86729a44a5767e
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