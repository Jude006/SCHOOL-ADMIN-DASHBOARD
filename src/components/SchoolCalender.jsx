import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
} from "date-fns";

const SchoolCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

 
  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Generate calendar grid
  const renderCalendar = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const currentDay = day; 
        days.push(
          <div
            key={currentDay}
            className={`text-center py-3 cursor-pointer rounded-lg ${
              format(currentDay, "yyyy-MM-dd") ===
              format(selectedDate, "yyyy-MM-dd")
                ? "bg-secondary text-primary font-bold"
                : format(currentDay, "MM") !== format(currentMonth, "MM")
                ? "text-gray-400"
                : "text-black"
            }`}
            onClick={() => handleDateClick(currentDay)}
          >
            {format(currentDay, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day} className="grid grid-cols-7 gap-2">
          {days}
        </div>
      );
      days = [];
    }

    return rows;
  };

  return (
    <section className="bg-white p-6 shadow-lg rounded-lg">
      <header className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          className="bg-primary text-white py-2 px-4 rounded-lg"
        >
          Previous
        </button>
        <h2 className="md:text-2xl text-lg font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-primary text-white py-2 px-4 rounded-lg"
        >
          Next
        </button>
      </header>

    
      <div className="grid grid-cols-7 text-center font-bold text-gray-500 mb-2">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div>{renderCalendar()}</div>

    
      {selectedDate && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-bold text-primary">
            Selected Date: {format(selectedDate, "EEEE, MMMM d, yyyy")}
          </h3>
          <p className="text-sm text-primary md:text-lg">
           School calender
          </p>
        </div>
      )}
    </section>
  );
};

export default SchoolCalendar;
