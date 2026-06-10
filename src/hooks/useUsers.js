import { useCallback, useEffect, useState } from "react";
import { usersService } from "../services/users/usersService";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await usersService.listAll();
      setUsers(data.content);
    } catch {
      setError("Erro ao carregar usuários.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  async function deleteUser(id) {
    await usersService.deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return { users, loading, error, deleteUser };
}
