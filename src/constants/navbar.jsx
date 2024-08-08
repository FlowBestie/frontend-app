import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logoImage from '../assets/images/bglogo.png'; // Adjust the path if necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-80 w-full px-6 py-4 fixed top-0 left-0 z-10">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logoImage} alt="Your Logo" className="h-8 w-auto" /> {/* Adjust height and width as needed */}
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 justify-center flex-grow">
          <Link to="/period-calculator" className="text-white hover:text-pink-300">
            Period Calculator
          </Link>
          <Link to="/period-resources" className="text-white hover:text-pink-300">
            Period Resources
          </Link>
        </div>

        {/* Sign In / Sign Up */}
        <div className="hidden md:flex space-x-6">
          <Link to="/sign-in" className="text-white hover:text-pink-300">
            Sign In
          </Link>
          <Link to="/sign-up" className="text-white hover:text-pink-300">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Icon
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
            <Menu className="w-6 h-6" />
          </button>
        </div> */}
      </div>

      {/* Mobile Menu
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 py-4 px-6 flex flex-col space-y-4">
          <Link to="/period-calculator" className="text-white hover:text-pink-300" onClick={toggleMenu}>
            Period Calculator
          </Link>
          <Link to="/period-resources" className="text-white hover:text-pink-300" onClick={toggleMenu}>
            Period Resources
          </Link>
          <Link to="/sign-in" className="text-white hover:text-pink-300" onClick={toggleMenu}>
            Sign In
          </Link>
          <Link to="/sign-up" className="text-white hover:text-pink-300" onClick={toggleMenu}>
            Sign Up
          </Link>
        </div>
      )} */}
    </nav>
  );
}

export default Navbar;
