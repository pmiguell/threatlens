import style from "./Posts.module.css";
import Header from "../../components/Header/Header";
import AllPostsTable from "../../components/AllPostsTable/AllPostsTable";

export default function Posts() {
  return (
    <div className={style.posts}>
      <Header
        pageName="Posts"
        pageDescription="Analise os posts inseridos no sistema."
      />

      <div className={style.postsInputs}>
        <input type="text" placeholder="Buscar..." />
      </div>

      <div className={style.postsContainer}>
        <AllPostsTable/>
      </div>
    </div>
  );
}
