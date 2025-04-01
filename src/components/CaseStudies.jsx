import React, { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "How Innostax helped Bancstac to optimize Software Development...",
    description:
      "Innostax helped Bancstac to optimize Software Development through AWS, Elastic Search, and MySQL.",
    image: "./src/assets/case1.webp",
    tags: ["AWS", "Elastic Search", "Java", "Jenkins", "MySQL"],
  },
  {
    id: 2,
    title: "How Innostax Streamlined Technique’s Project Management...",
    description:
      "Innostax Streamlined Technique's Project Management and Significantly Enhanced Overall Efficiency through Automation",
    image: "./src/assets/case2.webp",
    tags: ["Azure", "Microsoft Power Automate"],
  },
  {
    id: 3,
    title: "How Innostax Powered a 15% Increase in Travelstart’s Ticket Sales",
    description:
      "Innostax enabled Travelstart to increase ticket sales by 15% through .NET and Angular enhancements.",
    image: "./src/assets/case1.webp",
    tags: [".NET", "Angular", "Java"],
  },
];

const CaseStudiesSection = ({ bgColor }) => {
  return (
    <div style={{ backgroundColor: `${bgColor}` }}>
      <div className="xl:px-12 p-6 3xl:mx-auto 3xl:max-w-screen-xl py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Related Case Studies
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CaseStudyCard = ({ study }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <img
        src={study.image}
        alt={study.title}
        className={`w-full h-56 object-cover transition-opacity ${
          hover ? "opacity-30" : "opacity-100"
        }`}
      />

      {/* Hover Content */}
      <div
        className={`absolute inset-0 bg-white flex flex-col justify-between items-center p-4 transition-opacity ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-lg font-bold">{study.title}</h3>
        <div className="flex flex-row gap-2 w-full">
          {study.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] bg-gray-200 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {study.description}
        </p>
        <button className="bg-[#007fff] rounded-full text-white p-2 w-full">
          <a href="www.google.com" target="_blank" rel="noopener noreferrer">
            View Article
          </a>
        </button>
      </div>

      {/* Title and Tags */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{study.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {study.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] bg-gray-200 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
