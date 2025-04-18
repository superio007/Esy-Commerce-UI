import styles from "./css/HeaderAboutSection.module.scss";
import { MdPlayArrow } from "react-icons/md";
import { NavLink } from "react-router-dom";

const HeaderSection = ({ apiRes }) => {
  return (
    <section className={`bg-[#007fff] text-white`}>
      <div className={styles.HeaderAboutSection}>
        <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
          <div className="px-6 md:px-0">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 ">
                <h1 className={styles.HeaderAboutSectionHEading}>
                  {apiRes.Heading ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                </h1>
                <p className={styles.HeaderAboutSectionSubHEading}>
                  {apiRes.subHeading ||
                    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis nam eius obcaecati!`}
                </p>
                <div className="py-4 flex justify-start  items-center gap-6">
                  <NavLink>
                    <span className="bg-white text-[#007fff] py-3 px-10 rounded-lg">
                      Call Me
                    </span>
                  </NavLink>
                  <NavLink>
                    <span className="block bg-white rounded-full p-2">
                      <MdPlayArrow className="text-[#007fff] text-2xl" />
                    </span>
                  </NavLink>
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
