import styles from "./css/HeaderAboutSection.module.scss";
import { MdPlayArrow } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoCheckmarkOutline } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import { useEffect, useState, useRef } from "react";
const HeaderSection = ({ apiRes }) => {
  console.log(apiRes);
  const [Points, setPoints] = useState([]);
  const videoRef = useRef(null);
  const [isVideoStarted, setIsVideoStarted] = useState(false);
  const [videoKey, setVideoKey] = useState(0); // to force video reload

  const handlePlayVideo = () => {
    setIsVideoStarted(true);
    // force re-render by changing key to trigger fresh load
    setVideoKey((prev) => prev + 1);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.controls = true;
        videoRef.current.play();
      }
    }, 100); // small delay ensures poster is replaced properly
  };

  const handleVideoEnd = () => {
    setIsVideoStarted(false);
    setVideoKey((prev) => prev + 1); // force reload video + poster
  };

  useEffect(() => {
    if (apiRes.about_hero_section_headings) {
      const points = apiRes.about_hero_section_headings.map(
        (point) => point.Title
      );
      setPoints(points);
    }
  }, []);
  return (
    <section className={`bg-[#007fff] text-white`}>
      <div className={styles.HeaderAboutSection}>
        <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
          <div className="px-6 md:px-0">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 ">
                <h1 className={styles.HeaderAboutSectionHEading}>
                  {apiRes.Title || "Build With People Who Care"}
                </h1>
                <p className={styles.HeaderAboutSectionSubHEading}>
                  {apiRes.subHeading ||
                    `we’re a hands-on team of strategists, creators & builders helping brands grow with zero guesswork`}
                </p>
                <ul className={styles.HeaderAboutSectionSubHEading}>
                  {Points.map((point, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <IoCheckmarkOutline className="text-white text-2xl" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="py-4 flex justify-start  items-center gap-6">
                  <a href="#PhoneNumber">
                    <span className="bg-white text-[#007fff] py-3 px-10 rounded-lg">
                      Let's Talk
                    </span>
                  </a>
                  {/* <NavLink>
                    <span className="block bg-white rounded-full p-2">
                      <MdPlayArrow className="text-[#007fff] text-2xl" />
                    </span>
                  </NavLink> */}
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div
                  style={{
                    position: "relative",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  <video
                    key={videoKey} // force video reset on each interaction
                    ref={videoRef}
                    src={apiRes.IntroVideo.url}
                    className="w-auto h-auto rounded-lg shadow-lg"
                    poster={apiRes.sideimage.url}
                    onEnded={handleVideoEnd}
                    onPause={handleVideoEnd}
                  ></video>

                  {!isVideoStarted && (
                    <div
                      onClick={handlePlayVideo}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-white hover:bg-transparent hover:border-white hover:border-2 hover:cursor-pointer z-10"
                    >
                      <span>
                        <BiSolidRightArrow className="text-[#007fff] text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
