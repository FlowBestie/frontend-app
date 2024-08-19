import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        backgroundImage: "url('/src/assets/images/twohands.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Main Content */}
      <div className="bg-black bg-opacity-60 w-full flex-grow flex flex-col items-center justify-center px-8 md:px-12">
        <div className="text-center">
          <h3 className="text-2xl md:text-6xl mb-4 leading-tight py-36">
            Talk Periods To Us!
          </h3>
          <p className="text-lg md:text-xl mb-6">
            Hey Bestie!<br /> Stay on top of your cycle with our easy-to-use period tracker. <br /> 
            Plan ahead and take control of your health.
          </p>

          <div className="flex justify-center mb-8">
            <Link to="/sign-up" className="bg-gray-800 hover:bg-pink-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              Get Started
            </Link>
          </div>


          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-2xl mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Track your cycle accurately with our intuitive calendar.</li>
              <li>Receive reminders and notifications to stay informed.</li>
              <li>Access detailed insights and historical data.</li>
              <li>Determine when next you will ovulate.</li>
              <li>Determine your most fertile days.</li>
              <li>Access detailed information on menstruation.</li>
              <li>Access detailed on how to prep for your period.</li>
              <li>Access your personalized dashboard.</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
