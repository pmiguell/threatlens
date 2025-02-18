import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import style from "./PieChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function PieChart() {
  const data = {
    labels: ["Não relevantes", "IoC", "Relevantes", "Keywords"],
    datasets: [
      {
        label: "Quantidade de posts",
        data: [23234, 6926, 200, 5304],
        backgroundColor: [
          "#8BC34A",
          "#FFCF4D",
          "#FF3C38",
          "#3ABEFF"
        ],
        borderColor: [
          "#5A9216",
          "#D4A017",
          "#B22A29",
          "#1C88B0"
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        align: 'center'
      },
    },
  };
  return (
    <div className={style.pieChartContainer}>
      <h2 className={style.description}>Rotulagem dos posts</h2>
      <Pie data={data} options={options} />
    </div>
  );
}
