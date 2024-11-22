import React from "react";
import { FaBars } from "react-icons/fa6";

const NavBar = ({ sideBar, setSideBar  ,title}) => {
  return (
    <nav className="flex items-center w-full justify-between md:px-10 px-4 py-8">
    
      <div className="md:hidden flex">
        <FaBars onClick={() => setSideBar(!sideBar)} className="text-3xl text-primary cursor-pointer" />
      </div>

      
      <div>
        <h1 className="md:text-3xl text-2xl inset-0 z-10 text-primary font-poppins font-bold cursor-pointer">
          {title}
        </h1>
      </div>

 
      <div className="md:flex hidden">
        <input
          type="text"
          placeholder="Search here..."
          className="py-3 px-8 focus:outline-none font-semibold bg-white rounded-3xl font-poppins"
        />
      </div>
    </nav>
  );
};

export default NavBar;
