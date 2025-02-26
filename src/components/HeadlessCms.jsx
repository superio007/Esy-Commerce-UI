import { useState, useEffect } from "react";
import HeadlessCms from "../assets/Headless.webp";
import Cms from "../assets/Cms.webp";

const Headless = () => {
  const [isVisible, setIsVisible] = useState({
    Section1: false,
    Section2: false,
    HeadingSection:false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Section1", "Section2", "HeadingSection"];
      let updatedVisibility = { ...isVisible };

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
            updatedVisibility[id] = true; // Mark section as visible
          }
        }
      });

      setIsVisible(updatedVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]); // Depend on `isVisible` to update only when needed

  return (
    <>
      {/* Heading Section */}
      <section
        id="HeadingSection"
        className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl"
      >
        <h2
          className={`xl:text-6xl text-4xl pt-12 font-bold leading-tight text-center transform transition-all duration-1000 ${
            isVisible.HeadingSection
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          Discover the Power of <br /> Custom Development
        </h2>
        <p
          className={`leading-tight text-center transform transition-all duration-1000 ${
            isVisible.HeadingSection
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          Want a high-performing, user-friendly website? With our web
          development team, create a website that loads faster and looks unique.
        </p>
      </section>

      {/* Section 1 */}
      <section
        id="Section1"
        className={`xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl transition-all duration-700 ${
          isVisible.Section1
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          <div
            className={`lg:w-2/3 w-full transform transition-all duration-1000 ${
              isVisible.Section1
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HeadlessCms}
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="Section2"
        className={`xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl transition-all duration-700 `}
      >
        <div className="flex px-5 pt-24 md:flex-row flex-col items-center">
          <div
            className={`lg:w-2/3 w-full mb-10 md:mb-0 transform transition-all duration-1000 ${
              isVisible.Section2
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Cms}
            />
          </div>
          <div
            className={`lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center transform transition-all duration-1000 ${
              isVisible.Section2
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Headless;
