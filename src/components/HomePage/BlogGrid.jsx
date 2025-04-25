import React, { useEffect, useRef, useState } from "react";
import styles from "./css/BlogGrid.module.scss"; // Ensure CSS file is included
import Logo from "../../assets/homePage/LogoWhite.png";
import Thumbnail from "../../assets/homePage/thumbnail.jpg"; // Example thumbnail image
import VideoThumb from "../../assets/homePage/VideoThumbNail.jpg"; // Example video thumbnail image
import VideoThumb2 from "../../assets/homePage/VideoThumbNail2.jpg"; // Example video thumbnail image
import VideoThumb3 from "../../assets/homePage/VideoThumbNail3.jpg"; // Example video thumbnail image
const BlogGrid = () => {
  return (
    <>
      <section className="bg-[#007fff] relative">
        <div className={styles.BlogGridSection}>
          <div className="absolute inset-0 w-full h-full -z-10"></div>
          <section
            id="HeadingSection"
            className="relative xl:px-12  3xl:mx-auto 3xl:max-w-screen-xl"
          >
            <h2 className={`${styles.LandBlogHeading} text-center`}>
              Our Blogs
            </h2>
          </section>
          <div
            style={{ scrollbarWidth: "none" }}
            className="relative xl:px-12 p-6 md:flex md:justify-center 3xl:mx-auto 3xl:max-w-screen-xl overflow-x-auto"
          >
            <div
              id="overFlow"
              style={{
                minWidth: "1024px",
                width: "1024px", // Adjust this value to match or exceed your full grid width
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
                  src={VideoThumb}
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
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
