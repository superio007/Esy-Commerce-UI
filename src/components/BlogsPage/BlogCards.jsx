import { React, useState } from "react";
import { Link } from "react-router-dom";
const BlogCards = ({ study }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
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
            <Link to={`/blogs/${study.title.split(" ").join("-")}`}>
              View Article
            </Link>
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
    </>
  );
};
export default BlogCards;
