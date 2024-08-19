import React from 'react';
import GirlyRobot from '../../pages/landing-page/components/girlyRobot'; // Import the GirlyRobot component

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
    <div
      className="min-h-screen py-16 bg-pink-200 text-pink-900"
      style={{ backgroundImage: "url('/src/assets/images/pastel-flowers.webp')" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Girly Robot Greeting */}
        <div><GirlyRobot />

        <h1 className="text-4xl font-extrabold text-center mb-12 py-20">Dashboard</h1>
        </div>
        <nav className="flex justify-center mb-8">
          <a href="#" className="px-20 text-bold text-pink-600 border-b-4 border-pink-600">Your Cycle Results</a>
          {/* <a href="#" className="px-5 py-2 text-lg text-pink-300">Calendar</a> */}
        </nav>

        <div className="bg-white shadow-lg p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-semibold mb-3">Current Cycle Day</h2>
          <p className="text-lg mb-4">Day {cycleData.currentDay}</p>
          <p>Your current cycle started on {cycleData.startDate}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-8 rounded-3xl">
            <h3 className="text-pink-600 text-lg font-semibold mb-3">Next period date</h3>
            <p className="text-4xl font-extrabold">{cycleData.nextPeriodDate}</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-3xl">
            <h3 className="text-pink-600 text-lg font-semibold mb-3">Next period starts in</h3>
            <p className="text-4xl font-extrabold">{cycleData.daysUntilNextPeriod} days</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-3xl">
            <h3 className="text-pink-600 text-lg font-semibold mb-3">Approximate first day of ovulation</h3>
            <p className="text-4xl font-extrabold">{cycleData.nextOvulationDate}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-3xl mt-8">
          <h3 className="text-lg font-semibold text-pink-600 mb-3">Most Fertile Days</h3>
          <p className="text-lg">
            {cycleData.mostFertileDays.join(', ')}
          </p>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={(event) => addToCalendar(cycleData.nextPeriodDate, event)}
            className="bg-pink-600 text-white py-4 px-8 rounded-full font-semibold hover:bg-pink-700 transition"
          >
            Add these dates to your calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
