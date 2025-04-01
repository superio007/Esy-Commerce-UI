import styles from "./css/HeroSection.module.css";
import Enquery from "../../../General/Enquery";
const HeroSection = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className="flex md:flex-row flex-col items-center xl:px-16 p-3 md:py-16 3xl:mx-auto 3xl:max-w-screen-xl">
          <section
            className={`w-full md:w-1/2 ${styles.YoutubeContentMarketing}`}
          >
            <h1 className="text-[45px] font-bold  text-white capitalize">
              Youtube Content Marketing
            </h1>
            <p>
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

