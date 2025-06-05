import { Link } from "react-router-dom";
import style from "./Register.module.css"

export default function Register() {
  return (
    <main>
      <div className={style.registerContainer}>
        <h1>Threat<span className={style.highlight}>Lens</span></h1>
        <p>Olá! Faça o cadastro para poder logar no sistema ou logue <Link to="/login" className={style.highlight}>aqui</Link></p>
        <form action="" className={style.registerForm}>
          <input type="text" placeholder="Nome de usuário" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Repita a senha" />
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </main>
  );
}
