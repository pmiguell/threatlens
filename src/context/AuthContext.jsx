import { createContext, useCallback, useContext, useState } from "react";
import { authService } from "../services/auth/authService";

const AUTH_USER_KEY = "auth_user";

const AuthContext = createContext(null);

function loadStoredUser() {
  try {
    const stored = localStorage.getItem(AUTH_USER_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadStoredUser);

  const login = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(userData));
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch {}
    setUser(null);
    localStorage.removeItem(AUTH_USER_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user !== null }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
