import React, { useEffect, useState } from "react";
import styles from "./css/TeamSection.module.scss";

const TeamSection = ({ apiRes }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (apiRes && apiRes[0]?.TeamImages) {
      const imageUrls = apiRes[0].TeamImages.map((item) => item.url);
      setImages(imageUrls);
    }
  }, [apiRes]);

  return (
    <>
      <section className="hidden md:block bg-[#007fff] relative">
        <div className={styles.BlogGridSection}>
          <div className="absolute inset-0 w-full h-full -z-10" />

          <div
            className="relative p-6 overflow-y-auto w-full"
            style={{
              minHeight: "600px",
              maxHeight: "60vh",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            <div
              style={{
                columnCount: 4,
                columnGap: "16px",
              }}
              className="w-full"
            >
              {images.map((url, index) => (
                <div
                  key={index}
                  style={{ breakInside: "avoid", marginBottom: "16px" }}
                >
                  <img
                    src={url}
                    className={`${styles.blogGrid} rounded-2xl w-full object-contain`}
                    alt={`team-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="md:hidden bg-[#007fff] relative">
        <div className={styles.BlogGridSection}>
          <div className="absolute inset-0 w-full h-full -z-10" />

          <div
            className="relative p-4 overflow-y-auto w-full"
            style={{
              minHeight: "600px",
              maxHeight: "100vh",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            <div className="w-full masonry-container">
              {images.map((url, index) => (
                <div
                  key={index}
                  style={{ breakInside: "avoid", marginBottom: "16px" }}
                >
                  <img
                    src={url}
                    className={`${styles.blogGrid} rounded-2xl w-full object-cover`}
                    alt={`team-${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
