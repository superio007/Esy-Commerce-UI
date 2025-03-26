import React from "react";
import HeroSection from "../components/FaqPage/HeroSection";
import Faq from "../components/FaqPage/Faq";
const FaqPage = () => {
  return (
    <>
      <HeroSection />
      <div className={`bg-white`}>
        <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
          <Faq />
        </div>
      </div>
    </>
  );
};

export default FaqPage;
