import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./css/BlogGrid.module.css"; // Ensure CSS file is included

const BlogGrid = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  // Use react-intersection-observer to track visibility
  const { ref, inView } = useInView({
    triggerOnce: false, // Re-initializes when entering viewport
    threshold: 0.3, // Adjust how much should be visible to trigger
  });

  useEffect(() => {
    if (
      inView &&
      !vantaEffect &&
      vantaRef.current &&
      window.VANTA &&
      window.THREE
    ) {
      setVantaEffect(
        window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xb3b3b3,
          shininess: 0.0,
          waveHeight: 16.5,
          waveSpeed: 1.7,
          zoom: 1.75,
          THREE: window.THREE, // Use global THREE
        })
      );
    }

    // Destroy Vanta.js when component leaves viewport
    if (!inView && vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }
  }, [inView, vantaEffect]);

  return (
    <section ref={ref} className="relative  xl:py-12">
      {/* The Vanta.js background will be applied here */}
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full -z-10"
      ></div>

      {/* Content on top of the Vanta background */}
      <section
        id="HeadingSection"
        className="relative xl:px-12 p-6 3xl:mx-auto 3xl:max-w-screen-xl"
      >
        <h2 className={`${styles.LandBlogHeading} xl:text-6xl text-4xl font-bold leading-tight text-center`}>
          Our Blogs
        </h2>
      </section>
      <div
        style={{ scrollbarWidth: "none" }}
        className="relative xl:px-12 p-6 3xl:mx-auto 3xl:max-w-screen-xl overflow-x-auto"
      >
        <div
          id="overFlow"
          className="grid grid-cols-5 grid-rows-6 gap-8 min-w-[800px] flex-shrink-0"
        >
          <div className={`${styles.blogGrid} row-span-4 bg-[#007fff] rounded-2xl text-white h-[350px]`}>
            1
          </div>
          <div className={`${styles.blogGrid} col-span-3 row-span-4 bg-[#007fff] rounded-2xl text-white`}>
            2
          </div>
          <div className={`${styles.blogGrid} row-span-4 col-start-5 row-start-3 bg-[#007fff] rounded-2xl text-white`}>
            3
          </div>
          <div className={`${styles.blogGrid} row-span-2 col-start-5 row-start-1 bg-[#007fff] rounded-2xl text-white`}>
            4
          </div>
          <div className={`${styles.blogGrid} col-span-2 row-span-2 col-start-3 row-start-5 bg-[#007fff] rounded-2xl text-white`}>
            5
          </div>
          <div className={`${styles.blogGrid} col-span-2 row-span-2 col-start-1 row-start-5 bg-[#007fff] rounded-2xl text-white`}>
            6
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
