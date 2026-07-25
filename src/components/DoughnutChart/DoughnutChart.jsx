import style from "./DoughnutChart.module.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function DoughnutChart({ low = 0, medium = 0, high = 0 }) {
  const data = {
    labels: ["Baixa Relevância", "Média Relevância", "Alta Relevância"],
    datasets: [
      {
        label: "Quantidade de posts",
        data: [low, medium, high],
        backgroundColor: [
          "#8BC34A",
          "#FFCF4D",
          "#FF3C38"
        ],
        borderColor: [
          "#5A9216",
          "#D4A017",
          "#B22A29"
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
    <div className={style.doughnutChartContainer}>
      <h2 className={style.description}>Rotulagem dos posts por Relevância</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
}
