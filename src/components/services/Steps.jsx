import styles from "./css/steps.module.scss";

import Check from "../../assets/CodeOfConduct/Check.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Steps = ({ apiRes }) => {
  let count = 1;
  return (
    <>
      <div
        className={`xl:px-10 ${styles.stepsSection} 3xl:mx-auto 3xl:max-w-screen-xl`}
      >
        <div className="px-6 md:px-0">
          <div
            className={`flex flex-col text-start md:text-center w-full ${styles.stepsSubSection}`}
          >
            <h2 className={`title-font ${styles.stepsH2}`}>
              {apiRes.Heading || "How It Works"}
            </h2>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="w-full mb-4 md:mb-0 md:w-1/2">
              {apiRes.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex relative pb-8 justify-center sm:items-center md:w-2/3 mx-auto"
                >
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-4 sm:mt-0 inline-flex items-center justify-center bg-[#007fff] text-white relative z-10 title-font font-medium text-sm">
                    {count++}
                  </div>
                  <div className="flex-grow md:pl-8 pl-2 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-grow sm:pl-2 ">
                      <h3 className={`title-font ${styles.stepsH3}`}>
                        {step.Heading}
                      </h3>
                      <p className={`${styles.stepsp} leading-relaxed`}>
                        {step.subHeading}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/2">
              {/* <DotLottieReact src={Check} loop autoplay /> */}
              <img
                className="w-full h-full object-contain object-center rounded"
                alt={apiRes.sideimage.alternativeText || "hero"}
                src={apiRes.sideimage.url || "https://dummyimage.com/720x600"}
              />
            </div>
          </div>
          <div className={`${styles.stepsButton} flex justify-start md:justify-center`}>
            <a href="#PhoneNumber" class="center-hover-btn">
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Steps;
