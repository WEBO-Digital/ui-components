import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export interface LineArrayChart {
  dataOne: number;
  dataTwo: number;
  dataThree: number;
  dataFour: number;
  dataFive: number;
}

export interface LineChartProps {
  items: LineArrayChart[];
  color: string;
}

const LineChart: React.FC<LineChartProps> = ({ items, color }) => {
  const labels = ["DataOne", "DataTwo", "DataThree", "DataFour", "DataFive"];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    elements: {
      point: {
        radius: 0, // Remove the circles (data points)
      },
      line: {
        tension: 0, // Optional: Smooth the line
        shadowColor: `${color}`, // Shadow color
        shadowBlur: 10, // Shadow blur radius
        borderWidth: 2, // Line width
      },
    },
  };

  const datasets = items.map((item, index) => ({
    label: `Dataset ${index + 1}`,
    data: [
      item.dataOne,
      item.dataTwo,
      item.dataThree,
      item.dataFour,
      item.dataFive,
    ],
    borderColor: `${color}`,
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  }));

  const data = {
    labels,
    datasets,
    fill: true,
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "rgba(53, 162, 235, 0.5)",
  };

  return (
    <div style={{ width: "500px" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
