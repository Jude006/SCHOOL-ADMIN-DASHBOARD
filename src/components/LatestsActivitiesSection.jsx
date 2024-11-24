import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { FaRegCalendarAlt, FaRegBell } from "react-icons/fa";
import { motion } from "framer-motion";
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const LatestsActivitiesSection = () => {
  const [selectedActivityType, setSelectedActivityType] = useState("All");

  const activityChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Attendance Rate (%)",
        data: [80, 85, 90, 92, 87, 89],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  const activityChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "nearest",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const activities = [
    { type: "Event", title: "School Annual Sports Day", date: "2024-11-20", description: "The sports day for all students." },
    { type: "Meeting", title: "Faculty Meeting", date: "2024-11-18", description: "Monthly meeting for faculty members." },
    { type: "Event", title: "School Music Concert", date: "2024-11-15", description: "A musical event showcasing student talent." },
    { type: "Reminder", title: "Parent-Teacher Conference", date: "2024-11-10", description: "Conference for parents and teachers to discuss student progress." },
    { type: "Event", title: "Field Trip to National Park", date: "2024-11-05", description: "Class trip to explore wildlife." },
  ];

  const filteredActivities = activities.filter((activity) => {
    return selectedActivityType === "All" || activity.type === selectedActivityType;
  });

  return (
    <div className="latest-activities-section md:px-16 px-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Latest Activities</h2>
        <div className="flex gap-4 items-center">
          <select
            className="p-3 border-2 rounded-full shadow-md"
            onChange={(e) => setSelectedActivityType(e.target.value)}
            value={selectedActivityType}
          >
            <option value="All">All Activities</option>
            <option value="Event">Events</option>
            <option value="Meeting">Meetings</option>
            <option value="Reminder">Reminders</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Activity Attendance Trend</h3>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-lg p-6">
          <Line data={activityChartData} options={activityChartOptions} />
        </motion.div>
      </div>

      <div className="activity-feed space-y-4 overflow-hidden">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg flex p-4 space-x-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center bg-primary text-white w-12 h-12 rounded-full">
                {activity.type === "Event" ? <FaRegCalendarAlt size={24} /> : <FaRegBell size={24} />}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-800">{activity.title}</h4>
                <p className="text-gray-600">{activity.date}</p>
                <p className="text-gray-500 text-sm mt-2">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestsActivitiesSection;
