import EnqueryForm from "../General/Enquery";
import styles from "./css/HeroSection.module.css";
const HeroSection = ({ heading, subHeading }) => {
  return (
    <div className="bg-[#007fff]">
      <section className="body-font xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <div
          className={`${styles.HeroSection} flex md:px-5 pt-24 pb-12 md:flex-row flex-col items-center`}
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className={`title-font text-4xl ${styles.LandHeroheading} xl:text-6xl capitalize mb-4 font-medium`}
            >
              {heading||`Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten`}
            </h1>
            <p className={`mb-8 leading-relaxed ${styles.LandHerosubheading}`}>
              {subHeading||`Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.`}
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#1b8dff] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Book Now
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <EnqueryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
