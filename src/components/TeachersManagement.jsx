import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const teachersData = [
  { image: "https://via.placeholder.com/150", name: "Mr. John Smith", subject: "Mathematics" },
  { image: "https://via.placeholder.com/150", name: "Ms. Jane Doe", subject: "Science" },
  { image: "https://via.placeholder.com/150", name: "Mr. Robert Brown", subject: "History" },
  { image: "https://via.placeholder.com/150", name: "Ms. Sarah Lee", subject: "English" },
  { image: "https://via.placeholder.com/150", name: "Mr. Michael Davis", subject: "Geography" },
  { image: "https://via.placeholder.com/150", name: "Ms. Emma Wilson", subject: "Biology" },
  { image: "https://via.placeholder.com/150", name: "Mr. David Clark", subject: "Chemistry" },
  { image: "https://via.placeholder.com/150", name: "Ms. Olivia Martinez", subject: "Art" },
  { image: "https://via.placeholder.com/150", name: "Mr. James Anderson", subject: "Physics" },
  { image: "https://via.placeholder.com/150", name: "Ms. Emily Taylor", subject: "Music" },
  { image: "https://via.placeholder.com/150", name: "Mr. William Thomas", subject: "Physical Education" },
  { image: "https://via.placeholder.com/150", name: "Ms. Elizabeth Moore", subject: "Literature" },
  { image: "https://via.placeholder.com/150", name: "Mr. Joseph Jackson", subject: "French" },
  { image: "https://via.placeholder.com/150", name: "Ms. Charlotte Harris", subject: "Spanish" },
  { image: "https://via.placeholder.com/150", name: "Mr. Daniel Lewis", subject: "Psychology" },
  { image: "https://via.placeholder.com/150", name: "Ms. Anna Young", subject: "Philosophy" },
  { image: "https://via.placeholder.com/150", name: "Mr. Thomas Hall", subject: "Sociology" },
  { image: "https://via.placeholder.com/150", name: "Ms. Sophie Scott", subject: "Business Studies" },
  { image: "https://via.placeholder.com/150", name: "Mr. Jack King", subject: "Computer Science" },
  { image: "https://via.placeholder.com/150", name: "Ms. Lily Wright", subject: "Economics" },
  { image: "https://via.placeholder.com/150", name: "Mr. Edward Green", subject: "Drama" },
  { image: "https://via.placeholder.com/150", name: "Ms. Grace Adams", subject: "Health Studies" },
  { image: "https://via.placeholder.com/150", name: "Mr. Steven Roberts", subject: "Mathematics" },
  { image: "https://via.placeholder.com/150", name: "Ms. Alice Robinson", subject: "Chemistry" },
  { image: "https://via.placeholder.com/150", name: "Mr. Oliver Walker", subject: "Biology" },
  { image: "https://via.placeholder.com/150", name: "Ms. Mia Turner", subject: "Psychology" },
  { image: "https://via.placeholder.com/150", name: "Mr. Henry Lee", subject: "Literature" },
  { image: "https://via.placeholder.com/150", name: "Ms. Chloe Hill", subject: "Art" },
  { image: "https://via.placeholder.com/150", name: "Mr. Samuel Carter", subject: "Physics" },
  { image: "https://via.placeholder.com/150", name: "Ms. Victoria Adams", subject: "History" },
  { image: "https://via.placeholder.com/150", name: "Mr. Nathaniel White", subject: "Geography" }
];

const TeachersManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const recordsPerPage = 12;
  const filteredTeachers = teachersData.filter(
    teacher =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTeachers = [...filteredTeachers].sort((a, b) => {
    if (sortOrder === "newest") {
      return b.name.localeCompare(a.name);
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const totalPages = Math.ceil(sortedTeachers.length / recordsPerPage);
  const currentTeachers = sortedTeachers.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * recordsPerPage + 1;
  const endIdx = Math.min(startIdx + recordsPerPage - 1, sortedTeachers.length);

  return (
    <div className="teacher-management">
      <div className="flex md:flex-row flex-col gap-2 justify-between items-center mb-4 p-4">
        <input
          type="text"
          placeholder="Search for a teacher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 rounded-full shadow border w-full md:w-1/3"
        />
        <div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-3 border rounded-full shadow ml-4"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <button className="bg-green-500 text-white p-3 rounded-full ml-4">
            Add Teacher
          </button>
        </div>
      </div>

      <div className="text-center mb-4">
        <p>Showing {startIdx}-{endIdx} of {sortedTeachers.length}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentTeachers.map((teacher, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg flex flex-col items-center gap-5 overflow-hidden p-4"
            whileHover={{ scale: 1.05 }}
          >
            <p className="place-self-end"><BsThreeDots /></p>
            <img
              src={teacher.image}
              alt={teacher.name}
              className="rounded-full w-16 h-16 object-cover shadow"
            />
            <div className="flex flex-col gap-1 text-center">
              <h3 className="mt-2 text-xl font-semibold">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.subject}</p>
              <div className="flex items-center gap-2 justify-center">
                <p className="p-2 bg-primary text-secondary rounded-full ">
                  <FaPhoneAlt />
                </p>
                <p className="p-2 bg-primary text-secondary rounded-full ">
                  <FaEnvelope />
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-center mb-4">
          <p>Showing {startIdx}-{endIdx} of {sortedTeachers.length}</p>
        </div>
        <div className="pagination flex justify-center py-4">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`py-2 px-4 mx-2 rounded-full ${
                page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachersManagement;
