import { useEffect, useState } from "react";

const BulletPoints = () => {
  const bulletPoints = [
    "Authentic Cliche Forage",
    "Kinfolk Chips Snackwave",
    "Coloring Book Ethical",
    "Typewriter Polaroid Cray",
    "Pack Truffaut Blue",
    "The Catcher In The Rye",
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("BuletSection");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="BuletSection" className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
      <section className="text-gray-600 body-font">
        <div className="flex px-5 pt-24 md:flex-row flex-col items-center">
          <div
            id="LeftSide"
            className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div
              id="right-text"
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Before they sold out
                <br className="hidden lg:inline-block" />
                readymade gluten
              </h1>
              <p className="leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
            </div>
            <div className="flex flex-wrap w-full">
              {bulletPoints.map((point, index) => (
                <div
                  key={index}
                  className={`p-2 sm:w-1/2 w-full opacity-0 transform translate-y-10 transition-all duration-500 ease-out ${
                    isVisible ? "fadeInUp" : ""
                  }`}
                  style={{
                    animation: isVisible
                      ? `fadeInUp 0.5s ease-out ${index * 0.3}s forwards`
                      : "none",
                  }}
                >
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BulletPoints;
