import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SteppedLineTo } from "react-lineto";
import "../css/Try.css";

const MappingLayout = () => {
  const [isMounted, setIsMounted] = useState(false);
  const linesRef = useRef([]);

  useEffect(() => {
    setIsMounted(true);

    // Animate lines appearing with fade-in
    gsap.fromTo(
      linesRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <section className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="outer-div grid grid-rows-1 grid-cols-2 gap-6 py-24">
          <div className="left-div">
            <h2 className="xl:text-6xl text-4xl pt-12 font-bold leading-tight text-center">
              Discover the Power of <br /> Custom Development
            </h2>
            <p className="leading-tight text-center">
              Want a high-performing, user-friendly website? With our web
              development team, create a website that loads faster and looks
              unique.
            </p>
          </div>
          <div className="right-div relative">
            <div className="grid grid-cols-4 grid-rows-2 gap-4 relative z-10">
              <div className="bg-white h-[100px] flex justify-center items-center top-one">
                1
              </div>
              <div className="bg-white h-[100px] flex justify-center items-center top-two">
                2
              </div>
              <div className="bg-white h-[100px] flex justify-center items-center top-three">
                3
              </div>
              <div className="bg-white h-[100px] flex justify-center items-center top-four">
                4
              </div>
              <div className="col-start-2 bg-white h-[100px] flex justify-center items-center top-five">
                5
              </div>
              <div className="col-start-3 bg-white h-[100px] flex justify-center items-center top-six">
                6
              </div>
            </div>
          </div>
        </div>
        <div className="outer-div grid grid-rows-1 grid-cols-2 gap-6 py-24">
          <div className="left-div relative">
            <div className="grid grid-cols-4 grid-rows-2 gap-4 relative z-10">
              <div className="col-start-2 bg-white h-[100px] flex justify-center items-center bottom-one">
                1
              </div>
              <div className="col-start-1 row-start-2 bg-white h-[100px] flex justify-center items-center bottom-two">
                2
              </div>
              <div className="col-start-3 row-start-1 bg-white h-[100px] flex justify-center items-center bottom-three">
                3
              </div>
              <div className="col-start-4 row-start-2 bg-white h-[100px] flex justify-center items-center bottom-four">
                4
              </div>
              <div className="col-start-2 row-start-2 bg-white h-[100px] flex justify-center items-center bottom-five">
                5
              </div>
              <div className="col-start-3 row-start-2 bg-white h-[100px] flex justify-center items-center bottom-six">
                6
              </div>
            </div>
          </div>
          <div className="right-div">
            <h2 className="xl:text-6xl text-4xl pt-12 font-bold leading-tight text-center">
              Discover the Power of <br /> Custom Development
            </h2>
            <p className="leading-tight text-center">
              Want a high-performing, user-friendly website? With our web
              development team, create a website that loads faster and looks
              unique.
            </p>
          </div>
        </div>

        {/* Render SteppedLineTo only after mounting and animate */}
        {isMounted && (
          <>
            {[
              ["top-one", "bottom-one"],
              ["top-two", "bottom-two"],
              ["top-three", "bottom-three"],
              ["top-four", "bottom-four"],
              ["top-five", "bottom-five"],
              ["top-six", "bottom-six"],
            ].map(([from, to], index) => (
              <div
                key={index}
                ref={(el) => (linesRef.current[index] = el)}
                style={{ opacity: 0 }}
              >
                <SteppedLineTo from={from} to={to} orientation="v" />
              </div>
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default MappingLayout;
