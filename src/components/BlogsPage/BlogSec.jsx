import BlogCards from "./BlogCards2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/dateConvert";
import { slugify } from "../../utils/modifyUrl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogsSection = ({ BlogsData }) => {
  const navigate = useNavigate();

  function truncateText(text, limit = 100) {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  }

  return (
    <div id="blogs" className="xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl pt-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        breakpoints={{
          300: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="py-8"
      >
        {BlogsData.map((study, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 h-full flex flex-col">
              {/* Image */}
              <div className="relative">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="w-max h-56 md:object-cover transition-opacity group-hover:opacity-30"
                />
                <div className="absolute top-0 left-0 bg-[#007fff] text-white px-2 py-1">
                  {formatDate(study.PublicDate)}
                </div>
              </div>

              {/* Hover Overlay */}
              <div
                onClick={() => navigate(`/blogs/${slugify(study.title)}`)}
                className="absolute inset-0 bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10"
              >
                <h3 className="text-lg font-bold text-center">
                  <Link to={`/blogs/${slugify(study.title)}`}>
                    {study.title}
                  </Link>
                </h3>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {study.tags.slice(0, 9).map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] bg-gray-200 p-2 rounded-md px-4"
                    >
                      {tag.Tags}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 text-center mt-2">
                  {truncateText(study.description)}
                </p>
                <button className="bg-[#007fff] rounded-full text-white p-2 w-full mt-4">
                  View Article
                </button>
              </div>

              {/* Static Content */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold">{study.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {study.tags.slice(0, 9).map((tag, index) => (
                      <span
                        key={index}
                        className="text-[10px] bg-gray-200 p-2 rounded-md px-4"
                      >
                        {tag.Tags}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogsSection;
