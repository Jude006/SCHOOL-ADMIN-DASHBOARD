import React, { useState } from "react";
import { motion } from "framer-motion";


const initialMessages = [
  { id: 1, name: "Jude Orifa", message: "Hey, how are you?", time: "10:15 AM" },
  { id: 2, name: "Mary Ann", message: "Meeting rescheduled to 3 PM.", time: "9:30 AM" },
  { id: 3, name: "Samuel Lee", message: "Can we discuss the project?", time: "8:45 AM" },
  { id: 4, name: "Sarah Jones", message: "Thanks for the update!", time: "8:00 AM" },
  { id: 5, name: "John Smith", message: "Good morning!", time: "7:30 AM" },
  { id: 6, name: "Sophia Brown", message: "Let's connect later today.", time: "7:15 AM" },
 
];

const additionalMessages = [
    { id: 7, name: "Michael White", message: "Approved the changes.", time: "6:45 AM" },
    { id: 8, name: "Emma Green", message: "I'll send the files soon.", time: "6:30 AM" },
  { id: 9, name: "Chris Black", message: "Can we reschedule?", time: "6:00 AM" },
 
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [showMore, setShowMore] = useState(false);

  // Handle View More
  const handleViewMore = () => {
    setMessages([...messages, ...additionalMessages]);
    setShowMore(true);
  };

  return (
    <section className="md:px-6 px-2 py-8 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-primary font-bold"
          >
            Recent Messages
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-light"
          >
            You have {messages.length} messages
          </motion.p>
        </div>
      </div>

      {/* Messages Info */}
      <main className="mt-6 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <img
                src={"https://via.placeholder.com/32"}
                className="w-8 h-8 rounded-full bg-primary shadow"
                alt={message.name}
              />
              <div>
                <p className="font-semibold">{message.name}</p>
                <p className="text-gray-400">{message.message}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">{message.time}</p>
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

export default Messages;
