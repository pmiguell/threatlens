import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import style from "./Admin.module.css";
import Header from "../../components/Header/Header";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { usersService } from "../../services/users/usersService";

// --- MOCK: remover bloco abaixo quando a API estiver pronta ---
const MOCK_USERS = [
  { id: 1, username: "Pedro Miguel", email: "pedro@example.com" },
  { id: 2, username: "Ana Clara", email: "ana.clara@example.com" },
  { id: 3, username: "Carlos Souza", email: "carlos.souza@example.com" },
  { id: 4, username: "Mariana Lima", email: "mariana.lima@example.com" },
];
// --- fim do MOCK ---

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [targetUser, setTargetUser] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      // --- MOCK: substituir pelo bloco comentado abaixo quando a API estiver pronta ---
      setUsers(MOCK_USERS);
      setLoading(false);
      // --- fim do MOCK ---

      // try {
      //   const { data } = await usersService.listAll();
      //   setUsers(data);
      // } catch {
      //   setError("Erro ao carregar usuários.");
      // } finally {
      //   setLoading(false);
      // }
    }
    fetchUsers();
  }, []);

  async function handleConfirmDelete() {
    setDeleting(true);
    try {
      await usersService.deleteUser(targetUser.id);
      setUsers((prev) => prev.filter((u) => u.id !== targetUser.id));
      setTargetUser(null);
    } catch {
      setError("Erro ao deletar usuário.");
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
        {error && <p className={style.error}>{error}</p>}
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
                title="Deletar conta"
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
