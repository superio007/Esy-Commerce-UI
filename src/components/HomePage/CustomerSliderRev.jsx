import { React, useEffect, useState } from "react";
import styles from "./css/CustomerSliderRev.module.css";
import { useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const CustomerSliderRev = ({ CustomerSlider }) => {
  const [brands, setBrands] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const controls = useAnimation();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    const data =
      CustomerSlider?.Images?.map((item) => ({
        src: item.url,
        alt: item.alternativeText,
      })) || [];
    setBrands(data);
  }, [CustomerSlider]);

  useEffect(() => {
    let loaded = 0;
    const total = brands.length;
    if (total === 0) return;

    brands.forEach((brand) => {
      const img = new Image();
      img.src = brand.src;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === total) {
          setImagesLoaded(true);
        }
      };
    });
  }, [brands]);

  useEffect(() => {
    if (imagesLoaded) {
      controls.start({
        x: ["-50%", "0%"], // 🔁 Opposite direction
        transition: {
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        },
      });
    }
  }, [imagesLoaded, controls]);

  return (
    <div className={isContactPage ? "bg-[#fafafa]" : ""}>
      <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className={styles.brandslidercontainer}>
          <div className={styles.brandslider}>
            <motion.div
              className={styles.slidertrack}
              animate={controls}
              initial={{ x: "-50%" }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div className={styles.slide} key={index}>
                  <img src={brand.src} alt={brand.alt} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSliderRev;
