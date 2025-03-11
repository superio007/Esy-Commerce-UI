import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Wayne Romano",
    title: "Product Designer",
    image: "./src/components/AboutPage/assets/Belinda.jpg",
  },
  {
    name: "Jane Doe",
    title: "Marketing Head",
    image: "./src/components/AboutPage/assets/Helen.jpg",
  },
  {
    name: "John Smith",
    title: "Software Engineer",
    image: "./src/components/AboutPage/assets/janet-2.jpg",
  },
  {
    name: "Emily Davis",
    title: "HR Manager",
    image: "./src/components/AboutPage/assets/Stuart.jpg",
  },
  {
    name: "Sarah Johnson",
    title: "UX Designer",
    image: "./src/components/AboutPage/assets/Belinda.jpg",
  },
];

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="p-6 xl:px-16 py-[40px] 3xl:mx-auto 3xl:max-w-screen-xl">
      <div className="flex flex-col text-center gap-4 py-8">
        <h2 className="text-2xl md:text-4xl font-bold">Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          quis beatae maiores?
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
              alt={member.name}
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
              <div>
                <FaLinkedin className="text-4xl text-[#007fff]" />
              </div>
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
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full flex justify-between items-center bg-white bg-opacity-70 text-white p-3">
                  <div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm">{member.title}</p>
                  </div>
                  <div>
                    <FaLinkedin className="text-4xl text-[#007fff]" />
                  </div>
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
