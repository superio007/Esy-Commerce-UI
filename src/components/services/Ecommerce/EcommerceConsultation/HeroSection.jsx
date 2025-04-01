import styles from "./css/HeroSection.module.css";
import Enquery from "../../../General/Enquery";
const HeroSection = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className="flex md:flex-row flex-col items-center xl:px-16 p-8 md:py-16 3xl:mx-auto 3xl:max-w-screen-xl">
          <section
            className={`w-full mb-8 md:mb-0 md:w-1/2 ${styles.EcommerceConsultation}`}
          >
            <h1 className="md:text-[45px] text-2xl font-bold text-white text-center md:text-start capitalize">
              Ecommerce Consultation
            </h1>
            <p className="text-md md:text-xl mt-4 md:mt-0 text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero
              sint veritatis nam suscipit beatae modi provident accusamus,
              consequatur expedita quod hic blanditiis autem aliquid? Aliquam,
              dicta laboriosam! Ducimus, sed.
            </p>
          </section>
          <section className="w-full md:w-1/2">
            <Enquery />
          </section>
        </div>
      </div>
    </>
  );
};
export default HeroSection;

