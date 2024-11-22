import React from "react";
import { FaBell, FaCircle, FaCog } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center  px-6 py-4 shadow-md">
      <div className="flex items-center space-x-4 relative">
        <FaBell className="text-gray-600 hover:text-tertiary text-3xl hover:duration-300 ease-linear  cursor-pointer" />
        <FaCircle  className="text-[8px] text-primary absolute -top-2 left-1" />
      </div>
      <div>
      <FaCog className="text-gray-600 hover:text-tertiary hover:duration-300 ease-linear text-3xl  cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4">
       
        <div className="text-primary">
          <h4 className="font-bold">Jude</h4>
          <p className="text-sm ">Admin</p>
        </div>
        <img
          src="/admin.jpg"
          alt="Admin"
          className="w-10 h-10 rounded-full object-cover border-2 border-primary"
        />
      </div>
    </div>
  );
};

export default Header;
