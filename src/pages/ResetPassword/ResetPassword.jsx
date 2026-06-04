import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ResetPassword.module.css";
import { authService } from "../../services/auth/authService";
import { useAuth } from "../../context/AuthContext";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== passwordConfirm) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      await authService.resetPassword({ password, passwordConfirm });
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message ?? "Não foi possível redefinir a senha.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <h1>
        Threat<span className={style.highlight}>Lens</span>
      </h1>
      <p>Defina sua nova senha.</p>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="password"
          placeholder="Nova senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirme a nova senha"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        {error && <p className={style.errorMsg}>{error}</p>}
        <input
          type="submit"
          value={loading ? "Salvando..." : "Redefinir senha"}
          disabled={loading}
        />
      </form>
    </div>
  );
}
