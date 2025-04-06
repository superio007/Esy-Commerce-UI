import React from "react";
import styles from "./css/HeroSection.module.css";
import InformationSecurity from "../../../src/assets/InformationSecurityPage/InformationSecurity.lottie"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const HeroSection = ({ heading, subHeading }) => {
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          id=""
          className={`${styles.CareerHead} xl:px-16 p-3 py-[60px] 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <div className="flex md:flex-row flex-col items-center">
            <div className="md:w-fit flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-[60px] font-bold">{heading||"Information Security"}</h1>
              <p className="mb-8 leading-relaxed">
                {subHeading||`We safeguard your personal data with strict security measures to
                prevent unauthorized access.`}
              </p>
            </div>
            <div id="" className={styles.CareerImage}>
              <DotLottieReact src={InformationSecurity} loop autoplay />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default HeroSection;
