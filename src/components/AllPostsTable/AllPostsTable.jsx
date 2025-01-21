import style from "./AllPostsTable.module.css";

export default function AllPostsTable() {
    return (
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
    )
}