import { React, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./css/CertificationSlider.css";

const Certification = ({ BackColor, CertificationSlider }) => {
  const [brands, setBrands] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const data =
      CertificationSlider?.map((item) => ({
        src: item.CertificateImage.url,
        alt: item.CertificateImage.alternativeText,
        title: item.Heading,
        text: item.subHeading,
      })) || [];
    setBrands(data);
  }, [CertificationSlider]);

  // Image load detection
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

  // Animate once all images are loaded
  useEffect(() => {
    if (imagesLoaded) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        },
      });
    }
  }, [imagesLoaded, controls]);

  return (
    <div className="" style={{ backgroundColor: BackColor }}>
      <div className="xl:px-10 md:py-16 py-8 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="Certification-slider-container">
          <div className="brand-slider">
            <motion.div
              className="slider-track"
              animate={controls}
              initial={{ x: "0%" }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div className="slide" key={index}>
                  <div className="flex justify-center items-center">
                    <img src={brand.src} alt={brand.alt} />
                  </div>
                  <h3 style={{ textTransform: "uppercase", color: "#898888" }}>
                    {brand.title}
                  </h3>
                  <p style={{ textTransform: "capitalize", color: "#b9b9b9" }}>
                    {brand.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
