import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/dateConvert";
import { slugify } from "../../utils/modifyUrl";
const BlogCards = ({ study }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  function truncateText(text, limit = 30) {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  }
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
          alt={study.imageAlt}
          className={`w-full h-56 object-fill transition-opacity ${
            hover ? "opacity-30" : "opacity-100"
          }`}
        />

        {/* Date  */}
        <div className="absolute top-0 left-0 bg-[#007fff] text-white px-2 py-1">
          {formatDate(study.PublicDate)}
        </div>

        {/* Hover Content */}
        <div
          onClick={() => navigate(`/blogs/${slugify(study.title)}`)}
          className={`absolute inset-0 bg-white flex flex-col justify-between items-center p-4 transition-opacity ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-lg font-bold">
            <Link to={`/blogs/${slugify(study.title)}`}>
              {study.title}
            </Link>
          </h3>
          <div className="relative w-full">
            <div className="flex flex-wrap gap-2 mt-2">
              {study.tags.slice(0, 9).map((tag, index) => (
                <span
                  key={index}
                  className="text-[10px] bg-gray-200 p-2 rounded-md min-w-fit px-4 snap-start"
                >
                  {tag.Tags}
                </span>
              ))}
            </div>
          </div>

          <p className="text-lg font-semibold text-gray-700">
            {truncateText(study.description, 100)}
          </p>
          <button className="bg-[#007fff] rounded-full text-white p-2 w-full">
            <Link to={`/blogs/${slugify(study.title)}`}>
              View Article
            </Link>
          </button>
        </div>

        {/* Title and Tags */}
        <div className="p-4">
          <h3 className="text-lg font-bold">{study.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {study.tags.slice(0, 9).map((tag, index) => (
              <span
                key={index}
                className="text-[10px] bg-gray-200 p-2 rounded-md min-w-fit px-4 snap-start"
              >
                {tag.Tags}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCards;
