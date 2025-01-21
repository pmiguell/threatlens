import style from "./Register.module.css"

export default function Login() {
  return (
    <main>
      <div className={style.loginContainer}>
        <h1>Threat<span className={style.highlight}>Lens</span></h1>
        <p>Olá! Faça o cadastro para poder logar no sistema</p>
        <form action="">
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
