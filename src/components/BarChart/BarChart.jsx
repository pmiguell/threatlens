import style from "./BarChart.module.css"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ sources = [], label = "" }) {
  const data = {
    labels: sources.map((s) => s.sourceName),
    datasets: [
      {
        label: "Posts coletados",
        data: sources.map((s) => s.postCount),
        backgroundColor: "#6558FF",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={style.barChartContainer}>
      <h2 className={style.description}>Principais fontes de CTI{label ? ` (${label})` : ""}</h2>
      <Bar data={data} options={options} />
    </div>
  );
};