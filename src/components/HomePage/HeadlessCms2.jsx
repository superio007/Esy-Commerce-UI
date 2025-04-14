import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Xarrow from "react-xarrows";
import gsap from "gsap";
import styles from "./css/HeadlessCms.module.css";
import LoadingLogo from "../../../src/assets/homePage/loadingLogo.png";
import Solid from "../../../src/assets/homePage/Solid.png";
import Contentful from "../../../src/assets/homePage/contentful.png";
import Sanity from "../../../src/assets/homePage/Sanity.png";
import Contentstack from "../../../src/assets/homePage/contentstack.png";
import Svelte from "../../../src/assets/homePage/Svelte.png";
import Express from "../../../src/assets/homePage/Express.png";
import Ember from "../../../src/assets/homePage/ember.svg";
import ReactLogo from "../../../src/assets/homePage/react.svg";
import VueLogo from "../../../src/assets/homePage/vue.png";
import NextLogo from "../../../src/assets/homePage/next.png";
import NuxtLogo from "../../../src/assets/homePage/nuxt.png";
import StrapiLogo from "../../../src/assets/homePage/Strapi.jpg";
import NodeLogo from "../../../src/assets/homePage/node.png";
import AngularLogo from "../../../src/assets/homePage/angular.png";
import Ruby from "../../../src/assets/homePage/Ruby.png";

const Headless = ({ apiRes }) => {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [isFullVisible, setIsFullVisible] = useState(false);

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
      <section className="md:py-16 py-8 px-6">
        <section
          style={{ position: "relative" }}
          id="HeadingSection"
          className="bg-[#FAFAFA] xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl"
        >
          <h2
            className={`${styles.LandHeadingSectionHeading} xl:text-6xl text-4xl font-bold leading-tight text-center`}
          >
            {apiRes.Heading ||
              "Discover the Power of <br /> Custom Development"}
          </h2>
          <p
            className={`leading-tight text-center ${styles.LandHeadingSectionSubheading}`}
          >
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
          <div className="outer-div p-2 grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 items-center gap-6 pt-12 relative">
            <div className="left-div">
              <div className="flex flex-col md:items-start md:text-left md:mb-0 items-center">
                <h3
                  className={`title-font md:text-left ${styles.LandHeadlessCMSHeading} text-center sm:text-4xl text-3xl mb-4 font-medium `}
                >
                  {apiRes.home_headless_cms_section_points[0].Heading ||
                    ` Before they sold out
                  <br className="hidden lg:inline-block" />
                  readymade gluten`}
                </h3>
                <p
                  className={`${styles.LandHeadlessCMSSubheading} mb-8 md:text-left text-center leading-relaxed`}
                >
                  {apiRes.home_headless_cms_section_points[0].subHeading ||
                    `Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.`}
                </p>
              </div>
            </div>
            <div className="right-div relative md:w-[fit-content]">
              <div className="transform rotate-270 md:rotate-340 grid grid-cols-4 grid-rows-5  gap-4 relative z-10">
                <div className="col-start-2  flex md:justify-end transform md:rotate-110 rotate-90">
                  <img
                    id="top-two"
                    src={StrapiLogo}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-3  flex justify-end md:justify-evenly  transform md:rotate-19 rotate-90">
                  <img
                    id="top-three"
                    src={NextLogo}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className=" "></div>
                <div className="col-start-4 flex  transform md:rotate-21 rotate-90">
                  <img
                    id="top-five"
                    src={Sanity}
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
                    src={Contentstack}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-3 row-start-5 md:justify-end  flex  transform md:rotate-21 rotate-90">
                  <img
                    id="top-four"
                    src={Express}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-2 row-start-5 justify-end flex transform md:rotate-21 rotate-90">
                  <img
                    id="top-one"
                    src={NodeLogo}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-4 hidden transform md:rotate-21 rotate-90 md:flex">
                  <img
                    id="top-eight"
                    src={Ruby}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            ref={EndInView}
            className="outer-div grid p-2 grid-rows-1 lg:grid-cols-2 items-center md:grid-cols-1 gap-6 relative"
          >
            <div className="left-div relative ">
              <div className="transform rotate-90 md:rotate-136 grid grid-cols-4 grid-rows-5  gap-4 relative z-10">
                <div className="col-start-2  flex md:justify-end transform md:rotate-224 rotate-90">
                  <img
                    id="bottom-two"
                    src={Svelte}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-3  flex md:justify-start justify-end transform md:rotate-224 rotate-90">
                  <img
                    id="bottom-three"
                    src={ReactLogo}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className=" "></div>
                <div className="col-start-4 flex transform md:rotate-224 rotate-270 justify-end ">
                  <img
                    id="bottom-five"
                    src={AngularLogo}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-4  row-start-3 flex justify-evenly transform md:rotate-224 rotate-270">
                  <img
                    id="bottom-six"
                    src={VueLogo}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-4 row-start-4 flex md:justify-start transform md:rotate-224 rotate-270">
                  <img
                    id="bottom-seven"
                    src={NuxtLogo}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-3 row-start-5 justify-end md:justify-start flex  transform md:rotate-224 rotate-270">
                  <img
                    id="bottom-four"
                    src={Ember}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-2 row-start-5 justify-end flex md:justify-start transform md:rotate-224 rotate-90">
                  <img
                    id="bottom-one"
                    src={Solid}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
                <div className="col-start-4 hidden transform md:rotate-224 rotate-90 md:flex md:justify-end">
                  <img
                    id="bottom-eight"
                    src={Ruby}
                    className={styles.BrandLogo}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="right-div relative z-10">
              <div className="flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
                <h3
                  className={`${styles.LandHeadlessCMSHeading} title-font md:text-left text-center sm:text-4xl text-3xl mb-4 font-medium`}
                >
                  {apiRes.home_headless_cms_section_points[1].Heading ||
                    `Before they sold out
                  <br className="hidden lg:inline-block" />
                  readymade gluten`}
                </h3>
                <p
                  className={`${styles.LandHeadlessCMSSubheading} mb-8 md:text-left text-center leading-relaxed`}
                >
                  {apiRes.home_headless_cms_section_points[1].subHeading ||
                    `Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.`}
                </p>
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
    </>
  );
};

export default Headless;
