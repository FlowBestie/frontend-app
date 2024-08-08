import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="flex items-center space-x-2">
            <FaEnvelope />
            <span>email@example.com</span> {/* Replace with your actual email */}
          </p>
          <p className="flex items-center space-x-2">
            <FaPhone />
            <span>+123-456-7890</span> {/* Replace with your actual phone number */}
          </p>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Location</h2>
          <p className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>123 Main St, City, Country</span> {/* Replace with your actual location */}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
