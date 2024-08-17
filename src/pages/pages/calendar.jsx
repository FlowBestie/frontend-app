import React from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const datesArray = Array.from({ length: 30 }, (_, i) => i + 1);

const Calendar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/images/blueleaves.webp')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Calendar Container */}
      <div className="relative z-10 bg-white bg-opacity-90 rounded-lg shadow-lg py-8 px-8 sm:mx-0 max-w-lg w-full mt-24">
        <h2 className="text-3xl font-semibold mb-6 text-center text-pink-400">Your Cycle Calendar</h2>
        
        <div className="grid grid-cols-7 gap-4 text-center text-gray-700">
          {daysOfWeek.map((day) => (
            <div key={day} className="font-semibold">
              {day}
            </div>
          ))}
          {datesArray.map((date) => (
            <div key={date} className="py-4 rounded-lg bg-pink-100 hover:bg-pink-300 text-gray-700 transition duration-300">
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
