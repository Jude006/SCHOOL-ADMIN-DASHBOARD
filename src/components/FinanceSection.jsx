import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FinanceSection = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Okafor", class: "10A", status: "Paid", amount: 100, paidAmount: 100 },
    { id: 2, name: "Ngozi Eze", class: "12B", status: "Not Paid", amount: 100, paidAmount: 0 },
    { id: 3, name: "Emeka Obi", class: "9C", status: "Paid", amount: 80, paidAmount: 80 },
    { id: 4, name: "Chinonso Nwankwo", class: "11A", status: "Not Paid", amount: 120, paidAmount: 0 },
    { id: 5, name: "Adebayo Ogunleye", class: "10B", status: "Pending", amount: 90, paidAmount: 30 },
  ]);

  const totalStudents = students.length;
  const totalTeachers = 3;

  const studentsPaid = students.filter((student) => student.paidAmount === student.amount).length;
  const studentsNotPaid = students.filter((student) => student.paidAmount === 0).length;
  const studentsPending = students.filter((student) => student.paidAmount < student.amount).length;

  const totalPendingAmount = students
    .filter((student) => student.paidAmount < student.amount)
    .reduce((acc, student) => acc + (student.amount - student.paidAmount), 0);

  const chartData = {
    labels: ["Paid", "Not Paid", "Pending"],
    datasets: [
      {
        label: "Students",
        data: [studentsPaid, studentsNotPaid, studentsPending],
        backgroundColor: ['#4caf50', '#f44336', '#ff9800'],
      },
    ],
  };

  const studentFinanceDetails = students.map((student) => ({
    name: student.name,
    class: student.class,
    status: student.status,
    amountDue: student.amount,
    amountPaid: student.paidAmount,
    pendingAmount: student.amount - student.paidAmount,
    id: student.id,
  }));

  const handleEditFinance = (id) => {
    console.log(`Edit finance record for student with ID: ${id}`);
  };

  return (
    <div className="finance-section p-6 overflow-hidden  w-full">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Finance Section</h2>

      <div className="stats mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="stat-item p-4 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-xl font-medium">Total Students</h3>
          <p className="text-2xl font-semibold">{totalStudents}</p>
        </div>
        <div className="stat-item p-4 bg-green-100 rounded-lg shadow-md">
          <h3 className="text-xl font-medium">Total Teachers</h3>
          <p className="text-2xl font-semibold">{totalTeachers}</p>
        </div>
      </div>

      <div className="analytics mb-6">
        <div className="chart-container bg-white md:p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Payment Status Analytics</h3>
          <Bar data={chartData} options={{ responsive: true }} />
          <div className="flex justify-between mt-4 text-sm sm:text-lg">
            <div className="text-green-600">Paid: {studentsPaid}</div>
            <div className="text-red-600">Not Paid: {studentsNotPaid}</div>
            <div className="text-orange-600">Pending: {studentsPending}</div>
          </div>
        </div>
      </div>

      <div className="student-finance-records overflow-x-hidden w-full my-8">
        <h3 className="text-2xl font-semibold mb-4">Student Finance Records</h3>
    
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg w-full md:w-auto md:overflow-hidden overflow-x-auto">
            <thead className="bg-gray-100 w-full md:w-auto  md:overflow-hidden overflow-x-hidden">
              <tr className="overflow-x-auto w-full whitespace-nowrap">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Amount Due</th>
                <th className="p-4 text-left">Amount Paid</th>
                <th className="p-4 text-left">Pending Amount</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentFinanceDetails.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.class}</td>
                  <td className="p-4">${student.amountDue}</td>
                  <td className="p-4">${student.amountPaid}</td>
                  <td className="p-4">${student.pendingAmount}</td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => handleEditFinance(student.id)}
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      Edit
                    </button>
                    <button className="text-green-500 hover:text-green-600">
                      Pay $50
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 text-lg font-semibold text-gray-800">
        <p>Total Pending Amount: ${totalPendingAmount}</p>
      </div>
    </div>
  );
};

export default FinanceSection;
