import React, { useState, useEffect } from "react";
import Xarrow from "react-xarrows";
import gsap from "gsap";
import "../css/Try.css";
import loadingLogo from "../assets/loadingLogo.png";
import Wordpress from "../assets/wordpress.png";
import drupal from "../assets/drupal.png";
import magento from "../assets/magento.png";
import joomla from "../assets/social.png";

const MappingLayout = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Animate arrows using GSAP draw effect while keeping dotted style
    gsap.fromTo(
      ".animated-arrow",
      { strokeDasharray: "5, 5", strokeDashoffset: "300", opacity: 0 },
      {
        strokeDashoffset: "0",
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
      <section className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="outer-div grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1  gap-6 py-24 relative">
          <div className="left-div">
            <div className=" lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
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
          <div className="right-div relative">
            <div className="grid grid-cols-4 grid-rows-2 gap-4 relative z-10">
              <div className="  w-[max-content]">
                <img id="top-one" src={Wordpress} className="h-[80px]" alt="" />
              </div>
              <div className="  w-[max-content]">
                <img id="top-two" src={drupal} className="h-[80px]" alt="" />
              </div>
              <div className="  w-[max-content]">
                <img id="top-three" src={joomla} className="h-[80px]" alt="" />
              </div>
              <div className="  w-[max-content]">
                <img
                  id="top-four"
                  src={loadingLogo}
                  className="h-[80px]"
                  alt=""
                />
              </div>
              <div className="col-start-2   w-[max-content]">
                <img id="top-five" src={magento} className="h-[80px]" alt="" />
              </div>
              <div className="col-start-3   w-[max-content]">
                <img id="top-six" src={Wordpress} className="h-[80px]" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="outer-div grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 gap-6 py-24 relative">
          <div className="left-div relative">
            <div className="grid grid-cols-4 grid-rows-2 gap-4 relative z-10">
              <div className="col-start-2   w-[max-content]">
                <img
                  id="bottom-one"
                  src={Wordpress}
                  className="h-[80px]"
                  alt=""
                />
              </div>
              <div className="col-start-1 row-start-2   w-[max-content]">
                <img id="bottom-two" src={drupal} className="h-[80px]" alt="" />
              </div>
              <div className="col-start-3 row-start-1   w-[max-content]">
                <img
                  id="bottom-three"
                  src={loadingLogo}
                  className="h-[80px]"
                  alt=""
                />
              </div>
              <div className="col-start-4 row-start-2   w-[max-content]">
                <img
                  id="bottom-four"
                  src={Wordpress}
                  className="h-[80px]"
                  alt=""
                />
              </div>
              <div className="col-start-2 row-start-2   w-[max-content]">
                <img
                  id="bottom-five"
                  src={magento}
                  className="h-[80px]"
                  alt=""
                />
              </div>
              <div className="col-start-3 row-start-2   w-[max-content]">
                <img id="bottom-six" src={joomla} className="h-[80px]" alt="" />
              </div>
            </div>
          </div>
          <div className="right-div relative z-10">
            <div className=" lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
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
        </div>

        {/* Adjusted Arrows to Avoid Overlapping */}
        {isMounted && (
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            {[
              ["top-one", "bottom-two", "red"],
              ["top-two", "bottom-five", "blue"],
              ["top-three", "bottom-three", "green"],
              ["top-four", "bottom-four", "purple"],
              ["top-five", "bottom-one", "orange"],
              ["top-six", "bottom-six", "black"],
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
      </section>
    </>
  );
};

export default MappingLayout;
