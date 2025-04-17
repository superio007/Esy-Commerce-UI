import { Link } from "react-router-dom";
import styles from "./css/CTA.module.scss";
const CTA = ({ apiRes }) => {
  return (
    <>
      <div className="bg-white">
        <div
          className={` xl:px-16 ${styles.ctaSection} 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <div
            className={`px-6 md:px-0 flex text-center flex-col justify-center items-center `}
          >
            <h2 className={styles.ctaH2}>
              {apiRes.Heading ||
                `Join 100+ Successful Tech Companies — Start Your Custom Software
              Journey Today`}
            </h2>
            <button className="bg-[#007fff] text-white py-4 px-12 rounded-xl">
              <Link to="/contact">Chat With Us</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CTA;
