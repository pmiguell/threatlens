import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import style from "./style.module.css"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ["DarkForum", "DeepHTTP", "NoIP Forum", "SafeSearch", "WebFAQ"],
    datasets: [
      {
        label: "Posts coletados",
        data: [22389, 16902, 4211, 1579, 1355],
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
      <h2 className={style.description}>Principais fontes de CTI (24h)</h2>
      <Bar data={data} options={options} />
    </div>
  );
};