import style from "./Login.module.css"

export default function Login() {
  return (
    <main>
      <div className={style.loginContainer}>
        <h1>Threat<span className={style.highlight}>Lens</span></h1>
        <p>Olá, administrador! Faça o login para acessar o sistema</p>
        <form action="">
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="submit" value="Logar" />
        </form>
        <a href="#">Esqueci minha senha</a>
      </div>
    </main>
  );
}
