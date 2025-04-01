import styles from "./css/HeroSection.module.css";
import Enquery from "../../../General/Enquery";
const HeroSection = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className="flex md:flex-row flex-col items-center xl:px-16 p-3 md:py-16 3xl:mx-auto 3xl:max-w-screen-xl">
          <section
            className={`w-full md:w-1/2 ${styles.LinkedinContentMarketing}`}
          >
            <h1 className="text-[45px] font-bold  text-white capitalize">
              Linkedin Content Marketing
            </h1>
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

