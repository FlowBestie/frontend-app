import React from 'react';

const Dashboard = () => {
  const cycleData = {
    currentDay: 9,
    startDate: '4 Aug',
    nextPeriodDate: '2 Sep',
    daysUntilNextPeriod: 20,
    nextOvulationDate: '19 Aug',
    mostFertileDays: ['17 Aug', '18 Aug', '19 Aug'],
  };

  const addToCalendar = (date, event) => {
    event.preventDefault();
    alert(`Adding ${date} to your calendar`);
    // Implement calendar functionality here
  };

  return (
    <div className="min-h-screen bg-black text-white"     style={{ backgroundImage: "url('/src/assets/images/blueleaves.webp')" }}
>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Your Cycle Results</h1>
        <nav className="flex justify-center mb-6">
          <a href="#" className="px-4 py-2 text-lg text-pink-600 border-b-2 border-pink-600">Dashboard</a>
          <a href="#" className="px-4 py-2 text-lg text-gray-400">Calendar</a>
        </nav>

        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Current Cycle Day</h2>
          <p className="text-lg mb-4">Day {cycleData.currentDay}</p>
          <p>Your current cycle started on {cycleData.startDate}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-pink-600 text-lg font-semibold mb-2">Next period date</h3>
            <p className="text-3xl font-bold">{cycleData.nextPeriodDate}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-pink-600 text-lg font-semibold mb-2">Next period starts in</h3>
            <p className="text-3xl font-bold">{cycleData.daysUntilNextPeriod} days</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-pink-600 text-lg font-semibold mb-2">Approximate first day of ovulation</h3>
            <p className="text-3xl font-bold">{cycleData.nextOvulationDate}</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-pink-600 mb-2">Most Fertile Days</h3>
          <p className="text-lg">
            {cycleData.mostFertileDays.join(', ')}
          </p>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={(event) => addToCalendar(cycleData.nextPeriodDate, event)}
            className="bg-pink-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-pink-700 transition"
          >
            Add these dates to your calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
