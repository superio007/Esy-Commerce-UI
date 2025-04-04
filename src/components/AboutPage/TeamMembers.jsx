import React, { useState ,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";
const TeamSection = ({ heading, TeamMembers, subHeading }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [teamMembers, setteamMembers] = useState([]);
  useEffect(() => {
    const data =
      TeamMembers?.map((item) => ({
        name: item.EmployeeName,
        link: item.LinkedinLink,
        title: item.Position,
        image: item.EmployeeImage.url,
        alt: item.EmployeeImage.alternativeText,
      })) || [];
    setteamMembers(data);
  }, [TeamMembers]);
  return (
    <div className="p-6 xl:px-16 py-[40px] 3xl:mx-auto 3xl:max-w-screen-xl">
      <div className="flex flex-col text-center gap-4 py-8">
        <h2 className="text-2xl md:text-4xl font-bold">
          {heading || "Our Team"}
        </h2>
        <p>
          {subHeading ||
            ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          quis beatae maiores?`}
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-center gap-4 relative">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative h-[650px] rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${
              hoveredIndex === index ? "absolute w-100 z-10" : "w-60"
            }`}
          >
            <img
              src={member.image}
              alt={member.alt}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div
              className={`absolute flex justify-between items-center bottom-0 left-0 w-full bg-white bg-opacity-70 text-white p-3 transition-opacity duration-500 ease-in-out ${
                hoveredIndex === index
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm">{member.title}</p>
              </div>
              <Link to={member.link} target="_blank">
                <FaLinkedin className="text-4xl text-[#007fff]" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Swiper Slider */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          modules={[Pagination]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-70 h-96 rounded-lg overflow-hidden shadow-lg mx-auto">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full flex justify-between items-center bg-white bg-opacity-70 text-white p-3">
                  <div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm">{member.title}</p>
                  </div>
                  <Link to={member.link} target="_blank">
                    <FaLinkedin className="text-4xl text-[#007fff]" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSection;
