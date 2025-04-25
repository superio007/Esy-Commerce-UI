import { useEffect, useState, useRef } from "react";
import styles from "./css/BuletPoints.module.scss";

const BulletPoints = ({ apiRes }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const bulletRefs = useRef([]);
  const [bulletPoints, setbulletPoints] = useState([]);
  useEffect(() => {
    const data =
      apiRes.home_bullet_section_points?.map((item) => item.Heading) || [];
    setbulletPoints(data);
  }, [apiRes]);
  useEffect(() => {
    const handleScroll = () => {
      const newVisibleIndexes = [];
      bulletRefs.current.forEach((bullet, index) => {
        if (bullet) {
          const rect = bullet.getBoundingClientRect();
          const isVisible =
            rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;

          if (isVisible) {
            newVisibleIndexes.push(index);
          }
        }
      });

      setVisibleIndexes(newVisibleIndexes); // Reset on exit
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.BuletSection}>
      <div className={`xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl`}>
        <div className="px-6 md:px-0">
          <div className="flex md:flex-row flex-col items-center">
            <div id="LeftSide">
              <img
                className="md:w-[690px] md:h-[560px] h-full w-full"
                alt={apiRes.sideimage.alternativeText || "hero"}
                src={apiRes.sideimage.url}
              />
            </div>
            <div className="mt-4 xl:mt-0 sm:mt-6 lg:flex-grow md:w-1/2  flex flex-col items-start text-left">
              <div id="right-text">
                <h2 className={`${styles.LandBulletsHeading}`}>
                  {apiRes.Heading ||
                    `Before they sold out
                <br className="hidden lg:inline-block" />
                readymade gluten`}
                </h2>
                <p className={`${styles.LandBulletsSubheading}`}>
                  {apiRes.subHeading ||
                    `Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.`}
                </p>
              </div>
              <div className={`${styles.BulletPoints} flex flex-wrap w-full`}>
                {bulletPoints.map((point, index) => (
                  <div
                    key={index}
                    ref={(el) => (bulletRefs.current[index] = el)}
                    className={`p-2 sm:w-1/2 w-full transition-opacity duration-700 transform ${
                      visibleIndexes.includes(index)
                        ? `${styles.fadeInUp}`
                        : "opacity-0"
                    }`}
                  >
                    <div className="bg-white rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-[#007fff] w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <p className={styles.LandBulletsSubheading}>{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulletPoints;
