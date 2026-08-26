import { useCallback, useEffect, useState } from "react";
import { adminService } from "../services/admin/adminService";

export function useUsers({ page = 0, size = 20 } = {}) {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await adminService.listAll({ page, size });
      setUsers(data.content);
      setPagination({ page: data.page, size: data.size, totalElements: data.totalElements, totalPages: data.totalPages });
    } catch {
      setError("Erro ao carregar usuários.");
    } finally {
      setLoading(false);
    }
  }, [page, size]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  async function deleteUser(id) {
    await adminService.deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
    setPagination((prev) => prev && { ...prev, totalElements: prev.totalElements - 1 });
  }

  return { users, pagination, loading, error, deleteUser };
}
