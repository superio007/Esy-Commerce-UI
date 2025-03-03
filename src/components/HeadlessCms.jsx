import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Xarrow from "react-xarrows";
import gsap from "gsap";
import "../css/HeadlessCms.css";
import LoadingLogo from "../assets/loadingLogo.png";
import Solid from "../assets/Solid.png";
import Contentful from "../assets/contentful.png";
import Sanity from "../assets/Sanity.png";
import Contentstack from "../assets/contentstack.png";
import Svelte from "../assets/Svelte.png";
import Express from "../assets/Express.png";
import Ember from "../assets/ember.svg";
import ReactLogo from "../assets/react.svg";
import VueLogo from "../assets/vue.png";
import NextLogo from "../assets/next.png";
import NuxtLogo from "../assets/nuxt.png";
import StrapiLogo from "../assets/Strapi.jpg";
import NodeLogo from "../assets/node.png";
import AngularLogo from "../assets/angular.png";

const Headless = () => {
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
  }, [checkEnd])
  
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
      <section className="py-18">
        <section
          style={{ position: "relative" }}
          id="HeadingSection"
          className="bg-[#FAFAFA] xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl"
        >
          <h2
            className={`Land-HeadingSection-Heading xl:text-6xl text-4xl font-bold leading-tight text-center`}
          >
            Discover the Power of <br /> Custom Development
          </h2>
          <p
            className={`leading-tight text-center Land-HeadingSection-Subheading`}
          >
            Want a high-performing, user-friendly website? With our web
            development team, create a website that loads faster and looks
            unique.
          </p>
        </section>
        <section
          style={{ position: "relative" }}
          className="xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl"
        >
          <div className="outer-div p-2 grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 items-center gap-6 pt-12 pb-12 relative">
            <div className="left-div">
              <div className="flex flex-col md:items-start md:text-left md:mb-0 items-center">
                <h3 className="title-font md:text-left Land-HeadlessCMS-Heading text-center sm:text-4xl text-3xl mb-4 font-medium ">
                  Before they sold out
                  <br className="hidden lg:inline-block" />
                  readymade gluten
                </h3>
                <p className="Land-HeadlessCMS-Subheading mb-8 md:text-left text-center leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
            </div>
            <div className="right-div relative md:w-[fit-content]">
              <div className="grid grid-cols-4 grid-rows-4  gap-4 relative z-10">
                <div className="  flex justify-end">
                  <img
                    id="top-one"
                    src={NodeLogo}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="  flex justify-end">
                  <img
                    id="top-two"
                    src={StrapiLogo}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="  flex justify-end">
                  <img
                    id="top-three"
                    src={NextLogo}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="  flex justify-center">
                  <img
                    id="top-four"
                    src={Express}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="col-start-4 flex justify-end">
                  <img
                    id="top-five"
                    src={Sanity}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="col-start-4  row-start-3 flex justify-end">
                  <img
                    id="top-six"
                    src={Contentful}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="col-start-4 row-start-4 flex justify-end">
                  <img
                    id="top-seven"
                    src={Contentstack}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            ref={EndInView}
            className="outer-div grid p-2 grid-rows-1 lg:grid-cols-2 items-center md:grid-cols-1 gap-6 pt-12 relative"
          >
            <div className="left-div relative ">
              <div className="grid grid-cols-4 grid-rows-4 gap-4 ">
                <div>
                  <img
                    id="bottom-one"
                    src={Svelte}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="row-start-2">
                  <img
                    id="bottom-two"
                    src={ReactLogo}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="row-start-3">
                  <img
                    id="bottom-three"
                    src={AngularLogo}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="row-start-4 flex justify-center">
                  <img
                    id="bottom-four"
                    src={VueLogo}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="row-start-4">
                  <img
                    id="bottom-five"
                    src={NuxtLogo}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="row-start-4">
                  <img
                    id="bottom-six"
                    src={Ember}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
                <div className="row-start-4">
                  <img
                    id="bottom-seven"
                    src={Solid}
                    className="BrandLogo"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="right-div relative z-10">
              <div className="flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
                <h3 className="Land-HeadlessCMS-Heading title-font md:text-left text-center sm:text-4xl text-3xl mb-4 font-medium ">
                  Before they sold out
                  <br className="hidden lg:inline-block" />
                  readymade gluten
                </h3>
                <p className="Land-HeadlessCMS-Subheading mb-8 md:text-left text-center leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
            </div>
          </div>
          {/* Adjusted Arrows to Avoid Overlapping */}
          {isTopVisible && (
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              {[
                ["LoadingLogo", "top-one", "red"],
                ["LoadingLogo", "top-two", "orange"],
                ["LoadingLogo", "top-three", "yellow"],
                ["LoadingLogo", "top-four", "green"],
                ["LoadingLogo", "top-five", "blue"],
                ["LoadingLogo", "top-six", "indigo"],
                ["LoadingLogo", "top-seven", "violet"],
              ].map(([start, end, color], index) => (
                <Xarrow
                  key={index}
                  start={start}
                  end={end}
                  color={color}
                  strokeWidth={2}
                  className="animated-arrow"
                  headSize={6}
                  animateDrawing={1}
                  dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                  curveness={
                    start.includes("top") === end.includes("top") ? 1 : 0.5
                  } // Adjust curvature to prevent overlapping
                />
              ))}
            </div>
          )}
          {isFullVisible && (
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              {[
                ["LoadingLogo", "top-one", "red"],
                ["LoadingLogo", "top-two", "orange"],
                ["LoadingLogo", "top-three", "yellow"],
                ["LoadingLogo", "top-four", "green"],
                ["LoadingLogo", "top-five", "blue"],
                ["LoadingLogo", "top-six", "indigo"],
                ["LoadingLogo", "top-seven", "violet"],
                ["LoadingLogo", "bottom-one", "red"],
                ["LoadingLogo", "bottom-two", "orange"],
                ["LoadingLogo", "bottom-three", "yellow"],
                ["LoadingLogo", "bottom-four", "green"],
                ["LoadingLogo", "bottom-five", "blue"],
                ["LoadingLogo", "bottom-six", "indigo"],
                ["LoadingLogo", "bottom-seven", "violet"],
              ].map(([start, end, color], index) => (
                <Xarrow
                  key={index}
                  start={start}
                  end={end}
                  color={color}
                  strokeWidth={2}
                  className="animated-arrow"
                  headSize={6}
                  animateDrawing={1}
                  dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                  curveness={
                    start.includes("top") === end.includes("top") ? 1 : 0.5
                  } // Adjust curvature to prevent overlapping
                />
              ))}
            </div>
          )}
          {isBottomVisible && (
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              {[
                ["LoadingLogo", "bottom-one", "red"],
                ["LoadingLogo", "bottom-two", "orange"],
                ["LoadingLogo", "bottom-three", "yellow"],
                ["LoadingLogo", "bottom-four", "green"],
                ["LoadingLogo", "bottom-five", "blue"],
                ["LoadingLogo", "bottom-six", "indigo"],
                ["LoadingLogo", "bottom-seven", "violet"],
              ].map(([start, end, color], index) => (
                <Xarrow
                  ref={arrowRef}
                  key={index}
                  start={start}
                  end={end}
                  color={color}
                  strokeWidth={2}
                  className="animated-arrow"
                  headSize={6}
                  animateDrawing={1}
                  dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                  curveness={
                    start.includes("top") === end.includes("top") ? 1 : 0.5
                  } // Adjust curvature to prevent overlapping
                />
              ))}
            </div>
          )}
          <img
            id="LoadingLogo"
            ref={LogoInView}
            style={{
              position: "absolute",
              height: "80px",
              top: "45%",
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
