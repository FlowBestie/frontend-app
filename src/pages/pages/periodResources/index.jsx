import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PeriodResources = () => {
  const resources = [
    {
      title: "Menstrual Health & Hygiene",
      description: "Learn about menstrual health, hygiene practices, and how to manage your period effectively.",
      link: "https://www.unicef.org/stories/menstrual-hygiene-day-28-may-2023",
    },
    {
      title: "Understanding Your Menstrual Cycle",
      description: "A comprehensive guide to understanding the phases of your menstrual cycle.",
      link: "https://www.plannedparenthood.org/learn/health-and-wellness/menstrual-cycle",
    },
    {
      title: "Period Myths & Facts",
      description: "Debunk common myths and learn the facts about menstruation.",
      link: "https://www.womenshealth.gov/menstrual-cycle/menstruation",
    },
    {
      title: "Sustainable Period Products",
      description: "Explore eco-friendly and sustainable period products, such as menstrual cups and reusable pads.",
      link: "https://www.wellandgood.com/sustainable-period-products/",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-gray-900"
    style={{ backgroundImage: "url('/src/assets/images/blueleaves.webp')" }}

    >
      <div className="max-w-4xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Resources</h2>
        <p className="text-lg text-center mb-12">
          Explore these resources to learn more about menstrual health, track your cycle, and make informed choices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-700 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                Visit Resource <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PeriodResources;
