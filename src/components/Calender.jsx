import React, { useState, useEffect } from "react";

// Utility function to generate a calendar for a given month and year
const generateCalendar = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get number of days in month
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Get first day of the month
  const calendar = [];
  
  let currentDay = 1;

  // Fill the first week with empty spaces if the month does not start on Sunday
  let week = new Array(firstDayOfMonth).fill(null);

  // Fill the days of the month into weeks
  while (currentDay <= daysInMonth) {
    week.push(currentDay);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
    currentDay++;
  }

  // Push the last week if it's not complete
  if (week.length) {
    calendar.push(week);
  }

  return calendar;
};

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Current month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Current year
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const generatedCalendar = generateCalendar(selectedYear, selectedMonth);
    setCalendar(generatedCalendar);
  }, [selectedYear, selectedMonth]);

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = [];
  for (let i = 1980; i <= 2028; i++) {
    years.push(i);
  }

  return (
  <section className="md:px-10 px-4 my-16">
      <div className="calendar-container p-6 bg-white shadow rounded">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Calendar</h2>
        <div className="flex gap-4 items-center">
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="p-2 border rounded-md"
          >
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="p-2 border rounded-md"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="calendar-grid md:grid lg:grid-cols-7 grid grid-cols-3 gap-4 border p-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}
        {calendar.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`border p-4 text-center bg-secondary rounded ${day ? "" : "text-transparent bg-white rounded"}`}
              >
                {day}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Calendar;
