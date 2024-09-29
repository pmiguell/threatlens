import style from "./style.module.css";

export default function RelevantPostsTable() {
  return (
    <div className={style.tableContainer}>
      <h2 className={style.description}>Posts mais relevantes hoje</h2>
      <div className={style.tableScroll}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>Como obter o endereço IP de um site</td>
              <td className={style.rate}>0.99</td>
              <td>
                <a href="#">Visualizar</a>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>Como obter o endereço IP de um site</td>
              <td className={style.rate}>0.99</td>
              <td>
                <a href="#">Visualizar</a>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>Como obter o endereço IP de um site</td>
              <td className={style.rate}>0.99</td>
              <td>
                <a href="#">Visualizar</a>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>Como obter o endereço IP de um site</td>
              <td className={style.rate}>0.99</td>
              <td>
                <a href="#">Visualizar</a>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>Como obter o endereço IP de um site</td>
              <td className={style.rate}>0.99</td>
              <td>
                <a href="#">Visualizar</a>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>Como obter o endereço IP de um site</td>
              <td className={style.rate}>0.99</td>
              <td>
                <a href="#">Visualizar</a>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>Como obter o endereço IP de um site</td>
              <td className={style.rate}>0.99</td>
              <td>
                <a href="#">Visualizar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
