import React, { useState } from "react";
import { FaSearch, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

const students = [
  { name: "Jude", id: "#9840321", date: "March 25, 2024", parent: "Ashfaq Ahmad", city: "Tibba", grade: "VII A", gradeColor: "bg-orange-400" },
  { name: "Savilla", id: "#9876322", date: "March 26, 2024", parent: "Ali Khan", city: "Lahore", grade: "VII B", gradeColor: "bg-yellow-400" },
  { name: "James", id: "#9876523", date: "March 27, 2024", parent: "Noor Ahmed", city: "Karachi", grade: "VII C", gradeColor: "bg-purple-500" },
  { name: "Rush", id: "#9876544", date: "March 28, 2024", parent: "Fatima Begum", city: "Islamabad", grade: "VII B", gradeColor: "bg-yellow-400" },
  { name: "Sam", id: "#9876545", date: "March 29, 2024", parent: "Ahmed Sheikh", city: "Multan", grade: "VII A", gradeColor: "bg-orange-400" },
  { name: "Dorcas", id: "#9876526", date: "March 30, 2024", parent: "Khalid Ansari", city: "Rawalpindi", grade: "VII C", gradeColor: "bg-purple-500" },
  { name: "Zara", id: "#9876527", date: "March 31, 2024", parent: "Sara Khan", city: "Karachi", grade: "VII A", gradeColor: "bg-orange-400" },
  { name: "Ali", id: "#9876528", date: "April 1, 2024", parent: "Ali Khan", city: "Lahore", grade: "VII B", gradeColor: "bg-yellow-400" },
  { name: "Tariq", id: "#9876529", date: "April 2, 2024", parent: "Tariq Ali", city: "Rawalpindi", grade: "VII C", gradeColor: "bg-purple-500" },
  { name: "Sarah", id: "#9876530", date: "April 3, 2024", parent: "Sarah Khan", city: "Islamabad", grade: "VII A", gradeColor: "bg-orange-400" },
  { name: "Hassan", id: "#9876531", date: "April 4, 2024", parent: "Hassan Khan", city: "Lahore", grade: "VII B", gradeColor: "bg-yellow-400" },
  { name: "Imran", id: "#9876532", date: "April 5, 2024", parent: "Imran Ali", city: "Karachi", grade: "VII C", gradeColor: "bg-purple-500" },
  { name: "Nashit", id: "#9876533", date: "April 6, 2024", parent: "Nashit Khan", city: "Islamabad", grade: "VII A", gradeColor: "bg-orange-400" },
  { name: "Ayesha", id: "#9876534", date: "April 7, 2024", parent: "Ayesha Ali", city: "Multan", grade: "VII B", gradeColor: "bg-yellow-400" },
  { name: "Bilal", id: "#9876535", date: "April 8, 2024", parent: "Bilal Ahmed", city: "Rawalpindi", grade: "VII C", gradeColor: "bg-purple-500" },
];

const StudentManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest");
  const recordsPerPage = 10;

  const filteredStudents = students
    .filter((student) => student.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

  const totalPages = Math.ceil(filteredStudents.length / recordsPerPage);

  const currentStudents = filteredStudents.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const paginationRange = [];
  const maxPagesToShow = 4;
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    paginationRange.push(i);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCheckboxClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  return (
    <div>
      <header className="flex items-center  justify-between w-full md:px-6 px-4 py-4">
        <div className="relative flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between space-x-4 w-full ">
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-3 md:px-14 px-8 rounded-full shadow bg-white max-w-[300px] text-primary flex-1"
          />
          <FaSearch className="absolute top-4 left-6 text-primary text-lg md:flex hidden" />
         <div className="flex gap-6 items-center">
         <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="py-3 px-4 bg-white rounded-full shadow ml-4 md:w-fit w-[300px]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <button className="flex items-center gap-1 py-3 px-6 bg-primary text-white shadow rounded-full"><FaPlus /> New Students</button>
         </div>
        </div>
      </header>

      <div className="bg-white px-4 md:px-8 py-16 my-10 rounded-lg shadow-lg w-full md:w-auto md:overflow-hidden overflow-x-auto text-nowrap whitespace-nowrap">
        <h2 className="text-2xl font-bold mb-4 w-full md:w-auto md:overflow-hidden overflow-x-auto ">Students</h2>
        <div className="overflow-x-auto">
          <div className="w-full md:min-w-full">
            <div className="grid grid-cols-2 md:grid-cols-8 gap-16 text-gray-500 whitespace-nowrap text-nowrap font-bold text-sm py-2 border-b border-gray-200">
              <span>Name</span>
              <span>ID</span>
              <span>Date</span>
              <span>Parent Name</span>
              <span>City</span>
              <span>Contact</span>
              <span>Grade</span>
            </div>
            <div>
              {currentStudents.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`grid grid-cols-2 md:grid-cols-8 items-center py-4 border-b gap-16 whitespace-nowrap text-nowrap border-gray-100 last:border-b-0 ${selectedRow === index ? "border-l-4 border-blue-500" : ""}`}
                >
                  <div className="flex items-center space-x-4 text-sm">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      onChange={() => handleCheckboxClick(index)} // Fixed to onChange
                      checked={selectedRow === index}
                    />
                    <img
                      src="https://via.placeholder.com/50"
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <span className="text-gray-800 font-medium">{student.name}</span>
                  <span className="text-gray-600">{student.id}</span>
                  <span className="text-gray-600">{student.date}</span>
                  <span className="text-gray-600">{student.parent}</span>
                  <span className="text-gray-600">{student.city}</span>
                  <div className="flex space-x-4 text-gray-600">
                    <FaPhoneAlt className="cursor-pointer hover:text-blue-500" />
                    <FaEnvelope className="cursor-pointer hover:text-blue-500" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-white ${student.gradeColor}`}>{student.grade}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between items-center py-4">
              <div className="text-sm">
                Showing {currentPage * recordsPerPage - recordsPerPage + 1} to{" "}
                {Math.min(currentPage * recordsPerPage, filteredStudents.length)} of {filteredStudents.length} entries
              </div>
              <div className="flex space-x-4 text-sm">
                {paginationRange.map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`py-2 px-4 rounded-full hover:bg-primary hover:text-white ${
                      page === currentPage ? "bg-primary text-white" : "text-gray-600"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
