import {useState, useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "HOLDEN CAULFIELD",
      role: "Senior Product Designer",
      image: "https://dummyimage.com/302x302",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "ALPER KAMU",
      role: "UI Developer",
      image: "https://dummyimage.com/302x302",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "HENRY LETHAM",
      role: "CTO",
      image: "https://dummyimage.com/302x302",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "HOLDEN CAULFIELD",
      role: "Senior Product Designer",
      image: "https://dummyimage.com/302x302",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "ALPER KAMU",
      role: "UI Developer",
      image: "https://dummyimage.com/302x302",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "HENRY LETHAM",
      role: "CTO",
      image: "https://dummyimage.com/302x302",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
  ];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Animation starts when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      id="testimonials"
      className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl"
      ref={sectionRef}
    >
      <div className="md:px-5 pt-24 pb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          //   loop={true}
          //   autoplay={{ delay: 3000 }}
          // navigation
          pagination={{ clickable: true }}
          breakpoints={{
            769: { slidesPerView: 2 }, // Below 769px → 1 slide
            1280: { slidesPerView: 2 }, // Below 1280px but above 769px → 2 slides
            1281: { slidesPerView: 3 }, // 1280px and above → 3 slides
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="h-full text-center p-4">
                <div className="flex items-center justify-center">
                  <div style={{ width: "max-content", position: "relative" }}>
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={testimonial.image}
                    />
                    <svg
                      style={{
                        position: "absolute",
                        right: "0px",
                        bottom: "8px",
                        width: "2rem",
                        transform: isVisible
                          ? "translate(0%, -50%)"
                          : "translate(300%, -50%)", // Starts far right, moves to image
                        transition: "transform 1s ease-in-out",
                      }}
                      className={`quote-icon ${isVisible ? "animate" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9ca3af"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                  </div>
                </div>

                <p className="leading-relaxed">{testimonial.text}</p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
