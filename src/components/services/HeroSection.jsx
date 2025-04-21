import styles from "./css/HeroSection.module.scss";
import Enquery from "../General/Enquery";
const HeroSection = ({ apiRes }) => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={` ${styles.HeroSection} `}>
          <div className="px-6 md:px-0 flex md:flex-row flex-col items-center xl:px-16 3xl:mx-auto 3xl:max-w-screen-xl">
            <section
              className={`w-full mb-8 md:mb-0 md:w-1/2 ${styles.EcommerceConsultation}`}
            >
              <h1 className={`${styles.HeroHeading}  text-start capitalize`}>
                {apiRes.Heading || "Ecommerce Consultation"}
              </h1>
              <p className={`${styles.HeroSubHeading} mt-4 md:mt-0 text-start`}>
                {apiRes.SubHeading ||
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero
                sint veritatis nam suscipit beatae modi provident accusamus,
                consequatur expedita quod hic blanditiis autem aliquid? Aliquam,
                dicta laboriosam! Ducimus, sed.`}
              </p>
            </section>
            <section className="w-full md:w-1/2">
              <Enquery />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
