import style from "./style.module.css";
import Header from "../../components/Header/Header";

export default function MyAccount() {
  return (
    <div className={style.myAccount}>
      <Header
        pageName="Minha conta"
        pageDescription="Gerencie as informações da sua conta"
      />

      <div className={style.myAccountContainer}>
        <form action="#" className={style.myAccountForm}>
          <div className={style.formGroup}>
            <label htmlFor="username">Nome de usuário:</label>
            <input type="text" value="fulano123" disabled />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" value="fulano@email.com" disabled />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password">Senha:</label>
            <input type="password" value="teste123testezin" disabled />
          </div>
        </form>
        <div className={style.buttonsContainer}>
            <button className={style.editBtn}>
                Editar
            </button>
        </div>
      </div>

    </div>
  );
}
