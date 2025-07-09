import { Link } from "react-router-dom";
import style from "./Register.module.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      await axios.post("http://192.168.15.2:8080/auth/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("emailForVerification", email);
      navigate("/verify");
    } catch (err) {
      alert("Erro ao cadastrar: " + err.response?.data?.message || err.message);
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
      <form action="" onSubmit={handleSubmit} className={style.registerForm}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nome de usuário"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <input
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repita a senha"
        />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}
