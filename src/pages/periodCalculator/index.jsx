import React from 'react';

const PeriodCalculator = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-3xl font-semibold mb-6">Period Calculator</h2>
      <p className="text-lg max-w-2xl mx-auto">
        Use our period calculator to predict your next period and gain insights into your cycle.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-semibold mt-4">
        Calculate Now
      </button>
    </section>
  );
}

export default PeriodCalculator;
