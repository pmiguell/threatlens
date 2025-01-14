import style from "./style.module.css";
import Header from "../../components/Header/Header";

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
        <table className={style.postsTable}>
          <tr>
            <th>ID</th>
            <th>Classificação</th>
            <th>Título</th>
            <th>Keywords</th>
            <th>IoCs</th>
          </tr>
          <tr>
            <td>4223</td>
            <td>0,99</td>
            <td>Como obter o IP de um sit...</td>
            <td>IP</td>
            <td>Sim</td>
          </tr>
          <tr>
            <td>4223</td>
            <td>0,99</td>
            <td>Como obter o IP de um sit...</td>
            <td>IP</td>
            <td>Sim</td>
          </tr>
          <tr>
            <td>4223</td>
            <td>0,99</td>
            <td>Como obter o IP de um sit...</td>
            <td>IP</td>
            <td>Sim</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
