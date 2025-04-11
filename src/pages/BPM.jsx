import styles from "../css/BPM.module.css";
import { Link } from "react-router-dom";
const BPM = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          className={`${styles.BPM} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <h1 className="text-[45px] font-bold text-center text-white capitalize">
            BPM
          </h1>
        </section>
      </div>
      <div className="bg-white">
        <div className="xl:px-10 md:py-16 py-8 3xl:mx-auto 3xl:max-w-screen-xl">
          {/* Content Migration */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="w-full md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Content Migration
                </h2>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="flex justify-center">
                  <Link
                    to={"/content-migration"}
                    className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  className="w-100 object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
          </section>
          {/* Translation */}
          <section className="text-gray-600 body-font">
            <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
              <div className="w-full md:w-1/2 flex justify-start">
                <img
                  className="object-cover object-center rounded w-full max-w-md"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Translation
                </h1>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="flex justify-center">
                  <Link
                    to={"/translation"}
                    className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* Transcription */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="w-full md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Transcription
                </h2>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="flex justify-center">
                  <Link
                    to={"/transcription"}
                    className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  className="w-100 object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
          </section>
          {/* Transliteration */}
          <section className="text-gray-600 body-font">
            <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
              <div className="w-full md:w-1/2 flex justify-start">
                <img
                  className="object-cover object-center rounded w-full max-w-md"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Transliteration
                </h1>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="flex justify-center">
                  <Link
                    to={"/transliteration"}
                    className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* Data Labeling & Annotation */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="w-full md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Data Labeling & Annotation
                </h2>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="flex justify-center">
                  <Link
                    to={"/data-labeling-annotation"}
                    className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  className="w-100 object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default BPM;
