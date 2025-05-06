import styles from "./css/HeaderAboutSection.module.scss";
import { MdPlayArrow } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const HeaderSection = ({ apiRes }) => {
  console.log(apiRes);
  const [Points, setPoints] = useState([]);
  useEffect(() => {
    if (apiRes.about_hero_section_headings) {
      const points = apiRes.about_hero_section_headings.map(
        (point) => point.Title
      );
      setPoints(points);
    }
  }, []);
  return (
    <section className={`bg-[#007fff] text-white`}>
      <div className={styles.HeaderAboutSection}>
        <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
          <div className="px-6 md:px-0">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 ">
                <h1 className={styles.HeaderAboutSectionHEading}>
                  {apiRes.Title || "Build With People Who Care"}
                </h1>
                <p className={styles.HeaderAboutSectionSubHEading}>
                  {apiRes.subHeading ||
                    `we’re a hands-on team of strategists, creators & builders helping brands grow with zero guesswork`}
                </p>
                <ul className={styles.HeaderAboutSectionSubHEading}>
                  {Points.map((point, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <IoCheckmarkOutline className="text-white text-2xl" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="py-4 flex justify-start  items-center gap-6">
                  <a href="#PhoneNumber">
                    <span className="bg-white text-[#007fff] py-3 px-10 rounded-lg">
                      Let's Talk
                    </span>
                  </a>
                  {/* <NavLink>
                    <span className="block bg-white rounded-full p-2">
                      <MdPlayArrow className="text-[#007fff] text-2xl" />
                    </span>
                  </NavLink> */}
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={apiRes.sideimage.url}
                  alt={apiRes.sideimage.alternativeText || "Thumbnail"}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
