import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Xarrow from "react-xarrows";
import gsap from "gsap";
import styles from "./css/HeadlessCms.module.scss";
import LoadingLogo from "../../../src/assets/homePage/loadingLogo.png";
import Solid from "../../../src/assets/homePage/Solid.png";
import Contentful from "../../../src/assets/homePage/contentful.png";
import Sanity from "../../../src/assets/homePage/Sanity.png";
import Contentstack from "../../../src/assets/homePage/contentstack.png";
import Svelte from "../../../src/assets/homePage/Svelte.png";
import Express from "../../../src/assets/homePage/Express.png";
import Ember from "../../../src/assets/homePage/ember.svg";
import ReactLogo from "../../../src/assets/homePage/react.svg";
import VueLogo from "../../../src/assets/homePage/vue.svg";
import NextLogo from "../../../src/assets/homePage/next.png";
import NuxtLogo from "../../../src/assets/homePage/nuxt.png";
import StrapiLogo from "../../../src/assets/homePage/Strapi.jpg";
import NodeLogo from "../../../src/assets/homePage/node.png";
import AngularLogo from "../../../src/assets/homePage/angular.png";
import Ruby from "../../../src/assets/homePage/Ruby.png";
import Doto from "../../../src/assets/homePage/DatoCMS.png";
import Prismic from "../../../src/assets/homePage/Prismic.png";
import storyBlock from "../../../src/assets/homePage/storyblok-seeklogo.png";
import Cockpit from "../../../src/assets/homePage/cockpit-cms.png";
const Headless = ({ apiRes, bullets }) => {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [isFullVisible, setIsFullVisible] = useState(false);
  const [bulletPoints, setbulletPoints] = useState([]);
  const [bulletPoints2, setbulletPoints2] = useState([]);

  const { ref: LogoInView, entry } = useInView({
    threshold: [0, 1], // 0 when starts appearing, 1 when fully visible
  });
  const { ref: EndInView, entry: checkEnd } = useInView({
    threshold: [0, 1], // 0 when starts appearing, 1 when fully visible
  });
  useEffect(() => {
    if (!checkEnd) return; // Ensure entry is available

    const { bottom } = checkEnd.boundingClientRect;
    // ✅ Proper check for bottom visibility
    setIsBottomVisible(bottom <= window.innerHeight && bottom >= 0);
  }, [checkEnd]);

  useEffect(() => {
    if (!entry) return; // Ensure entry is available

    const { top, bottom } = entry.boundingClientRect;

    // ✅ Check if the top is inside the viewport
    setIsTopVisible(top >= 0 && top <= window.innerHeight);

    // ✅ Check if threshold is 1 (element is fully visible)
    setIsFullVisible(entry.intersectionRatio === 1);

    // ✅ Check if bottom is visible
    setIsBottomVisible(bottom <= window.innerHeight && bottom >= 0);
  }, [entry]);
  useEffect(() => {
    const data =
      bullets[0].headless_section_sub_points?.map((item) => item.Title) || [];
    setbulletPoints(data);
  }, [apiRes]);
  useEffect(() => {
    const data2 =
      bullets[1].headless_section_sub_points?.map((item) => item.Title) || [];
    setbulletPoints2(data2);
  }, [apiRes]);
  const arrowRef = useRef(null);

  useEffect(() => {
    if (isTopVisible || isBottomVisible || isFullVisible) {
      gsap.fromTo(
        arrowRef.current,
        { strokeDasharray: "5, 5", strokeDashoffset: "300", opacity: 0 },
        {
          strokeDashoffset: "10",
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [isTopVisible, isBottomVisible, isFullVisible]);

  return (
    <>
      {/* Heading Section */}
      <section className={styles.HeadlessCMS}>
        <section className="px-6 md:px-0">
          <section
            style={{ position: "relative" }}
            className={`bg-[#FAFAFA] xl:px-10 3xl:mx-auto md:text-center 3xl:max-w-screen-xl ${styles.subsection}`}
          >
            <h2 className={styles.LandHeadingSectionHeading}>
              {apiRes.Heading ||
                "Discover the Power of <br /> Custom Development"}
            </h2>
            <p className={styles.LandHeadingSectionSubheading}>
              {apiRes.subHeading ||
                `Want a high-performing, user-friendly website? With our web
            development team, create a website that loads faster and looks
            unique.`}
            </p>
          </section>
          <section
            style={{ position: "relative" }}
            className="xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl"
          >
            <div className="outer-div  grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 items-center md:gap-6 gap-10 relative">
              <div className="left-div">
                <div className="flex flex-col items-start text-left md:mb-0">
                  <h3 className={styles.LandHeadlessh3}>
                    {apiRes.home_headless_cms_section_points[0].Heading ||
                      `Crafting Beautiful, Blazing-Fast Frontends`}
                  </h3>
                  <p className={styles.SecSubSection}>
                    {apiRes.home_headless_cms_section_points[0].subHeading ||
                      `Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.`}
                  </p>
                </div>
                <div
                  className={`${styles.LandBullets} grid md:grid-cols-2 w-full gap-2`}
                >
                  {bulletPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`col-span-1 transition-opacity duration-700 transform`}
                    >
                      <div className="bg-white rounded flex p-4 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="text-[#007fff] w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <p className={styles.LandBulletsSubheading}>{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="right-div relative md:w-[fit-content]">
                <div className="transform rotate-270 lg:rotate-340 grid grid-cols-4 grid-rows-5  gap-4 relative z-10">
                  <div className="col-start-2 w-full h-max flex md:justify-evenly transform md:rotate-19 rotate-90">
                    <img
                      id="top-two"
                      src={Sanity}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-3 w-full h-max flex justify-center md:justify-evenly  transform md:rotate-19 rotate-90">
                    <img
                      id="top-three"
                      src={StrapiLogo}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className=" "></div>
                  <div className="col-start-4 flex w-full h-max md:justify-evenly transform md:rotate-21 rotate-90">
                    <img
                      id="top-five"
                      src={Contentstack}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-4  row-start-3 flex justify-evenly transform md:rotate-21 rotate-90">
                    <img
                      id="top-six"
                      src={Contentful}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-4 row-start-4 flex justify-end  transform md:rotate-21 rotate-90">
                    <img
                      id="top-seven"
                      src={storyBlock}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-3 row-start-5 md:justify-evenly justify-center flex  transform md:rotate-21 rotate-90">
                    <img
                      id="top-four"
                      src={Prismic}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-2 row-start-5 justify-end flex transform md:rotate-21 rotate-90">
                    <img
                      id="top-one"
                      src={Doto}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-4 hidden transform md:rotate-21 rotate-90 md:flex">
                    <img
                      id="top-eight"
                      src={Cockpit}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={EndInView}
              className="outer-div grid p-2 grid-rows-1 lg:grid-cols-2 items-center md:grid-cols-1 md:gap-6 gap-10 relative"
            >
              <div className="left-div relative ">
                <div className="transform rotate-90 lg:rotate-136 grid grid-cols-4 grid-rows-5  gap-4 relative z-10">
                  <div className="col-start-2 w-full h-max flex md:justify-end transform md:rotate-224 rotate-90">
                    <img
                      id="bottom-two"
                      src={Svelte}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-3 w-full h-max flex md:justify-start justify-center transform md:rotate-224 rotate-90">
                    <img
                      id="bottom-three"
                      src={Ember}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className=" "></div>
                  <div className="col-start-4 w-full h-max flex transform md:rotate-224 rotate-270 justify-end ">
                    <img
                      id="bottom-five"
                      src={AngularLogo}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-4 w-full h-max row-start-3 flex md:justify-start justify-evenly transform md:rotate-224 rotate-270">
                    <img
                      id="bottom-six"
                      src={NuxtLogo}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-4 row-start-4 w-full h-max flex md:justify-start transform md:rotate-224 rotate-270">
                    <img
                      id="bottom-seven"
                      src={VueLogo}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-3 row-start-5 w-full h-max justify-center md:justify-start flex  transform md:rotate-224 rotate-270">
                    <img
                      id="bottom-four"
                      src={ReactLogo}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-2 row-start-5 justify-end w-full h-max flex md:justify-start transform md:rotate-224 rotate-90">
                    <img
                      id="bottom-one"
                      src={Solid}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                  <div className="col-start-4 hidden transform md:rotate-224 w-full h-max rotate-90 md:flex md:justify-end">
                    <img
                      id="bottom-eight"
                      src={NodeLogo}
                      className={styles.BrandLogo}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="right-div relative z-10">
                <div className="flex flex-col items-start text-left  md:mb-0">
                  <h3 className={styles.SecH3up}>
                    {apiRes.home_headless_cms_section_points[1].Heading ||
                      `Before they sold out
                  <br className="hidden lg:inline-block" />
                  readymade gluten`}
                  </h3>
                  <p className={styles.LandHeadingSectionSubheading}>
                    {apiRes.home_headless_cms_section_points[1].subHeading ||
                      `Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.`}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 w-full gap-2">
                  {bulletPoints2.map((point, index) => (
                    <div
                      key={index}
                      className={`col-span-1 transition-opacity duration-700 transform`}
                    >
                      <div className="bg-white rounded flex p-4 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="text-[#007fff] w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <p className={styles.LandBulletsSubheading}>{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Adjusted Arrows to Avoid Overlapping */}
            {isTopVisible && (
              <>
                <div className="absolute hidden md:block  top-0 left-0 w-full h-full -z-10">
                  {[
                    ["LoadingLogo", "top-one"],
                    ["LoadingLogo", "top-two"],
                    ["LoadingLogo", "top-four"],
                    ["LoadingLogo", "top-five"],
                    ["LoadingLogo", "top-six"],
                    ["LoadingLogo", "top-seven"],
                    ["LoadingLogo", "top-three"],
                    ["LoadingLogo", "top-eight"],
                  ].map(([start, end], index) => (
                    <Xarrow
                      key={index}
                      start={start}
                      end={end}
                      color="#0080ff"
                      showHead={false}
                      strokeWidth={2}
                      className="animated-arrow"
                      headSize={6}
                      animateDrawing={1}
                      dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                      curveness={0.8} // Adjust curvature to prevent overlapping
                    />
                  ))}
                </div>
                <div className="absolute md:hidden top-0 left-0 w-full h-full -z-10">
                  {[
                    ["LoadingLogo", "top-one"],
                    ["LoadingLogo", "top-two"],
                    ["LoadingLogo", "top-four"],
                    ["LoadingLogo", "top-five"],
                    ["LoadingLogo", "top-six"],
                    ["LoadingLogo", "top-seven"],
                    ["LoadingLogo", "top-three"],
                  ].map(([start, end], index) => (
                    <Xarrow
                      key={index}
                      start={start}
                      end={end}
                      color="#0080ff"
                      showHead={false}
                      strokeWidth={2}
                      className="animated-arrow"
                      headSize={6}
                      animateDrawing={1}
                      dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                      curveness={0.8} // Adjust curvature to prevent overlapping
                    />
                  ))}
                </div>
              </>
            )}
            {isFullVisible && (
              <>
                <div className="absolute hidden md:block top-0 left-0 w-full h-full -z-10">
                  {[
                    ["LoadingLogo", "top-one"],
                    ["LoadingLogo", "top-two"],
                    ["LoadingLogo", "top-three"],
                    ["LoadingLogo", "top-four"],
                    ["LoadingLogo", "top-five"],
                    ["LoadingLogo", "top-six"],
                    ["LoadingLogo", "top-seven"],
                    ["LoadingLogo", "top-eight"],
                    ["LoadingLogo", "bottom-one"],
                    ["LoadingLogo", "bottom-two"],
                    ["LoadingLogo", "bottom-three"],
                    ["LoadingLogo", "bottom-four"],
                    ["LoadingLogo", "bottom-five"],
                    ["LoadingLogo", "bottom-six"],
                    ["LoadingLogo", "bottom-seven"],
                    ["LoadingLogo", "bottom-eight"],
                  ].map(([start, end], index) => (
                    <Xarrow
                      key={index}
                      start={start}
                      end={end}
                      color="#0080ff"
                      showHead={false}
                      strokeWidth={2}
                      className="animated-arrow"
                      headSize={6}
                      animateDrawing={1}
                      dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                      curveness={0.8} // Adjust curvature to prevent overlapping
                    />
                  ))}
                </div>
                <div className="absolute md:hidden top-0 left-0 w-full h-full -z-10">
                  {[
                    ["LoadingLogo", "top-one"],
                    ["LoadingLogo", "top-two"],
                    ["LoadingLogo", "top-three"],
                    ["LoadingLogo", "top-four"],
                    ["LoadingLogo", "top-five"],
                    ["LoadingLogo", "top-six"],
                    ["LoadingLogo", "top-seven"],
                    ["LoadingLogo", "bottom-one"],
                    ["LoadingLogo", "bottom-two"],
                    ["LoadingLogo", "bottom-three"],
                    ["LoadingLogo", "bottom-four"],
                    ["LoadingLogo", "bottom-five"],
                    ["LoadingLogo", "bottom-six"],
                    ["LoadingLogo", "bottom-seven"],
                  ].map(([start, end], index) => (
                    <Xarrow
                      key={index}
                      start={start}
                      end={end}
                      color="#0080ff"
                      showHead={false}
                      strokeWidth={2}
                      className="animated-arrow"
                      headSize={6}
                      animateDrawing={1}
                      dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                      curveness={0.8} // Adjust curvature to prevent overlapping
                    />
                  ))}
                </div>
              </>
            )}
            {isBottomVisible && (
              <>
                <div className="hidden md:block absolute top-0 left-0 w-full h-full -z-10">
                  {[
                    ["LoadingLogo", "bottom-one"],
                    ["LoadingLogo", "bottom-two"],
                    ["LoadingLogo", "bottom-three"],
                    ["LoadingLogo", "bottom-four"],
                    ["LoadingLogo", "bottom-five"],
                    ["LoadingLogo", "bottom-six"],
                    ["LoadingLogo", "bottom-seven"],
                    ["LoadingLogo", "bottom-eight"],
                  ].map(([start, end], index) => (
                    <Xarrow
                      ref={arrowRef}
                      key={index}
                      start={start}
                      end={end}
                      showHead={false}
                      color="#0080ff"
                      strokeWidth={2}
                      className="animated-arrow"
                      headSize={6}
                      animateDrawing={1}
                      dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                      curveness={0.8} // Adjust curvature to prevent overlapping
                    />
                  ))}
                </div>

                <div className="md:hidden absolute top-0 left-0 w-full h-full -z-10">
                  {[
                    ["LoadingLogo", "bottom-one"],
                    ["LoadingLogo", "bottom-two"],
                    ["LoadingLogo", "bottom-three"],
                    ["LoadingLogo", "bottom-four"],
                    ["LoadingLogo", "bottom-five"],
                    ["LoadingLogo", "bottom-six"],
                    ["LoadingLogo", "bottom-seven"],
                  ].map(([start, end], index) => (
                    <Xarrow
                      ref={arrowRef}
                      key={index}
                      start={start}
                      end={end}
                      showHead={false}
                      color="#0080ff"
                      strokeWidth={2}
                      className="animated-arrow"
                      headSize={6}
                      animateDrawing={1}
                      dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                      curveness={0.8} // Adjust curvature to prevent overlapping
                    />
                  ))}
                </div>
              </>
            )}
            <img
              id="LoadingLogo"
              ref={LogoInView}
              style={{
                position: "absolute",
                height: "80px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              src={LoadingLogo}
              alt=""
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default Headless;
