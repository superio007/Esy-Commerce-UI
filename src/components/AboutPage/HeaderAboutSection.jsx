import HeaderThumbnail from "./assets/HeaderThumbnail.png";
import styles from "./css/HeaderAboutSection.module.css";


const HeaderSection = () => {
  return (
    <section className={`${styles.HeaderAboutSection} bg-[#007fff] text-white`}>
      <div className="xl:px-10 py-16 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="mt-4 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis nam eius obcaecati!
            </p>
            <div>
              <button></button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={HeaderThumbnail}
              alt="Thumbnail"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
