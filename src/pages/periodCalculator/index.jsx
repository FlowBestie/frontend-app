import React, { useState } from 'react';

const PeriodCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [periodLength, setPeriodLength] = useState('');
  const [nextPeriodDate, setNextPeriodDate] = useState(null);

  const calculateNextPeriod = () => {
    if (lastPeriodDate && cycleLength) {
      const lastDate = new Date(lastPeriodDate);
      const cycle = parseInt(cycleLength, 10);
      const nextDate = new Date(lastDate.setDate(lastDate.getDate() + cycle));
      setNextPeriodDate(nextDate.toDateString());
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/images/blueleaves.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative z-10 bg-white bg-opacity-90 rounded-lg shadow-lg p-8 mx-4 sm:mx-0 max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">Period Calculator</h2>
        <p className="text-lg mb-6 text-center text-gray-700">
          Use our period calculator to predict your next period and gain insights into your cycle.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Last Period Date:</label>
            <input
              type="date"
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Average Cycle Length (days):</label>
            <input
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 28"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Average Period Length (days):</label>
            <input
              type="number"
              value={periodLength}
              onChange={(e) => setPeriodLength(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 5"
            />
          </div>
          <button
            onClick={calculateNextPeriod}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
          >
            Calculate Next Period
          </button>
          {nextPeriodDate && (
            <div className="mt-4 text-center text-lg text-green-700 font-medium">
              Your next period is expected on: <br />
              <strong>{nextPeriodDate}</strong>
              {periodLength && (
                <div className="mt-2">
                  and is expected to last for <strong>{periodLength} days</strong>.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PeriodCalculator;
