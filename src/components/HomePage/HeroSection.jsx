import EnqueryForm from "../General/Enquery";
import styles from "./css/HeroSection.module.scss";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
const HeroSection = ({ heading, subHeading, title, headline, Cta }) => {
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
                {title || "Build, Scale & Transform"}
              </h1>
              <p className={`${styles.LandHerosubheading}`}>
                <span style={{ fontStyle: "italic" }}>
                  {subHeading ||
                    `your next digital leap with a boost from our expert solutions{" "}
                  - faster & smarter with zero guesswork`}
                </span>
              </p>
              <ul>
                {Points.map((point, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <IoCheckmarkOutline className="text-white text-2xl" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
              <EnqueryForm Cta={Cta} headline={headline} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
