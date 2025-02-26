import HeadlessCms from "../assets/Headless.webp";
import Cms from "../assets/Cms.webp";

const Headless = () => {
  
  return (
    <>
      {/* Heading Section */}
      <section
        id="HeadingSection"
        className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl"
      >
        <h2
          className={`xl:text-6xl text-4xl pt-12 font-bold leading-tight text-center`}
        >
          Discover the Power of <br /> Custom Development
        </h2>
        <p
          className={`leading-tight text-center `}
        >
          Want a high-performing, user-friendly website? With our web
          development team, create a website that loads faster and looks unique.
        </p>
      </section>

      {/* Section 1 */}
      <section
        id="Section1"
        className={`xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl `}
      >
        <div className="flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          <div
            className={`lg:w-2/3 w-full `}
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HeadlessCms}
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="Section2"
        className={`xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl  `}
      >
        <div className="flex px-5 pt-24 md:flex-row flex-col items-center">
          <div
            className={`lg:w-2/3 w-full mb-10 md:mb-0 `}
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Cms}
            />
          </div>
          <div
            className={`lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center`}
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Headless;
