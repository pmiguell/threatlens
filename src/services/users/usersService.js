import api from "../api";

export const usersService = {
  listAll: () => api.get("/admin/users"),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
};
