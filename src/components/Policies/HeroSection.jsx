import React from "react";
import styles from "./css/HeroSection.module.scss";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const HeroSection = ({ heading, subHeading, lottie }) => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={styles.HeroSection}>
          <section
            id=""
            className={`xl:px-16 3xl:mx-auto 3xl:max-w-screen-xl`}
          >
            <div className="px-6 md:px-0">
              <div className="flex md:flex-row flex-col items-center">
                <div className="md:w-fit flex flex-col items-start text-left mb-16 md:mb-0">
                  <h1 className={styles.HeroHeading}>
                    {heading || "EMPLOYEE POLICY <br /> CODE OF CONDUCT"}
                  </h1>
                  <p className={styles.HeroSubHeading}>
                    {subHeading ||
                      `We uphold integrity, professionalism, and accountability in all
                employee conduct.`}
                  </p>
                </div>
                <div id="" className={styles.CareerImage}>
                  <DotLottieReact src={lottie} loop autoplay />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
