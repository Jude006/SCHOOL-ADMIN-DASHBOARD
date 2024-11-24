import React, { useState } from "react";
import { motion } from "framer-motion";



const foodData = [
  {
    name: "Jollof Rice",
    time: "45 minutes",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Pounded Yam and Egusi Soup",
    time: "1 hour",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Suya",
    time: "30 minutes",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Efo Riro",
    time: "50 minutes",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Moi Moi",
    time: "1 hour",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Fried Rice",
    time: "45 minutes",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Pepper Soup",
    time: "40 minutes",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Bitterleaf Soup",
    time: "1 hour",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Akara",
    time: "30 minutes",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ofada Rice",
    time: "45 minutes",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Eba and Egusi",
    time: "1 hour",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Iyan and Vegetable Soup",
    time: "1 hour 10 minutes",
    image: "https://via.placeholder.com/150",
  },
];

const FoodSection = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const filteredFoods = foodData.filter(
    (food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.time.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="food-section p-6 my-10">
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Special Delicacies</h2>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search for a food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border-2 rounded-full w-72 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {filteredFoods.map((food, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800 text-center">{food.name}</h3>
              <p className="text-gray-600 text-center mt-1">{food.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodSection;
