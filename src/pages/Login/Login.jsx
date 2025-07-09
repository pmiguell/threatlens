import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://192.168.15.2:8080/auth/login", {
        email,
        password,
      });

      const token = response.data.token;

      // Salva token para usar nas próximas requisições
      localStorage.setItem("jwtToken", token);

      // Redireciona para área protegida
      navigate("/"); // Altere para a rota protegida do seu app
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        err.response.data.message === "Usuário ainda não verificou o código 2FA"
      ) {
        alert("Você precisa verificar seu código 2FA antes de logar.");
        navigate("/verify");
      } else {
        alert("Erro ao fazer login: " + (err.response?.data?.message || err.message));
      }
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
        <input type="submit" value="Logar" />
      </form>
      <div className={style.loginOptions}>
        <div className={style.rememberMe}>
          <input type="checkbox" id="rememberMe" name="rememberMe" value="rememberMe" />
          <label htmlFor="rememberMe">Lembrar de mim</label>
        </div>
        <a href="#">Esqueci minha senha</a>
      </div>
    </div>
  );
}
