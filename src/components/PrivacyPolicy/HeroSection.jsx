import React from "react";
import styles from "./css/HeroSection.module.css";
import PrivacyLottie from "./assets/Privacy.lottie";
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
              <h1 className="text-[60px] font-bold">
                {heading || "Privacy Policy"}
              </h1>
              <p className="mb-8 leading-relaxed">
                {subHeading ||
                  `Our privacy policy safeguards data across diverse users,
                practices, and regions.`}
              </p>
            </div>
            <div id="" className={styles.CareerImage}>
              <DotLottieReact src={PrivacyLottie} loop autoplay />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default HeroSection;
