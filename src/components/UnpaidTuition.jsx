import React, { useState } from "react";
import studentData from "../data/data1.json"; 
import { FaEllipsisH } from "react-icons/fa"; 

const UnpaidTuition = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10);


  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentData.slice(indexOfFirstStudent, indexOfLastStudent);


  const totalPages = Math.ceil(studentData.length / studentsPerPage);


  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg no-scrollbar">
      <h2 className="text-2xl font-bold mb-6">Unpaid Tuition Fees</h2>

  
      <div className="overflow-auto no-scrollbar" style={{ maxHeight: "70vh" }}>
        {currentStudents.map((student) => (
          <div key={student.id} className="flex justify-between items-center py-3 border-b last:border-b-0 w-full"  >
         
            <div className="flex items-center text-sm w-full space-x-6">
              
        
              <div className="bg-tertiary text-white rounded-full text-xs px-3 py-1 font-bold">
                JT
              </div>
              
    
              <p className="text-gray-800">{student.name}</p>
           
              <div className="bg-tertiary text-white rounded-full text-xs px-3 py-1 font-bold">
                JT
              </div>
              
        
              <p className="text-gray-600">{student.class}</p>
              
            
              <div className="bg-tertiary text-white rounded-full text-xs px-3 py-1 font-bold">
                JT
              </div>
              
              {/* Amount Owing */}
              <p className="text-red-500 font-semibold">${student.amountOwing}</p>
            </div>
            
            {/* Three-dot icon for "View Details" */}
            <FaEllipsisH className="text-gray-600 cursor-pointer hover:text-primary" />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`py-2 px-4 mx-2 rounded-full ${currentPage === index + 1 ? "bg-gray-300 cursor-not-allowed" : "bg-primary text-white"}`}
            onClick={() => handlePageClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnpaidTuition;
