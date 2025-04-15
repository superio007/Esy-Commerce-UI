import React, { useEffect, useRef, useState } from "react";
import styles from "./css/BlogGrid.module.css"; // Ensure CSS file is included
import Logo from "../../assets/homePage/LogoWhite.png";
import New from "../../assets/homePage/blog6.jpg"
import Thumbnail from "../../assets/homePage/thumbnail.jpg"; // Example thumbnail image
import VideoThumb from "../../assets/homePage/videoThumb.avif"; // Example video thumbnail image
import VideoThumb2 from "../../assets/homePage/videoThumb2.avif"; // Example video thumbnail image
import VideoThumb3 from "../../assets/homePage/videoThumb3.avif"; // Example video thumbnail image
const BlogGrid = () => {
  return (
    <>
      <section className="bg-[#007fff] relative md:py-16 py-8">
        <div className="absolute inset-0 w-full h-full -z-10"></div>

        {/* Content on top of the Vanta background */}
        <section
          id="HeadingSection"
          className="relative xl:px-12 md:pb-10 pb-5 3xl:mx-auto 3xl:max-w-screen-xl"
        >
          <h2
            className={`${styles.LandBlogHeading} xl:text-6xl text-4xl font-bold leading-tight text-center`}
          >
            Our Blogs
          </h2>
        </section>
        <div
          style={{ scrollbarWidth: "none" }}
          className="relative xl:px-12 p-6 3xl:mx-auto 3xl:max-w-screen-xl overflow-x-auto"
        >
          <div
            id="overFlow"
            style={{
              minWidth: "1024px", // Adjust this value to match or exceed your full grid width
              display: "grid",
            }}
            className="grid grid-cols-5 grid-rows-7 gap-4"
          >
            <div className={`${styles.blogGrid} row-span-4`}>
              <img
                src={Thumbnail}
                className=" blogThumbnail rounded-2xl"
                alt=""
              />
            </div>
            <div
              className={`${styles.blogGrid} col-span-2 row-span-3 col-start-1 row-start-5`}
            >
              <img
                src={VideoThumb3}
                className="rounded-2xl blogThumbnail flex w-full h-full"
                alt=""
              />
            </div>
            <div
              className={`${styles.blogGrid} col-span-3 row-span-4 col-start-2 row-start-1`}
            >
              <img
                src={New}
                className="rounded-2xl blogThumbnail w-full object-cover"
                alt=""
              />
            </div>
            <div
              className={`${styles.blogGrid} row-span-3 col-start-5 row-start-1`}
            >
              <img src={Logo} className="rounded-2xl" alt="" />
            </div>
            <div
              className={`${styles.blogGrid} col-span-2 row-span-3 col-start-3 row-start-5`}
            >
              <img
                src={VideoThumb2}
                className="rounded-2xl blogThumbnail w-full h-full"
                alt=""
              />
            </div>
            <div
              className={`${styles.blogGrid} row-span-4 col-start-5 row-start-4`}
            >
              <img
                src={Thumbnail}
                className=" blogThumbnail rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
