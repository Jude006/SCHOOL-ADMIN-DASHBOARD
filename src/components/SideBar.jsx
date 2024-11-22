import React from "react";
import { FaCalendarAlt, FaTimes, FaUserAlt, FaUtensils } from "react-icons/fa";
import { FaDollarSign, FaHouse, FaMessage, FaUser } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ sideBar, setSideBar }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <aside
      className={`fixed md:static top-0 left-0 bottom-0 h-screen bg-primary text-white w-[300px] md:w-full z-50 shadow-lg transform py-4 transition-transform ${
        sideBar ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Close Button for Mobile */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setSideBar(false)}
          className="text-xl bg-gray-200 text-primary rounded-full cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <FaTimes />
        </button>
      </div>

      {/* my content */}
      <div>
        <div className="font-poppins flex items-center gap-4 justify-start px-6">
          <h1 className="py-2 px-3 text-xl text-secondary bg-tertiary shadow rounded-lg inline-block font-extrabold ">
            JT
          </h1>
          <h2 className="text-2xl text-secondary font-bold items-center flex">
            Jodna<span className="text-tertiary">Tech</span>
          </h2>
        </div>
        {/* links */}
        <div className="py-6  pl-5">
          <ul className="flex flex-col gap-3">
            <li
              className={`py-3 text-xl px-6 rounded-l-3xl font-semibold ${
                isActive("/") ? "bg-secondary text-primary" : "text-secondary"
              }`}
            >
              <Link to="/" className="flex items-center gap-2 hover:text-tertiary hover:duration-300 hover:ease-linear">
                <FaHouse /> Dashboard
              </Link>
            </li>
            <li
              className={`py-3 text-xl px-6 rounded-l-3xl font-semibold ${
                isActive("/students")
                  ? "bg-secondary text-primary"
                  : "text-secondary"
              }`}
            >
              <Link to="/students" className="flex items-center gap-2 hover:text-tertiary hover:duration-300 hover:ease-linear">
                <FaUserAlt /> Students
              </Link>
            </li>
            <li
              className={`py-3 text-xl px-6 rounded-l-3xl font-semibold ${
                isActive("/teachers")
                  ? "bg-secondary text-primary"
                  : "text-secondary"
              }`}
            >
              <Link to="/teachers" className="flex items-center gap-2 hover:text-tertiary hover:duration-300 hover:ease-linear">
                <FaUserAlt /> Teachers
              </Link>
            </li>
            <li
              className={`py-3 text-xl px-6 rounded-l-3xl font-semibold ${
                isActive("/events")
                  ? "bg-secondary text-primary"
                  : "text-secondary"
              }`}
            >
              <Link to="/events" className="flex items-center gap-2 hover:text-tertiary hover:duration-300 hover:ease-linear">
                <FaCalendarAlt /> Events
              </Link>
            </li>
            <li
              className={`py-3 text-xl px-6 rounded-l-3xl font-semibold ${
                isActive("/money")
                  ? "bg-secondary text-primary"
                  : "text-secondary"
              }`}
            >
              <Link to="/finance" className="flex items-center gap-2 hover:text-tertiary hover:duration-300 hover:ease-linear">
                <FaDollarSign /> Finance
              </Link>
            </li>
            <li
              className={`py-3 text-xl px-6 rounded-l-3xl font-semibold ${
                isActive("/food")
                  ? "bg-secondary text-primary"
                  : "text-secondary"
              }`}
            >
              <Link to="/food" className="flex items-center gap-2 hover:text-tertiary hover:duration-300 hover:ease-linear">
                <FaUtensils /> Food
              </Link>
            </li>
            <li
              className={`py-3 text-xl px-6 rounded-l-3xl font-semibold ${
                isActive("/user")
                  ? "bg-secondary text-primary"
                  : "text-secondary"
              }`}
            >
              <Link to="/user" className="flex items-center gap-2 hover:text-tertiary hover:duration-300 hover:ease-linear">
                <FaUser /> User
              </Link>
            </li>
            <li
              className={`py-3 text-xl px-6 rounded-l-3xl font-semibold ${
                isActive("/chat")
                  ? "bg-secondary text-primary"
                  : "text-secondary"
              }`}
            >
              <Link to="/chat" className="flex items-center gap-2 hover:text-tertiary hover:duration-300 hover:ease-linear">
                <FaMessage /> Chat
              </Link>
            </li>
            <li
              className={`py-3 text-xl px-6 rounded-l-3xl font-semibold ${
                isActive("/activities")
                  ? "bg-secondary text-primary"
                  : "text-secondary"
              }`}
            >
              <Link to="/activities" className="flex items-center gap-2 hover:text-tertiary hover:duration-300 hover:ease-linear">
                <FiActivity /> Latest Activities
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
