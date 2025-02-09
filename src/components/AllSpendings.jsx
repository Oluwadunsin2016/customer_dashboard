import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const AllSpendings = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Holds the Chart.js instance

  useEffect(() => {
    return () => {
      // Destroy the previous chart instance to prevent conflicts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ["Workspace", "Employee Salary", "Shopping"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28"],
        hoverOffset: 4,
        cutout: "60%", // Adjust thickness
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1.5,
  };

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <h2 className="text-lg font-semibold">All Spending</h2>
      <Doughnut
        ref={(el) => {
          chartRef.current = el?.chartInstance;
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }
          chartInstance.current = chartRef.current;
        }}
        data={data}
        options={options}
      />
    </div>
  );
};

export default AllSpendings;
