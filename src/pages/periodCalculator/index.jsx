import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PeriodCalculator = () => {
  const [userId, setUserId] = useState('');
  const [periodStartDate, setPeriodStartDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [periodLength, setPeriodLength] = useState('');
  const [nextPeriodDate, setNextPeriodDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const calculateNextPeriod = () => {
    if (periodStartDate && cycleLength) {
      const startDate = new Date(periodStartDate);
      const today = new Date();

      // Check if periodStartDate is in the future
      if (startDate > today) {
        toast.error('Period start date cannot be in the future.');
        return;
      }

      const cycle = parseInt(cycleLength, 10);
      const nextDate = new Date(startDate.setDate(startDate.getDate() + cycle));
      setNextPeriodDate(nextDate.toDateString());

      console.log(`User ${userId} has a cycle length of ${cycleLength} days.`);
      setShowModal(true); // Show the modal with the results
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/images/blueleaves.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative z-10 bg-white bg-opacity-90 rounded-lg shadow-lg mx-4 px-16 sm:mx-0 max-w-md w-full mt-24">
        <h2 className="text-3xl font-semibold mb-6 text-center text-pink-400">Period Calculator</h2>
        <p className="text-lg mb-6 text-center text-gray-700">
          Use our period calculator to predict your next period and gain insights into your cycle.
        </p>
        <div className="space-y-4">
          
          <div>
            <label className="block text-gray-700 mb-2">When Did Your Last Period Start?</label>
            <input
              type="date"
              value={periodStartDate}
              onChange={(e) => setPeriodStartDate(e.target.value)}
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
            className="w-full bg-pink-400 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
          >
            Calculate Next Period
          </button>
        </div>
      </div>

      {/* Modal for displaying the result */}
      {showModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold mb-4 text-pink-400">Hey Bestie!</h3>
            <p className="text-lg text-gray-700 mb-4">
              Your next period is expected on: <br />
              <strong>{nextPeriodDate}</strong>
            </p>
            {periodLength && (
              <p className="text-lg text-gray-700">
                and is expected to last for <strong>{periodLength} days</strong>.
              </p>
            )}
            <button
              onClick={closeModal}
              className="mt-6 bg-pink-400 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default PeriodCalculator;
