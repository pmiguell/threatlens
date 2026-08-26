import { createContext, useCallback, useContext, useState } from "react";
import { authService } from "../services/auth/authService";
import { AUTH_USER_KEY } from "../constants";
import { storage } from "../utils";

const AuthContext = createContext(null);

function loadStoredUser() {
  return storage.get(AUTH_USER_KEY);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadStoredUser);

  const login = useCallback((userData) => {
    setUser(userData);
    storage.set(AUTH_USER_KEY, userData);
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch {}
    setUser(null);
    storage.remove(AUTH_USER_KEY);
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
