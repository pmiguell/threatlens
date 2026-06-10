import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import style from "./Admin.module.css";
import Header from "../../components/Header/Header";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { useUsers } from "../../hooks";
import { useAuth } from "../../context/AuthContext";

export default function Admin() {
  const { users, loading, error, deleteUser } = useUsers();
  const { user: currentUser } = useAuth();
  const [targetUser, setTargetUser] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  async function handleConfirmDelete() {
    setDeleting(true);
    setDeleteError("");
    try {
      await deleteUser(targetUser.id);
      setTargetUser(null);
    } catch {
      setDeleteError("Erro ao deletar usuário.");
      setTargetUser(null);
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className={style.admin}>
      <Header
        pageName="Administração"
        pageDescription="Gerencie os usuários da plataforma"
      />

      <div className={style.content}>
        {loading && <p className={style.message}>Carregando usuários...</p>}
        {(error || deleteError) && (
          <p className={style.error}>{error || deleteError}</p>
        )}
        {!loading && !error && users.length === 0 && (
          <p className={style.message}>Nenhum usuário encontrado.</p>
        )}

        <div className={style.grid}>
          {users.map((u) => (
            <div key={u.id} className={style.card}>
              <div className={style.cardInfo}>
                <span className={style.name}>{u.username}</span>
                <span className={style.email}>{u.email}</span>
              </div>
              <button
                className={style.deleteBtn}
                onClick={() => setTargetUser(u)}
                title={u.email === currentUser?.email ? "Você não pode deletar sua própria conta" : "Deletar conta"}
                disabled={u.email === currentUser?.email}
              >
                <MdDeleteOutline size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <ConfirmModal
        isOpen={targetUser !== null}
        title="Deletar conta"
        message={`Tem certeza que deseja deletar a conta de ${targetUser?.username}? Essa ação não pode ser desfeita.`}
        confirmLabel="Deletar"
        onConfirm={handleConfirmDelete}
        onCancel={() => setTargetUser(null)}
        loading={deleting}
      />
    </div>
  );
}
