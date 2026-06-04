import api from "../api";

export const authService = {
  register: (data) =>
    api.post("/auth/register", data),

  login: (data) =>
    api.post("/auth/login", data),

  verify: (data) =>
    api.post("/auth/verify", data),

  resendCode: (email) =>
    api.post(`/auth/resend-code?email=${encodeURIComponent(email)}`),

  refresh: () =>
    api.post("/auth/refresh"),

  logout: () =>
    api.post("/auth/logout"),

  forgotPassword: (data) =>
    api.post("/auth/forgot-password", data),

  resendPasswordCode: (email) =>
    api.post(`/auth/resend-password?email=${encodeURIComponent(email)}`),

  resetPassword: (data) =>
    api.post("/auth/reset-password", data),

  changePassword: (data) =>
    api.post("/auth/change-password", data),
};
