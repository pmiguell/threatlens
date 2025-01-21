import style from "./PolarChart.module.css";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function PolarChart() {
  const data = {
    labels: ["Não relevantes", "IoC", "Relevantes", "Keywords"],
    datasets: [
      {
        label: "Quantidade de posts",
        data: [23234, 6926, 3341, 5304],
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
    <div className={style.polarAreaChartContainer}>
      <h2 className={style.description}>Distribuição dos posts</h2>
      <PolarArea data={data} options={options} />
    </div>
  );
}
