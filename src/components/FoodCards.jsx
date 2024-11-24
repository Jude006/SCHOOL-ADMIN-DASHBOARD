import React from "react";
import { motion } from "framer-motion";


const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh tomatoes and basil.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description: "Creamy pasta with pancetta and parmesan cheese.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Sushi Platter",
    description: "Fresh sushi rolls with a variety of fillings.",
    image: "https://via.placeholder.com/150",
  },
 
 
 
];

const FoodCards = () => {
  return (
    <section className="md:px-6 px-2 py-14 bg-white">
      
      <div className="mb-6">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-primary font-bold"
        >
          Current Food Menu
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm font-light"
        >
          Explore our delicious menu
        </motion.p>
      </div>

      {/* Food Cards */}
      <main className="flex flex-col  gap-3">
        {foodItems.map((food, index) => (
          <motion.div
            key={food.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-32 object-cover"
            />
            <div className="py-2 px-4">
              <p className="font-semibold text-lg">{food.name}</p>
              <p className="text-gray-500 text-sm mt-2">{food.description}</p>
            </div>
          </motion.div>
        ))}
      </main>
    </section>
  );
};

export default FoodCards;
