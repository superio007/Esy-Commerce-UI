import { useState, useEffect, useRef } from "react";
import styles from "../HomePage/css/CustomerSlider.module.css";
import CustomerSlider from "../HomePage/CustomerSlider";

const ClientParallax = ({ Slider, ClientSlider }) => {
  const [brands, setBrands] = useState([]);
  const trackRef = useRef(null);

  useEffect(() => {
    const data =
      ClientSlider?.Images?.map((item) => ({
        src: item.url,
        alt: item.alternativeText,
      })) || [];
    setBrands(data);
  }, [ClientSlider]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / maxScroll;

      const distance = trackRef.current?.scrollWidth / 2; // since we duplicate logos
      const translateX = -scrollProgress * distance;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:pb-6 xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl overflow-hidden">
      <div className="md:block hidden">
        <div className={styles.brandslider}>
          <div className={styles.slidertrack} ref={trackRef}>
            {[...brands, ...brands].map((brand, index) => (
              <div className={styles.slide} key={index}>
                <img src={brand.src} alt={brand.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <CustomerSlider CustomerSlider={Slider} />
      </div>
    </div>
  );
};

export default ClientParallax;
