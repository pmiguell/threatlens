import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { authService } from "../../services/auth/authService";
import { useAuth } from "../../context/AuthContext";
import { EMAIL_VERIFICATION_KEY, CODE_TYPE_KEY, CODE_TYPE_REGISTER } from "../../constants";
import { storage } from "../../utils";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await authService.login({ email, password });
      login(data);
      navigate("/", { replace: true });
    } catch (err) {
      const msg = err.response?.data?.message ?? "Erro ao fazer login.";
      if (msg.includes("não verificou")) {
        storage.set(EMAIL_VERIFICATION_KEY, email);
        storage.set(CODE_TYPE_KEY, CODE_TYPE_REGISTER);
        navigate("/verify");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.loginContainer}>
      <h1>
        Threat<span className={style.highlight}>Lens</span>
      </h1>
      <p>
        Olá! Faça o login para acessar o sistema ou crie uma conta{" "}
        <Link to="/register" className={style.highlight}>
          aqui
        </Link>
      </p>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className={style.errorMsg}>{error}</p>}
        <input type="submit" value={loading ? "Entrando..." : "Logar"} disabled={loading} />
      </form>
      <div className={style.loginOptions}>
        <div className={style.rememberMe}>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Lembrar de mim</label>
        </div>
        <Link to="/forgot-password" className={style.highlight}>
          Esqueci minha senha
        </Link>
      </div>
    </div>
  );
}
