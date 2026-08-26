import style from "./CreateAlertPopUp.module.css";
import { useState } from "react";
import AlertSelectedTags from "../AlertSelectedTags/AlertSelectedTags";
import RangeSlider from "../RangeSlider/RangeSlider";
import { FORUM_OPTIONS, FREQUENCY_TYPES } from "../../constants";

export default function CreateAlertPopUp({ isOpen, onClose, idUser }) {
    const [name, setName] = useState("");
    const [forums, setForums] = useState([]);
    const [emails, setEmails] = useState([]);
    const [emailInput, setEmailInput] = useState("");
    const [qteFrequency, setQteFrequency] = useState(1);
    const [typeFrequency, setTypeFrequency] = useState("days");
    const [isRelevant, setIsRelevant] = useState(0.6);
    const [keywords, setKeywords] = useState([]);
    const [keywordInput, setKeywordInput] = useState("");
    const [startDate, setStartDate] = useState("");
    const [finalDate, setFinalDate] = useState("");
    const [noDeadline, setNoDeadline] = useState(false);

    // --- Keywords ---
    function addKeywordTag(event) {
        if (event.key === "Enter" && keywordInput.trim() !== "") {
            const newKeywords = keywordInput
                .split(",")
                .map((k) => k.trim())
                .filter((k) => k !== "" && !keywords.includes(k));
            setKeywords([...keywords, ...newKeywords]);
            setKeywordInput("");
        }
    }

    function removeKeywordTag(keywordToRemove) {
        setKeywords(keywords.filter((k) => k !== keywordToRemove));
    }

    // --- Emails ---
    function addEmailTag(event) {
        if (event.key === "Enter" && emailInput.trim() !== "") {
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.trim());
            if (!isValid) {
                alert("Digite um e-mail válido.");
                return;
            }
            if (!emails.includes(emailInput.trim())) {
                setEmails([...emails, emailInput.trim()]);
            }
            setEmailInput("");
        }
    }

    function removeEmailTag(emailToRemove) {
        setEmails(emails.filter((e) => e !== emailToRemove));
    }

    // --- Forums ---
    function toggleForum(forum) {
        if (forums.includes(forum)) {
            setForums(forums.filter((f) => f !== forum));
        } else {
            setForums([...forums, forum]);
        }
    }

    // --- Reset e fechar ---
    function resetForm() {
        setName("");
        setForums([]);
        setEmails([]);
        setEmailInput("");
        setQteFrequency(1);
        setTypeFrequency("days");
        setIsRelevant(0.6);
        setKeywords([]);
        setKeywordInput("");
        setStartDate("");
        setFinalDate("");
        setNoDeadline(false);
    }

    function handleClosePopUp() {
        resetForm();
        onClose();
    }

    // --- Enviar ---
    async function handleBtnCreate() {
        if (!name.trim()) {
            alert("Informe um nome para o alerta.");
            return;
        }
        if (keywords.length === 0) {
            alert("Adicione ao menos uma keyword.");
            return;
        }
        if (forums.length === 0) {
            alert("Selecione ao menos uma fonte de busca.");
            return;
        }
        if (emails.length === 0) {
            alert("Adicione ao menos um e-mail para notificação.");
            return;
        }
        if (!startDate) {
            alert("Informe a data de início.");
            return;
        }
        if (!noDeadline && !finalDate) {
            alert("Informe a data limite ou marque 'Sem data limite'.");
            return;
        }

        const payload = {
            name,
            id_user: idUser,
            start_date: startDate,
            final_date: noDeadline ? "2099-12-31" : finalDate,
            qte_frequency: Number(qteFrequency),
            type_frequency: typeFrequency,
            is_relevant: isRelevant,
            forums,
            emails,
            keywords,
        };

        try {
            const credentials = btoa("usuario:senha"); // substitua pelo seu contexto de auth
            const response = await fetch("http://localhost:8877/api/v1/alert/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${credentials}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const error = await response.json();
                console.error("Erro da API:", error);
                alert("Erro ao criar alerta. Verifique os dados.");
                return;
            }

            const data = await response.json();
            console.log("Alerta criado:", data);
            handleClosePopUp();
        } catch (err) {
            console.error("Erro na requisição:", err);
            alert("Não foi possível conectar à API.");
        }
    }

    if (!isOpen) return null;

    return (
        <div className={style.alertPopUp}>
            <div className={style.closeIcon} onClick={handleClosePopUp}>
                ✖
            </div>

            <div className={style.alertContainer}>
                <div className={style.alertContent}>
                    <h1>Configure seu alerta</h1>

                    {/* Nome */}
                    <div className={style.container}>
                        <h2>Nome</h2>
                        <input
                            type="text"
                            placeholder="Ex: Alerta keyword 'IP'"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Fóruns */}
                    <div className={style.container}>
                        <h2>Fonte de busca:</h2>
                        <div className={style.forumsContainer}>
                            {FORUM_OPTIONS.map((forum) => (
                                <label key={forum} className={style.forumLabel}>
                                    <input
                                        type="checkbox"
                                        checked={forums.includes(forum)}
                                        onChange={() => toggleForum(forum)}
                                    />
                                    {forum.charAt(0).toUpperCase() + forum.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Emails */}
                    <div className={style.container}>
                        <h2>E-mails para notificação:</h2>
                        <div className={style.keywordsContainer}>
                            <input
                                type="email"
                                placeholder="Ex: johndoe@email.com — pressione Enter"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                onKeyDown={addEmailTag}
                            />
                            <div className={style.tagsContainer}>
                                {emails.map((email, index) => (
                                    <AlertSelectedTags
                                        key={index}
                                        name={email}
                                        onClose={() => removeEmailTag(email)}
                                        editing={true}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Relevância */}
                    <div className={style.container}>
                        <h2>Relevância mínima:</h2>
                        <RangeSlider value={isRelevant} onChange={setIsRelevant} />
                    </div>

                    {/* Frequência */}
                    <div className={style.container}>
                        <h2>Periodicidade do alerta:</h2>
                        <div className={style.frequencyContainer}>
                            <input
                                type="number"
                                min={1}
                                value={qteFrequency}
                                onChange={(e) => setQteFrequency(e.target.value)}
                                className={style.frequencyNumber}
                            />
                            <select
                                value={typeFrequency}
                                onChange={(e) => setTypeFrequency(e.target.value)}
                                className={style.frequencySelect}
                            >
                                {FREQUENCY_TYPES.map((ft) => (
                                    <option key={ft.value} value={ft.value}>
                                        {ft.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Keywords */}
                    <div className={style.container}>
                        <h2>Keywords</h2>
                        <div className={style.keywordsContainer}>
                            <input
                                type="text"
                                placeholder="Ex: injection, sql, attack — pressione Enter"
                                value={keywordInput}
                                onChange={(e) => setKeywordInput(e.target.value)}
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

                    {/* Datas */}
                    <div className={style.container}>
                        <h2>Período do alerta</h2>
                        <div className={style.datesContainer}>
                            <div>
                                <label>Data de início</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Data limite</label>
                                <input
                                    type="date"
                                    value={finalDate}
                                    min={startDate || new Date().toISOString().split("T")[0]}
                                    disabled={noDeadline}
                                    onChange={(e) => setFinalDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={style.deadlineCheckbox}>
                            <input
                                type="checkbox"
                                id="deadline"
                                checked={noDeadline}
                                onChange={() => setNoDeadline(!noDeadline)}
                            />
                            <label htmlFor="deadline">Sem data limite</label>
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