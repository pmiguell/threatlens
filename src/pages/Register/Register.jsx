import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import { authService } from "../../services/auth/authService";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== repeatPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      await authService.register({ username, email, password });
      localStorage.setItem("emailForVerification", email);
      localStorage.setItem("codeTypeForVerification", "REGISTER");
      navigate("/verify");
    } catch (err) {
      setError(err.response?.data?.message ?? "Erro ao cadastrar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.registerContainer}>
      <h1>
        Threat<span className={style.highlight}>Lens</span>
      </h1>
      <p>
        Olá! Faça o cadastro para poder logar no sistema ou logue{" "}
        <Link to="/login" className={style.highlight}>
          aqui
        </Link>
      </p>
      <form onSubmit={handleSubmit} className={style.registerForm}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nome de usuário"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <input
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repita a senha"
          required
        />
        {error && <p className={style.errorMsg}>{error}</p>}
        <input type="submit" value={loading ? "Cadastrando..." : "Cadastrar"} disabled={loading} />
      </form>
    </div>
  );
}
