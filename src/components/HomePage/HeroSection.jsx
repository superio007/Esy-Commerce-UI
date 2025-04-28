import EnqueryForm from "../General/Enquery";
import styles from "./css/HeroSection.module.scss";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
const HeroSection = ({ heading, subHeading }) => {
  const [Points, setPoints] = useState([]);
  useEffect(() => {
    if (heading) {
      const points = heading.map((point) => point.Title);
      setPoints(points);
    }
  }, []);
  return (
    <div className="bg-[#007fff]">
      <section className="body-font xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className={`${styles.HeroSection} `}>
          <div className="px-6 flex md:px-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-8 md:mb-0 ">
              <h1 className={styles.LandHeroHeading}>
                Helping Brands Scale Before They "Sold Out"
              </h1>
              {/* <Typewriter
                options={{
                  strings: Points || [
                    `Helping Brands Scale Before They "Sold Out"`,
                    `Performance-First Ecommerce Consulting`,
                    `Seamless Ecommerce Operations Support`,
                    `Tech-Enabled Custom Development`,
                    `Global-Standard Staff-Off & Data Services`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
              <p className={`${styles.LandHerosubheading}`}>
                {subHeading ||
                  `From startup hustle to enterprise scale, we power your ecommerce journey with performance-focused consultation, robust operations enablement, full-stack development, and precise data services.`}
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
              <EnqueryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
