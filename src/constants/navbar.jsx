import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/flowBestie.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 bg-opacity-80 w-full px-6 py-4 fixed top-0 left-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logoImage} alt="Your Logo" className="h-16 w-auto transition-transform duration-300 transform hover:scale-110" />
          </Link>
        </div>

        {/* Centered Links */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex space-x-8 pl-16">
            <Link to="/period-calculator" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Period Calculator
            </Link>
            <Link to="/period-resources" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Resources
            </Link>
            <Link to="/about" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              About Us
            </Link>
            <Link to="/dashboard" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Dashboard
            </Link>
          </div>
        </div>

        {/* Right-aligned Links */}
        <div className="hidden md:flex flex-shrink-0 space-x-6">
          <Link to="/sign-in" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
            Sign In
          </Link>
          <Link to="/sign-up" className="text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/period-calculator" className="block text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Period Calculator
            </Link>
            <Link to="/period-resources" className="block text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Resources
            </Link>
            <Link to="/about" className="block text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              About Us
            </Link>
            <Link to="/dashboard" className="block text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Dashboard
            </Link>
            <Link to="/sign-in" className="block text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Sign In
            </Link>
            <Link to="/sign-up" className="block text-white font-semibold text-lg hover:text-pink-300 transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;