import EnqueryForm from "../General/Enquery";
import styles from "./css/HeroSection.module.scss";
import Typewriter from "typewriter-effect";
const HeroSection = ({ heading, subHeading }) => {
  return (
    <div className="bg-[#007fff]">
      <section className="body-font xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className={`${styles.HeroSection} `}>
          <div className="px-6 flex md:px-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-8 md:mb-0 ">
              <Typewriter
                options={{
                  strings: [`Before they sold out readymade gluten`],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p
                className={`${styles.LandHerosubheading}`}
              >
                {subHeading ||
                  `Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.`}
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <EnqueryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
