import React, { useEffect, useRef, useState } from "react";
import styles from "./css/BlogGrid.module.scss"; // Ensure CSS file is included
import Logo from "../../assets/homePage/LogoWhite.png";
import Thumbnail from "../../assets/homePage/thumbnail.jpg"; // Example thumbnail image
import VideoThumb from "../../assets/homePage/VideoThumbNail.jpg"; // Example video thumbnail image
import VideoThumb2 from "../../assets/homePage/VideoThumbNail2.jpg"; // Example video thumbnail image
import VideoThumb3 from "../../assets/homePage/VideoThumbNail3.jpg"; // Example video thumbnail image
const BlogGrid2 = () => {
  return (
    <>
      <section className="bg-[#007fff] relative">
        <div className={styles.BlogGridSection}>
          <div className="absolute inset-0 w-full h-full -z-10"></div>
          <section
            id="HeadingSection"
            className="relative xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl"
          >
            <h2 className={`${styles.LandBlogHeading} text-center`}>
              Our Blogs
            </h2>
          </section>
          <div
            style={{ scrollbarWidth: "none" }}
            className="overflow-x-auto xl:px-12 p-6 3xl:mx-auto 3xl:max-w-screen-xl"
          >
            <div className="flex gap-8" style={{ minWidth: "fit-content" }}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="grid grid-cols-7 grid-rows-8 gap-4 min-w-[1024px]" // match the width to control overflow
                >
                  <div className="col-span-4 row-span-4 bg-blue-200 rounded-2xl flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div className="col-span-3 row-span-4 col-start-1 row-start-5 bg-red-200 rounded-2xl flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div className="col-span-3 row-span-4 col-start-5 row-start-1 bg-green-200 rounded-2xl flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div className="col-span-3 row-span-4 col-start-4 row-start-5 bg-yellow-200 rounded-2xl flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div className="row-span-4 col-start-7 row-start-5 bg-purple-200 rounded-2xl flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGrid2;
