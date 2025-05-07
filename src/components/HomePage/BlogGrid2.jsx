import React, { useEffect, useRef } from "react";
import styles from "./css/BlogGrid.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/homePage/LogoWhite.png";
import Thumbnail from "../../assets/homePage/thumbnail.jpg";
import VideoThumb from "../../assets/homePage/VideoThumbNail.jpg";
import VideoThumb2 from "../../assets/homePage/VideoThumbNail2.jpg";
import VideoThumb3 from "../../assets/homePage/VideoThumbNail3.jpg";

const BlogGrid = () => {


  const renderGrid = () => (
    <div
      style={{ minWidth: "1024px", width: "1024px", display: "grid" }}
      className="grid grid-cols-5 grid-rows-7 gap-4"
    >
      <div className={`${styles.blogGrid} row-span-4`}>
        <Link to={"/blogs/ai-is-not-taking-away-your-jobs"}>
          <img src={Thumbnail} className="blogThumbnail rounded-2xl" alt="" />
        </Link>
      </div>
      <div
        className={`${styles.blogGrid} col-span-2 row-span-3 col-start-1 row-start-5`}
      >
        <Link
          to={
            "/blogs/ai-is-going-nuclear-why-tech-giants-are-turning-to-nuclear-power"
          }
        >
          <img
            src={VideoThumb3}
            className="rounded-2xl blogThumbnail w-full h-full"
            alt=""
          />
        </Link>
      </div>
      <div
        className={`${styles.blogGrid} col-span-3 row-span-4 col-start-2 row-start-1`}
      >
        <Link
          to={
            "/blogs/why-india-will-never-create-chatgpt-openai-o1-preview-india-vs-silicon-valley-in-ai-development"
          }
        >
          <img
            src={VideoThumb}
            className="rounded-2xl blogThumbnail w-full object-cover"
            alt=""
          />
        </Link>
      </div>
      <div className={`${styles.blogGrid} row-span-3 col-start-5 row-start-1`}>
        <img src={Logo} className="rounded-2xl" alt="" />
      </div>
      <div
        className={`${styles.blogGrid} col-span-2 row-span-3 col-start-3 row-start-5`}
      >
        <Link to={"/blogs/the-real-winner-of-ai"}>
          <img
            src={VideoThumb2}
            className="rounded-2xl blogThumbnail w-full h-full"
            alt=""
          />
        </Link>
      </div>
      <div className={`${styles.blogGrid} row-span-4 col-start-5 row-start-4`}>
        <Link to={"/blogs/ai-is-not-taking-away-your-jobs"}>
          <img src={Thumbnail} className="blogThumbnail rounded-2xl" alt="" />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="bg-[#007fff] relative">
      <div className={styles.BlogGridSection}>
        <div className="absolute inset-0 w-full h-full -z-10"></div>

        {/* Scrollable horizontally */}
        <div
          className="relative xl:px-12 p-6 overflow-x-auto w-full"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          <div
            className="flex gap-4 w-max"
            style={{
              minWidth: "1024px",
            }}
          >
            {renderGrid()}
            {renderGrid()}{" "}
            {/* Optional: remove second renderGrid() if no repeat is needed */}
          </div>
        </div>
      </div>
    </section>
  );

};

export default BlogGrid;
