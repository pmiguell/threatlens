import api from "../api";

export const usersService = {
  listAll: ({ role, search, page = 0, size = 20 } = {}) =>
    api.get("/admin/users", { params: { role, search, page, size, sort: "username,asc" } }),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
};
