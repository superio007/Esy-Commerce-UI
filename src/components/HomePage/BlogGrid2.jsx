import React from "react";
import styles from "./css/BlogGrid.module.scss";
import VideoThumb from "../../assets/homePage/VideoThumbNail.jpg";
import VideoThumb2 from "../../assets/homePage/VideoThumbNail2.jpg";
import VideoThumb3 from "../../assets/homePage/VideoThumbNail3.jpg";

const BlogGrid = () => {
  const items = [
    VideoThumb2,
    VideoThumb3,
    VideoThumb,
    VideoThumb2,
    VideoThumb3,
    VideoThumb,
    VideoThumb3,
    VideoThumb,
    VideoThumb2,
    VideoThumb2,
    VideoThumb3,
    VideoThumb,
    VideoThumb2,
    VideoThumb3,
    VideoThumb,
    VideoThumb3,
    VideoThumb,
    VideoThumb2,
    VideoThumb2,
    VideoThumb3,
    VideoThumb,
    VideoThumb2,
    VideoThumb3,
    VideoThumb,
    VideoThumb3,
    VideoThumb,
    VideoThumb2,
  ];

  return (
    <section className="bg-[#007fff] relative py-12">
      <div className={styles.BlogGridSection}>
        <section
          id="HeadingSection"
          className="relative xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl"
        >
          <h2 className={`${styles.LandBlogHeading} text-center mb-8`}>
            Our Blogs
          </h2>
        </section>

        {/* Grid Layout */}
        <div className=" px-6 xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl overflow-x-auto">
          <div
            style={{
              display: "grid",
              gap: "10px",
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              gridAutoRows: "masonry",
            }}
          >
            {items.map((item, index) => (
              <div key={index}>
                <img
                  src={item}
                  alt={`Blog thumbnail ${index}`}
                  className="rounded-2xl w-full h-auto blogThumbnail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;

