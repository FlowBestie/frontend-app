import React from "react";

const Resources = () => {
  const resources = [
    {
      title: "Managing Menstrual Cramps",
      description:
        "Learn how to manage menstrual cramps effectively with these tips.",
      link: "https://www.healthline.com/health/womens-health/menstrual-cramp-remedies",
    },
    {
      title: "Period Tracking Apps",
      description:
        "Discover the best apps to help you track your menstrual cycle.",
      link: "https://www.medicalnewstoday.com/articles/period-tracker",
    },
    {
      title: "Healthy Eating During Periods",
      description:
        "Explore how a balanced diet can alleviate period symptoms.",
      link: "https://www.everydayhealth.com/diet-nutrition/best-foods-to-eat-on-your-period/",
    },
    {
      title: "Yoga for Menstrual Relief",
      description:
        "Find out which yoga poses can help reduce period pain and discomfort.",
      link: "https://www.yogajournal.com/poses/yoga-for-menstrual-cramps",
    },
    {
      title: "Understanding PMS",
      description:
        "Get insights into Premenstrual Syndrome (PMS) and how to manage it.",
      link: "https://www.webmd.com/women/understanding-premenstrual-syndrome-basics",
    },
  ];

  return (
    <div className="max-w-lg mx-auto px-4 py-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Period Resources</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index} className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {resource.title}
            </h2>
            <p className="text-gray-600">{resource.description}</p>
            <a
              href={resource.link}
              className="text-pink-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
