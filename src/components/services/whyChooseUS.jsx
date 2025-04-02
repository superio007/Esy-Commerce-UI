import { Link } from "react-router-dom";
const WhyUs = () => {
  return (
    <>
      <div className="bg-white">
        <div className="xl:px-10 py-16 p-4 3xl:mx-auto 3xl:max-w-screen-xl">
          <section className="text-gray-600 body-font">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Why Choose Us?
              </h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                With over 7 years of experience, we have built Link strong
                reputation for delivering high-quality solutions that drive real
                results. Our expertise spans multiple industries, helping
                businesses grow, optimize operations, and enhance digital
                experiences.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-b-2 md:border-b-0 md:border-l-2 border-gray-200 border-opacity-60">
                <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  7+ Years of Expertise
                </h3>
                <p className="leading-relaxed text-base mb-4">
                  Proven experience delivering high-quality solutions across
                  industries.
                </p>
                <Link
                  to={"/contact"}
                  className="text-[#007fff] inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-b-2 md:border-b-0 md:border-l-2 border-gray-200 border-opacity-60">
                <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Tailored Strategies
                </h3>
                <p className="leading-relaxed text-base mb-4">
                  Customized solutions designed to meet your unique business
                  needs.
                </p>
                <Link
                  to={"/contact"}
                  className="text-[#007fff] inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-b-2 md:border-b-0 md:border-l-2 border-gray-200 border-opacity-60">
                <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Global Clientele
                </h3>
                <p className="leading-relaxed text-base mb-4">
                  Extensive experience working with businesses in the USA and
                  beyond.
                </p>
                <Link
                  to={"/contact"}
                  className="text-[#007fff] inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-b-2 md:border-b-0 md:border-l-2 border-gray-200 border-opacity-60">
                <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  End-to-End Services
                </h3>
                <p className="leading-relaxed text-base mb-4">
                  From strategy to execution, we provide complete business
                  solutions.
                </p>
                <Link
                  to={"/contact"}
                  className="text-[#007fff] inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default WhyUs;
