import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import style from "./style.module.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function DoughnutChart() {
  const data = {
    labels: ["Baixa Relevância", "Média Relevância", "Alta Relevância"],
    datasets: [
      {
        label: "Quantidade de posts",
        data: [23234, 6926, 5504],
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
