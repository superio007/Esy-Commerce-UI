import { Link } from "react-router-dom";
import styles from "./css/whyChooseUs.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faGlobe,
  faCogs,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

const WhyUs = ({ apiRes }) => {
  return (
    <>
      <div className="bg-white">
        <div
          className={`xl:px-10 ${styles.whyUsSection} 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <section className="text-gray-600 body-font p-6 md:px-0">
            <div
              className={`flex flex-col md:text-center w-full ${styles.whyUsSubSection}`}
            >
              <h2 className={`title-font ${styles.whyUsH2}`}>
                {apiRes.Heading || "Why Choose Us?"}
              </h2>
              <p
                className={`lg:w-2/3 mx-auto leading-relaxed ${styles.whyUsP}`}
              >
                {apiRes.subHeading ||
                  `With over 7 years of experience, we have built Link strong
                reputation for delivering high-quality solutions that drive real
                results. Our expertise spans multiple industries, helping
                businesses grow, optimize operations, and enhance digital
                experiences.`}
              </p>
            </div>
            <div className="flex flex-wrap">
              {apiRes.why_us_points.map((point, index) => (
                <div
                  key={index}
                  className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-b-2 md:border-b-0 md:border-l-2 border-gray-200 border-opacity-60"
                >
                  <div className="flex gap-6 md:gap-0 items-start flex-col">
                    <div>
                      <img
                        className="mt-2 max-w-[80px] w-auto"
                        src={point.Icon.url}
                        alt={point.Icon.alternativeText}
                      />
                    </div>
                    <div>
                      <h3 className={`${styles.WhyUsH3} title-font`}>
                        {point.Heading}
                      </h3>
                      <p className={`leading-relaxed ${styles.whyUsP}`}>
                        {point.subHeading}
                      </p>
                      <a
                        href="#PhoneNumber"
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
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default WhyUs;
