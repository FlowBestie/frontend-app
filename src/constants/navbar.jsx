import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/bg-logo.png'; 

const Navbar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-80 w-full px-6 py-4 fixed top-0 left-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-grow text-center">
          <Link to="/">
            <img src={logoImage} alt="Your Logo" className="h-10 w-auto mx-auto transition-transform duration-300 transform hover:scale-110" /> 
          </Link>
        </div>

        {/* Centered Links */}
        <div className="hidden md:flex space-x-6 justify-center flex-grow">
          <Link to="/period-calculator" className="text-white font-semibold hover:text-pink-300 transition duration-300">
            Period Calculator
          </Link>
          <Link to="/period-resources" className="text-white font-semibold hover:text-pink-300 transition duration-300">
            Period Resources
          </Link>
        </div>

        {/* Right-aligned Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/sign-in" className="text-white font-semibold hover:text-pink-300 transition duration-300">
            Sign In
          </Link>
          <Link to="/sign-up" className="text-white font-semibold hover:text-pink-300 transition duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
