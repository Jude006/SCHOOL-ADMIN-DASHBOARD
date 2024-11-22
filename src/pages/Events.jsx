import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { motion, AnimatePresence } from "framer-motion";

const Events = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="flex gap-4 bg-secondary">
      {/* Sidebar (sticky for desktop) */}
      <motion.div
      
        className="hidden md:flex w-[300px] sticky top-0 h-screen"
      >
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sideBar && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 bottom-0 left-0 bg-primary w-[300px] shadow-lg"
            >
              <SideBar sideBar={sideBar} setSideBar={setSideBar} />
            </motion.div>
            <div
              onClick={() => setSideBar(false)}
              className="absolute inset-0 bg-black bg-opacity-25 z-30"
            ></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* my main  content */}
      <div className="flex-1">
        <main className="h-[130vh] overflow-y-auto grid grid-cols-12 gap-4">
          <div className="md:col-span-8 col-span-12 shadow bg-white">
            <NavBar sideBar={sideBar} setSideBar={setSideBar} title='Events' />
          </div>
          <div className="md:col-span-4 col-span-12 shadow bg-white"></div>
        </main>
      </div>
    </div>
  );
};

export default Events;
