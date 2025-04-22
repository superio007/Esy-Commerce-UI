import React from "react";
import styles from "./css/HeroSection.module.scss";
import Employees from "../../../src/assets/FaqPage/FAQ.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const HeroSection = ({ Heading }) => {
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          className={`${styles.HeroSection} xl:px-16 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <div className="px-6 md:px-0">
            <div className="flex md:flex-row flex-col items-center">
              <div className="md:w-fit flex flex-col items-start text-left mb-16 md:mb-0 ">
                <h1 className={styles.Hero}>
                  {Heading || "Frequently Asked Questions"}
                </h1>
              </div>
              <div id="" className={styles.CareerImage}>
                <DotLottieReact src={Employees} loop autoplay />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default HeroSection;
