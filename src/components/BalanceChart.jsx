
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { Card } from "@heroui/react";
import { useEffect, useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BalanceChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const balanceOverviewData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Total Income",
        data: [20000, 25000, 22000, 27000, 30000, 28000, 35000],
        borderColor: "#0088FE",
        backgroundColor: "rgba(0, 136, 254, 0.2)",
        tension:0.4,
        fill: true,
      },
      {
        label: "Total Spending",
        data: [15000, 18000, 17000, 19000, 21000, 20000, 23000],
        borderColor: "#FF0000",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        tension:0.4,
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
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-8">
      <h2 className="text-xl font-semibold mb-4">Balance Overview</h2>
      <Line  ref={chartRef} data={balanceOverviewData} options={options} />
    </div>
  );
};

export default BalanceChart;
