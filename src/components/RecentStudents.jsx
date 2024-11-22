import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";


const initialStudents = [
  { id: 1, name: "Jude Orifa", class: "Class VII A", image: "" },
  { id: 2, name: "Mary Ann", class: "Class VIII B", image: "" },
  { id: 3, name: "Samuel Lee", class: "Class IX A", image: "" },
  { id: 4, name: "Sarah Jones", class: "Class X C", image: "" },
  { id: 5, name: "John Smith", class: "Class VII B", image: "" },
  { id: 6, name: "Sophia Brown", class: "Class VIII A", image: "" },
  { id: 7, name: "Michael White", class: "Class IX B", image: "" },
  { id: 8, name: "Emma Green", class: "Class X A", image: "" },
];

const additionalStudents = [
  { id: 9, name: "Chris Black", class: "Class VII A", image: "" },
  { id: 10, name: "Jessica Blue", class: "Class VIII B", image: "" },
  { id: 11, name: "Liam Grey", class: "Class IX A", image: "" },
  { id: 12, name: "Isabella Red", class: "Class X C", image: "" },
];

const RecentStudents = () => {
  const [students, setStudents] = useState(initialStudents);
  const [showMore, setShowMore] = useState(false);

 
  const handleViewMore = () => {
    setStudents([...students, ...additionalStudents]);
    setShowMore(true);
  };

  return (
    <section className="md:px-6 px-2 py-8 bg-white">
     
      <div className="flex justify-between items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-primary font-bold"
          >
            Recent Students
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-light"
          >
            You have {students.length} students
          </motion.p>
        </div>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-primary font-bold p-2 rounded-full cursor-pointer"
        >
          <FaPlus className="text-xl text-secondary" />
        </motion.div>
      </div>

     
      <main className="mt-6 space-y-4">
        {students.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <img
                src={student.image || "https://via.placeholder.com/32"}
                className="w-8 h-8 rounded-full bg-primary shadow"
                alt={student.name}
              />
              <div>
                <p className="font-semibold">{student.name}</p>
                <p className="text-gray-400">{student.class}</p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full border-2 cursor-pointer"
            >
              <FaEnvelope />
            </motion.div>
          </motion.div>
        ))}
      </main>


      {!showMore && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleViewMore}
          className="w-full mt-4 bg-primary text-secondary py-2 rounded font-bold"
        >
          View More
        </motion.button>
      )}
    </section>
  );
};

export default RecentStudents;
