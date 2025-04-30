import { Parallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import styles from "../HomePage/css/CustomerSlider.module.css";
import CustomerSlider from "../HomePage/CustomerSlider";

const ClientParallax = ({ Slider }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const data =
      Slider?.Images?.map((item) => ({
        src: item.url,
        alt: item.alternativeText,
      })) || [];
    setBrands(data);
  }, [Slider]);
  return (
    <div className="md:pb-6 xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl overflow-hidden">
      <div className="md:block hidden">
        <Parallax translateX={["0%", "50%"]}>
          <div className="flex justify-evenly gap-10  relative">
            {[...brands, ...brands].map((brand, index) => (
              <div className={styles.slide} key={index}>
                <img src={brand.src} alt={brand.alt} />
              </div>
            ))}
          </div>
        </Parallax>
      </div>
      <div className="md:hidden">
        <CustomerSlider CustomerSlider={Slider} />
      </div>
    </div>
  );
};

export default ClientParallax;
