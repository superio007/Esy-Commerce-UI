import { NavLink } from "react-router-dom";
import styles from "./css/AboutCta.module.scss";
const AboutCta = ({ heading }) => {
  return (
    <>
      <div className="bg-white">
        <div
          className={`xl:px-16 ${styles.ctaSection} 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <div className="px-6 md:px-0">
            <div className="flex text-center flex-col justify-center items-center ">
              <h2 className={styles.ctaH2}>
                {heading ||
                  "Join 100+ Successful Tech Companies — Start Your Custom Software Journey Today"}
              </h2>
              <button>
                <NavLink to="/contact">
                  <span
                    href=""
                    className="bg-[#007fff] text-white py-4 px-12 rounded-2xl"
                  >
                    Chat With Us
                  </span>
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutCta;
