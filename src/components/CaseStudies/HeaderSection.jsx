import TestimonialCard from "./TestimonialCard";
import { FaArrowRight } from "react-icons/fa";
import styles from "./css/HeaderSection.module.css";

const HeaderSection = () => {
  return (
    <div className={`bg-[#007fff] ${styles.CaseStudyHeader}`}>
      <div className="p-6 xl:px-16 py-[60px] 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="flex md:flex-row flex-col gap-8 justify-between items-center">
          <div className="md:w-[60%]">
            <h1 className="text-3xl font-bold leading-snug">
              We Built a Dashboard to Turn Complex Data into Actionable Insights
              for Kadeya’s Operations
            </h1>
            <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
              Chat With Us <FaArrowRight />
            </button>
          </div>
          <div>
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default HeaderSection;

