import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import style from "./MyAccount.module.css";
import Header from "../../components/Header/Header";
import { useAuth } from "../../context/AuthContext";
import { authService } from "../../services/auth/authService";

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
  const { user } = useAuth();

  const [editingField, setEditingField] = useState(null);
  const [modalValue, setModalValue] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalError, setModalError] = useState("");
  const [saving, setSaving] = useState(false);

  const displayValues = {
    username: user?.username ?? "",
    email: user?.email ?? "",
    password: "••••••••",
  };

  function openModal(field) {
    setEditingField(field);
    setModalValue("");
    setCurrentPassword("");
    setConfirmPassword("");
    setModalError("");
  }

  function closeModal() {
    setEditingField(null);
    setModalValue("");
    setCurrentPassword("");
    setConfirmPassword("");
    setModalError("");
  }

  async function handleSave() {
    setModalError("");

    if (editingField === "password") {
      if (!currentPassword.trim() || !modalValue.trim() || !confirmPassword.trim()) return;
      if (modalValue !== confirmPassword) {
        setModalError("As senhas não coincidem.");
        return;
      }
      setSaving(true);
      try {
        await authService.changePassword({
          currentPassword,
          newPassword: modalValue,
          newPasswordConfirm: confirmPassword,
        });
        closeModal();
      } catch (err) {
        setModalError(err.response?.data?.message ?? "Erro ao alterar a senha.");
      } finally {
        setSaving(false);
      }
    } else {
      // username / email changes not yet supported by the backend
      closeModal();
    }
  }

  return (
    <div className={style.myAccount}>
      <Header
        pageName="Minha conta"
        pageDescription="Gerencie as informações da sua conta"
      />

      <div className={style.myAccountContainer}>
        <form className={style.myAccountForm}>
          {Object.keys(displayValues).map((field) => (
            <div key={field} className={style.formGroup}>
              <label htmlFor={field}>{fieldLabels[field]}</label>
              <div className={style.inputRow}>
                <input
                  id={field}
                  type={fieldTypes[field]}
                  value={displayValues[field]}
                  disabled
                  readOnly
                />
                {field === "password" && (
                  <button
                    type="button"
                    className={style.editIconBtn}
                    onClick={() => openModal(field)}
                  >
                    <FaRegEdit />
                  </button>
                )}
              </div>
            </div>
          ))}
        </form>
      </div>

      {editingField === "password" && (
        <>
          <div className={style.overlay} onClick={closeModal} />
          <div className={style.modal}>
            <h3 className={style.modalTitle}>Alterar {fieldLabels[editingField]}</h3>
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
            {modalError && <p className={style.modalError}>{modalError}</p>}
            <div className={style.modalActions}>
              <button type="button" className={style.cancelBtn} onClick={closeModal}>
                Cancelar
              </button>
              <button type="button" className={style.saveBtn} onClick={handleSave} disabled={saving}>
                {saving ? "Salvando..." : "Salvar"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
