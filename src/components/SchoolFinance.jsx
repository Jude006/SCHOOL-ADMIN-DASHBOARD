import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SchoolFinance = () => {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Income",
        data: [5000, 6000, 7000, 6500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 12000], 
        backgroundColor: "rgba(75, 192, 192, 0.6)", 
      },
      {
        label: "Expenses",
        data: [4000, 4500, 4600, 4700, 5200, 5300, 5400, 5600, 5800, 5900, 6000, 6100],
        backgroundColor: "rgba(255, 99, 132, 0.6)", 
      },
      {
        label: "Savings",
        data: [1000, 1500, 1500, 1800, 2800, 3200, 3600, 3900, 4200, 4600, 5000, 5200], 
        backgroundColor: "rgba(54, 162, 235, 0.6)", 
      },
    ],
  });

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${context.dataset.label}: $${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000, 
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg  my-6">
      <h2 className="text-2xl font-bold mb-6">School Finance Dashboard</h2>

      <div className="w-full h-[400px]">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-6">
        <div className="bg-primary p-4 rounded-lg text-white text-center">
          <h3 className="font-bold">Total Income</h3>
          <p className="text-xl">${data.datasets[0].data.reduce((a, b) => a + b, 0)}</p>
        </div>
        <div className="bg-tertiary p-4 rounded-lg text-white text-center">
          <h3 className="font-bold">Total Expenses</h3>
          <p className="text-xl">${data.datasets[1].data.reduce((a, b) => a + b, 0)}</p>
        </div>
        <div className="bg-green-600 p-4 rounded-lg text-white text-center">
          <h3 className="font-bold">Total Savings</h3>
          <p className="text-xl">${data.datasets[2].data.reduce((a, b) => a + b, 0)}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolFinance;
