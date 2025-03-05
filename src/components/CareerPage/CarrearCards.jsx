import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/CarrearCards.css";

const volunteerData = [
  {
    Id: 1,
    type: "volunteer",
    urgency: "None",
    title: "Pack and Distribute Food",
    organization: "The Salvation Army of Greater New York",
    date: "Thu Mar 6 2025",
    time: "10AM - 1PM",
    location: "Brooklyn",
    description:
      "Pack and distribute food to clients, who bring their bags and carts or help clients. Also, assist in unwrapping food in the food pantry.",
  },
  {
    Id: 2,
    type: "volunteer",
    urgency: "Urgent",
    title: "Distribute Farm Fresh Grocery Boxes",
    organization: "The Connected Chef",
    date: "Thu Mar 6 2025",
    time: "12PM - 2PM",
    location: "Queens",
    description:
      "Use your Spanish and/or Mandarin language skills as you hand out grocery boxes to the community.",
  },
  {
    Id: 3,
    type: "volunteer",
    urgency: "Mid",
    title: "Mend Coats for New Yorkers",
    organization: "New York Cares, Inc.",
    date: "Thu Mar 6 2025",
    time: "2PM - 4PM",
    location: "Manhattan",
    description:
      "Are you a sewing savant or have a needlepoint hobby? We have many coats in excellent condition that need a little TLC before heading out the door.",
  },
  {
    Id: 4,
    type: "volunteer",
    urgency: "High",
    title: "Repack Produce",
    organization: "City Harvest",
    date: "Thu Mar 6 2025",
    time: "2PM - 4:30PM",
    location: "Brooklyn",
    description:
      "Repack produce and other food items into family-sized bags that will later be distributed to the community.",
  },
  {
    Id: 5,
    type: "volunteer",
    urgency: "None",
    title: "Pack and Distribute Food",
    organization: "The Salvation Army of Greater New York",
    date: "Thu Mar 6 2025",
    time: "10AM - 1PM",
    location: "Brooklyn",
    description:
      "Pack and distribute food to clients, who bring their bags and carts or help clients. Also, assist in unwrapping food in the food pantry.",
  },
  {
    Id: 6,
    type: "volunteer",
    urgency: "Urgent",
    title: "Distribute Farm Fresh Grocery Boxes",
    organization: "The Connected Chef",
    date: "Thu Mar 6 2025",
    time: "12PM - 2PM",
    location: "Queens",
    description:
      "Use your Spanish and/or Mandarin language skills as you hand out grocery boxes to the community.",
  },
  {
    Id: 7,
    type: "volunteer",
    urgency: "Mid",
    title: "Mend Coats for New Yorkers",
    organization: "New York Cares, Inc.",
    date: "Thu Mar 6 2025",
    time: "2PM - 4PM",
    location: "Manhattan",
    description:
      "Are you a sewing savant or have a needlepoint hobby? We have many coats in excellent condition that need a little TLC before heading out the door.",
  },
  {
    Id: 8,
    type: "volunteer",
    urgency: "High",
    title: "Repack Produce",
    organization: "City Harvest",
    date: "Thu Mar 6 2025",
    time: "2PM - 4:30PM",
    location: "Brooklyn",
    description:
      "Repack produce and other food items into family-sized bags that will later be distributed to the community.",
  },
];

const CarrearCards = () => {
  return (
    <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40} // Increased gap between slides
        slidesPerView={1}
        breakpoints={{
          300: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1600: { slidesPerView: 3 }, // Prevent extra spacing at 1600px+
        }}
        // pagination={{
        //   clickable: true,
        //   type: "progressbar", // Enable progress bar pagination
        // }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        style={{
          paddingBottom: "10px",
        }}
      >
        {volunteerData.map((volunteer, index) => (
          <SwiperSlide key={index}>
            <div className="careerCard px-6 py-6  bg-white  rounded-xl flex flex-col gap-y-4 border border-gray-200">
              {/* Type and Urgency */}
              <div className="flex gap-4 items-center">
                <span className="bg-[#aec8d5] py-2 px-3 text-[12px] text-[#00234b] rounded-3xl">
                  {volunteer.type}
                </span>
                <span className="text-[12px] text-[#00234b]">
                  {volunteer.urgency}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold">{volunteer.title}</h2>

              {/* Organization */}
              <div className="text-[14px] text-gray-600">
                <span className="flex gap-2 items-center">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1780_13776)">
                      <path
                        d="M4.28795 5.6423C5.35307 5.6423 6.21652 4.77885 6.21652 3.71373C6.21652 2.64861 5.35307 1.78516 4.28795 1.78516C3.22283 1.78516 2.35938 2.64861 2.35938 3.71373C2.35938 4.77885 3.22283 5.6423 4.28795 5.6423Z"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M8.14397 12.0698H0.429688V11.2126C0.429688 10.1896 0.836064 9.20855 1.55942 8.4852C2.28277 7.76185 3.26385 7.35547 4.28683 7.35547C5.30981 7.35547 6.29089 7.76185 7.01424 8.4852C7.7376 9.20855 8.14397 10.1896 8.14397 11.2126V12.0698Z"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M7.71484 1.78516C8.22633 1.78516 8.71687 1.98834 9.07855 2.35002C9.44023 2.7117 9.64342 3.20224 9.64342 3.71373C9.64342 4.22522 9.44023 4.71576 9.07855 5.07743C8.71687 5.43911 8.22633 5.6423 7.71484 5.6423"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.08594 7.51953C9.81608 7.79729 10.4447 8.2902 10.8885 8.93304C11.3324 9.57588 11.5706 10.3383 11.5717 11.1195V12.071H10.2859"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1780_13776">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  {volunteer.organization}
                </span>
              </div>

              {/* Date and Time */}
              <div className="text-[14px] text-gray-600">
                <span className="flex gap-2 items-center">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1230_44365)">
                      <path
                        d="M1.28683 2.64453C1.0595 2.64453 0.841484 2.73484 0.680739 2.89558C0.519993 3.05633 0.429688 3.27435 0.429688 3.50167V11.216C0.429688 11.4433 0.519993 11.6613 0.680739 11.8221C0.841484 11.9828 1.0595 12.0731 1.28683 12.0731H10.7154C10.9427 12.0731 11.1607 11.9828 11.3215 11.8221C11.4822 11.6613 11.5725 11.4433 11.5725 11.216V3.50167C11.5725 3.27435 11.4822 3.05633 11.3215 2.89558C11.1607 2.73484 10.9427 2.64453 10.7154 2.64453H9.00112"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M3.00195 0.929688V4.35826"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.00195 0.929688V4.35826"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M3 2.64453H7.28571"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M3.00084 7.35714C3.23753 7.35714 3.42941 7.16526 3.42941 6.92857C3.42941 6.69188 3.23753 6.5 3.00084 6.5C2.76414 6.5 2.57227 6.69188 2.57227 6.92857C2.57227 7.16526 2.76414 7.35714 3.00084 7.35714Z"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6.00084 7.35714C6.23753 7.35714 6.42941 7.16526 6.42941 6.92857C6.42941 6.69188 6.23753 6.5 6.00084 6.5C5.76414 6.5 5.57227 6.69188 5.57227 6.92857C5.57227 7.16526 5.76414 7.35714 6.00084 7.35714Z"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.00084 7.35714C9.23753 7.35714 9.42941 7.16526 9.42941 6.92857C9.42941 6.69188 9.23753 6.5 9.00084 6.5C8.76414 6.5 8.57227 6.69188 8.57227 6.92857C8.57227 7.16526 8.76414 7.35714 9.00084 7.35714Z"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M3.00084 9.92746C3.23753 9.92746 3.42941 9.73558 3.42941 9.49888C3.42941 9.26219 3.23753 9.07031 3.00084 9.07031C2.76414 9.07031 2.57227 9.26219 2.57227 9.49888C2.57227 9.73558 2.76414 9.92746 3.00084 9.92746Z"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1230_44365">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <span> {volunteer.date}</span>
                    <br />
                    <span> {volunteer.time}</span>
                  </div>
                </span>
              </div>

              {/* Location */}
              <div className="text-[14px] text-gray-600">
                <span className="flex gap-2 items-center">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1230_44377)">
                      <path
                        d="M9.85686 4.78683C9.85686 6.92112 5.99972 12.0725 5.99972 12.0725C5.99972 12.0725 2.14258 6.92112 2.14258 4.78683C2.14258 3.76385 2.54895 2.78277 3.27231 2.05942C3.99566 1.33606 4.97674 0.929687 5.99972 0.929688C7.0227 0.929688 8.00378 1.33606 8.72713 2.05942C9.45049 2.78277 9.85686 3.76385 9.85686 4.78683Z"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6.00056 6.07143C6.71064 6.07143 7.28627 5.49579 7.28627 4.78571C7.28627 4.07563 6.71064 3.5 6.00056 3.5C5.29048 3.5 4.71484 4.07563 4.71484 4.78571C4.71484 5.49579 5.29048 6.07143 6.00056 6.07143Z"
                        stroke="#595858"
                        stroke-width="0.857143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1230_44377">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  {volunteer.location}
                </span>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {volunteer.description}
                </p>
              </div>

              {/* Button */}
              <div className="w-full mt-auto">
                <NavLink
                  to={`/jobs/${volunteer.title}`}
                  className="block w-full"
                >
                  <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                    View details
                  </button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between items-center py-3">
        <div>
          <NavLink to={"/jobs"}>
            <span className="text-[#007fff] border-b border-[#007fff] hover:border-none">
              View All
            </span>
          </NavLink>
        </div>
        <div className="flex gap-2">
          <div className="prev bg-[#d0d0d0] hover:bg-[#b9b9b9] p-4 rounded-4xl">
            <HiArrowSmLeft className="text-2xl text-white" />
          </div>
          <div className="next bg-[#717173] hover:bg-[#474749] p-4 rounded-4xl">
            <HiArrowSmRight className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrearCards;
