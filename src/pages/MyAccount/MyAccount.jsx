import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import style from "./MyAccount.module.css";
import Header from "../../components/Header/Header";

const fieldLabels = {
  username: "Nome de usuário",
  email: "Email",
  password: "Senha",
};

const fieldTypes = {
  username: "text",
  email: "email",
  password: "password",
};

export default function MyAccount() {
  const [values, setValues] = useState({
    username: "fulano123",
    email: "fulano@email.com",
    password: "teste123testezin",
  });
  const [editingField, setEditingField] = useState(null);
  const [modalValue, setModalValue] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function openModal(field) {
    setEditingField(field);
    setModalValue("");
    setCurrentPassword("");
    setConfirmPassword("");
  }

  function closeModal() {
    setEditingField(null);
    setModalValue("");
    setCurrentPassword("");
    setConfirmPassword("");
  }

  function handleSave() {
    if (editingField === "password") {
      if (!currentPassword.trim() || !modalValue.trim() || !confirmPassword.trim()) return;
      if (modalValue !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
      }
    } else {
      if (!modalValue.trim()) return;
    }
    setValues((prev) => ({ ...prev, [editingField]: modalValue }));
    closeModal();
  }

  return (
    <div className={style.myAccount}>
      <Header
        pageName="Minha conta"
        pageDescription="Gerencie as informações da sua conta"
      />

      <div className={style.myAccountContainer}>
        <form className={style.myAccountForm}>
          {Object.keys(values).map((field) => (
            <div key={field} className={style.formGroup}>
              <label htmlFor={field}>{fieldLabels[field]}</label>
              <div className={style.inputRow}>
                <input
                  id={field}
                  type={fieldTypes[field]}
                  value={values[field]}
                  disabled
                  readOnly
                />
                <button
                  type="button"
                  className={style.editIconBtn}
                  onClick={() => openModal(field)}
                >
                  <FaRegEdit />
                </button>
              </div>
            </div>
          ))}
        </form>
      </div>

      {editingField && (
        <>
          <div className={style.overlay} onClick={closeModal} />
          <div className={style.modal}>
            <h3 className={style.modalTitle}>Alterar {fieldLabels[editingField]}</h3>
            {editingField === "password" ? (
              <>
                <div className={style.modalField}>
                  <label htmlFor="currentPassword">Senha atual</label>
                  <input
                    id="currentPassword"
                    type="password"
                    placeholder="Digite sua senha atual"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className={style.modalField}>
                  <label htmlFor="newPassword">Nova senha</label>
                  <input
                    id="newPassword"
                    type="password"
                    placeholder="Digite a nova senha"
                    value={modalValue}
                    onChange={(e) => setModalValue(e.target.value)}
                  />
                </div>
                <div className={style.modalField}>
                  <label htmlFor="confirmPassword">Confirmar nova senha</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Repita a nova senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <div className={style.modalField}>
                <label htmlFor="modalInput">Novo valor</label>
                <input
                  id="modalInput"
                  type={fieldTypes[editingField]}
                  placeholder={`Novo ${fieldLabels[editingField].toLowerCase()}`}
                  value={modalValue}
                  onChange={(e) => setModalValue(e.target.value)}
                  autoFocus
                />
              </div>
            )}
            <div className={style.modalActions}>
              <button type="button" className={style.cancelBtn} onClick={closeModal}>
                Cancelar
              </button>
              <button type="button" className={style.saveBtn} onClick={handleSave}>
                Salvar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
