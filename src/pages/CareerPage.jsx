import { NavLink } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "../components/CareerPage/css/CarrearCards.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Jobs from "../components/CareerPage/assets/jobs.json";
import {
  FaLaptop,
  FaBriefcase,
  FaClock,
  FaHeartbeat,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaLaptop className={`${styles.benifitIcon} text-6xl`} />,
    title: "100% Remote",
  },
  {
    icon: <FaBriefcase className={`${styles.benifitIcon} text-6xl`} />,
    title: "Unlimited PTO",
  },
  {
    icon: <FaClock className={`${styles.benifitIcon} text-6xl`} />,
    title: "Flexible Hours",
  },
  {
    icon: <FaHeartbeat className={`${styles.benifitIcon} text-6xl`} />,
    title: "Medical Insurance",
  },
  {
    icon: <FaChartLine className={`${styles.benifitIcon} text-6xl`} />,
    title: "Career Growth",
  },
  {
    icon: <FaUsers className={`${styles.benifitIcon} text-6xl`} />,
    title: "Great Culture",
  },
];

const careerPage = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          id=""
          className={`${styles.CareerHead} xl:px-16 p-3 py-[60px] 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <div className="flex md:flex-row flex-col items-center">
            <div className="md:w-fit flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-[60px] font-bold">
                Looking for a{" "}
                <span className={styles.highlightUnderlineHead}>
                  new career?
                  <span
                    className={styles.underlineBarHead}
                    style={{
                      background:
                        "linear-gradient(90deg, #00eeff 0%, transparent 100%)",
                      bottom: "9px",
                      height: "18px",
                      position: "absolute",
                    }}
                  ></span>
                </span>
              </h1>
              <p className="mb-8 leading-relaxed">
                Our staff and fellows come from many backgrounds, disciplines
                and countries.
              </p>
              <div className="mt-4 md:mt-0">
                <a
                  style={{ display: "inline-block" }}
                  href="#Carreer-Section"
                  className="h-max py-4 px-8 bg-[#ffffff] text-[#007fff] rounded-xl"
                >
                  Join the team
                </a>
              </div>
            </div>
            <div id="" className={styles.CareerImage}>
              <DotLottieReact
                src="./src/components/CareerPage/assets/vRMSsmzJes (2).lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white">
        <section className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl ">
          <div className="flex flex-col md:flex-row justify-between items-center py-12">
            <div>
              <h2 className="text-3xl font-bold text-center md:text-left">
                What are the benefits?
              </h2>
              <p className="mt-2 text-center md:text-left">
                We are a customer-first eCommerce agency, combining the best of
                UX design, technology, <br /> and analytics to create sites that
                shoppers love and retention tactics that keep them coming back.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                style={{ display: "inline-block" }}
                href="#Carreer-Section"
                className="h-max py-4 px-8 bg-[#007fff] text-white rounded-xl"
              >
                Join the team
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${styles.benifitsCard} flex items-center justify-evenly py-11 px-7 bg-white shadow-md rounded-lg gap-10 border-gray-200`}
              >
                {benefit.icon}
                <div>
                  <h3 className="text-lg font-semibold ">{benefit.title}</h3>
                  <p className="mt-2">
                    We create functional and <br /> intuitive interfaces for
                    all.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div
        id="Carreer-Section"
        className="hidden md:block xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl overflow-hidden"
      >
        <div className="text-center p-8">
          <h2 className="text-5xl font-bold mb-3">
            Our open{" "}
            <span className={styles.highlightUnderline}>
              positions
              <span
                className={`${styles.underlineBar} inset-x-0`}
                style={{
                  background:
                    "linear-gradient(90deg, #75e8f0 0%, transparent 100%)",
                }}
              ></span>
            </span>
          </h2>
          <p className="text-2xl">
            What life is like to work with us? It's pretty awesome!
          </p>
        </div>
        {/* Volunteer Cards */}
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-3 gap-y-6">
          {Jobs.map((volunteer, index) => (
            <div
              key={index}
              className={`${styles.careerCard} p-5 bg-white rounded-xl flex flex-col gap-y-4 border border-gray-200`}
            >
              {/* Type and Urgency */}
              <div className="flex gap-4 items-center">
                <span className="bg-[#aec8d5] py-2 px-3 text-[12px] text-[#00234b] rounded-3xl">
                  {volunteer.mode}
                </span>
                <span className="text-[12px] text-[#00234b]">
                  {volunteer.contract_duration}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold">{volunteer.job_title}</h2>

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
                    <g clipPath="url(#clip0_1780_13776)">
                      <path
                        d="M4.28795 5.6423C5.35307 5.6423 6.21652 4.77885 6.21652 3.71373C6.21652 2.64861 5.35307 1.78516 4.28795 1.78516C3.22283 1.78516 2.35938 2.64861 2.35938 3.71373C2.35938 4.77885 3.22283 5.6423 4.28795 5.6423Z"
                        stroke="#595858"
                        strokeWidth="0.857143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8.14397 12.0698H0.429688V11.2126C0.429688 10.1896 0.836064 9.20855 1.55942 8.4852C2.28277 7.76185 3.26385 7.35547 4.28683 7.35547C5.30981 7.35547 6.29089 7.76185 7.01424 8.4852C7.7376 9.20855 8.14397 10.1896 8.14397 11.2126V12.0698Z"
                        stroke="#595858"
                        strokeWidth="0.857143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.71484 1.78516C8.22633 1.78516 8.71687 1.98834 9.07855 2.35002C9.44023 2.7117 9.64342 3.20224 9.64342 3.71373C9.64342 4.22522 9.44023 4.71576 9.07855 5.07743C8.71687 5.43911 8.22633 5.6423 7.71484 5.6423"
                        stroke="#595858"
                        strokeWidth="0.857143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9.08594 7.51953C9.81608 7.79729 10.4447 8.2902 10.8885 8.93304C11.3324 9.57588 11.5706 10.3383 11.5717 11.1195V12.071H10.2859"
                        stroke="#595858"
                        strokeWidth="0.857143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                  {volunteer.company_overview.name}
                </span>
              </div>

              {/* Experience */}
              <div className="text-[14px] text-gray-600">
                <span className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="13"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#818080"
                      fillRule="nonzero"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      textAnchor="none"
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M9,3v1h-5c-1.09306,0 -2,0.90694 -2,2v4v4v4c0,1.09306 0.90694,2 2,2h16c1.09306,0 2,-0.90694 2,-2v-4v-4v-4c0,-1.09306 -0.90694,-2 -2,-2h-5v-1zM4,6h16v4v4h-16v-4zM12,10c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM4,16h16v2h-16z"></path>
                      </g>
                    </g>
                  </svg>
                  <span>{volunteer.experience_required}</span>
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
                    <g clipPath="url(#clip0_1230_44377)">
                      <path
                        d="M9.85686 4.78683C9.85686 6.92112 5.99972 12.0725 5.99972 12.0725C5.99972 12.0725 2.14258 6.92112 2.14258 4.78683C2.14258 3.76385 2.54895 2.78277 3.27231 2.05942C3.99566 1.33606 4.97674 0.929687 5.99972 0.929688C7.0227 0.929688 8.00378 1.33606 8.72713 2.05942C9.45049 2.78277 9.85686 3.76385 9.85686 4.78683Z"
                        stroke="#595858"
                        strokeWidth="0.857143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M6.00056 6.07143C6.71064 6.07143 7.28627 5.49579 7.28627 4.78571C7.28627 4.07563 6.71064 3.5 6.00056 3.5C5.29048 3.5 4.71484 4.07563 4.71484 4.78571C4.71484 5.49579 5.29048 6.07143 6.00056 6.07143Z"
                        stroke="#595858"
                        strokeWidth="0.857143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                  {volunteer.job_description}
                </p>
              </div>

              {/* Button */}
              <div className="w-full mt-auto">
                <NavLink
                  to={`/jobs/${volunteer.job_title.split(" ").join("-")}`}
                  className="block w-full"
                >
                  <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                    View details
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="block md:hidden py-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10} // Increased gap between slides
          slidesPerView={1}
          breakpoints={{
            300: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 }, // Prevent extra spacing at 1600px+
          }}
          style={{
            paddingBottom: "10px",
          }}
        >
          {Jobs.map((volunteer, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.careerCard} px-10 py-10  bg-white  rounded-xl flex flex-col gap-y-4 border border-gray-200`}>
                {/* Type and Urgency */}
                <div className="flex gap-4 items-center">
                  <span className="bg-[#aec8d5] py-2 px-3 text-[12px] text-[#00234b] rounded-3xl">
                    {volunteer.mode}
                  </span>
                  <span className="text-[12px] text-[#00234b]">
                    {volunteer.contract_duration}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold">{volunteer.job_title}</h2>

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
                      <g clipPath="url(#clip0_1780_13776)">
                        <path
                          d="M4.28795 5.6423C5.35307 5.6423 6.21652 4.77885 6.21652 3.71373C6.21652 2.64861 5.35307 1.78516 4.28795 1.78516C3.22283 1.78516 2.35938 2.64861 2.35938 3.71373C2.35938 4.77885 3.22283 5.6423 4.28795 5.6423Z"
                          stroke="#595858"
                          strokeWidth="0.857143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M8.14397 12.0698H0.429688V11.2126C0.429688 10.1896 0.836064 9.20855 1.55942 8.4852C2.28277 7.76185 3.26385 7.35547 4.28683 7.35547C5.30981 7.35547 6.29089 7.76185 7.01424 8.4852C7.7376 9.20855 8.14397 10.1896 8.14397 11.2126V12.0698Z"
                          stroke="#595858"
                          strokeWidth="0.857143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.71484 1.78516C8.22633 1.78516 8.71687 1.98834 9.07855 2.35002C9.44023 2.7117 9.64342 3.20224 9.64342 3.71373C9.64342 4.22522 9.44023 4.71576 9.07855 5.07743C8.71687 5.43911 8.22633 5.6423 7.71484 5.6423"
                          stroke="#595858"
                          strokeWidth="0.857143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9.08594 7.51953C9.81608 7.79729 10.4447 8.2902 10.8885 8.93304C11.3324 9.57588 11.5706 10.3383 11.5717 11.1195V12.071H10.2859"
                          stroke="#595858"
                          strokeWidth="0.857143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                    {volunteer.company_overview.name}
                  </span>
                </div>

                {/* Work Experiance */}
                <div className="text-[14px] text-gray-600">
                  <span className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="12"
                      height="13"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#818080"
                        fillRule="nonzero"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        textAnchor="none"
                      >
                        <g transform="scale(10.66667,10.66667)">
                          <path d="M9,3v1h-5c-1.09306,0 -2,0.90694 -2,2v4v4v4c0,1.09306 0.90694,2 2,2h16c1.09306,0 2,-0.90694 2,-2v-4v-4v-4c0,-1.09306 -0.90694,-2 -2,-2h-5v-1zM4,6h16v4v4h-16v-4zM12,10c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM4,16h16v2h-16z"></path>
                        </g>
                      </g>
                    </svg>
                    <div>
                      <span> {volunteer.experience_required}</span>
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
                      <g clipPath="url(#clip0_1230_44377)">
                        <path
                          d="M9.85686 4.78683C9.85686 6.92112 5.99972 12.0725 5.99972 12.0725C5.99972 12.0725 2.14258 6.92112 2.14258 4.78683C2.14258 3.76385 2.54895 2.78277 3.27231 2.05942C3.99566 1.33606 4.97674 0.929687 5.99972 0.929688C7.0227 0.929688 8.00378 1.33606 8.72713 2.05942C9.45049 2.78277 9.85686 3.76385 9.85686 4.78683Z"
                          stroke="#595858"
                          strokeWidth="0.857143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M6.00056 6.07143C6.71064 6.07143 7.28627 5.49579 7.28627 4.78571C7.28627 4.07563 6.71064 3.5 6.00056 3.5C5.29048 3.5 4.71484 4.07563 4.71484 4.78571C4.71484 5.49579 5.29048 6.07143 6.00056 6.07143Z"
                          stroke="#595858"
                          strokeWidth="0.857143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                    {volunteer.job_description}
                  </p>
                </div>

                {/* Button */}
                <div className="w-full mt-auto">
                  <NavLink
                    to={`/jobs/${volunteer.job_title.split(" ").join("-")}`}
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
      </div>
    </>
  );
};
export default careerPage;
