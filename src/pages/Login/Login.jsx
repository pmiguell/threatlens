import { Link } from "react-router-dom";
import style from "./Login.module.css"

export default function Login() {
  return (
    <main>
      <div className={style.loginContainer}>
        <h1>Threat<span className={style.highlight}>Lens</span></h1>
        <p>Olá! Faça o login para acessar o sistema ou crie uma conta <Link to="/register" className={style.highlight}>aqui</Link></p>
        <form action="" className={style.loginForm}>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
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
    </main>
  );
}
