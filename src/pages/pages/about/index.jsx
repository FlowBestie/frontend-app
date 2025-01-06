import React from 'react';
import { FaRegHeart, FaRegLightbulb, FaRegUser } from 'react-icons/fa';
import backgroundImage from '../../../assets/images/blueleaves.webp';

const About = () => {
  return (
    <section className="text-center py-32 px-4 lg:px-8"
    style={{ backgroundImage: `url(${backgroundImage})` }}
>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-pink-600">About Us</h2>
        
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Welcome to <span className="font-semibold text-pink-600">flowBestie</span>, your trusted companion in period management. <br /> Our app is designed to empower you with the tools and insights you need to understand your menstrual health better.
        </p>
        
        <div className="flex flex-col md:flex-row justify-around items-center mb-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
            <FaRegHeart className="text-6xl text-pink-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              Our mission is to break the stigma around menstrual health and provide comprehensive tools for tracking and managing your cycle.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
            <FaRegLightbulb className="text-6xl text-pink-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>
              We envision a world where menstrual health is openly discussed and understood, and we aim to support that through innovative technology.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <FaRegUser className="text-6xl text-pink-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p>
              Our diverse team is passionate about women's health and technology, committed to making period tracking accessible for everyone.
            </p>
          </div>
        </div>

        <div className="py-8 px-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-pink-600">Our Achievements</h3>
          <p className="mb-4">With over 1 million downloads and a 4.8-star rating, flowBestie is trusted by users worldwide.</p>
          <p>Join us and become part of a community that values health, support, and empowerment.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
