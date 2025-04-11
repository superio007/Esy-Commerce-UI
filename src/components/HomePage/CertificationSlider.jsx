import { React, useState, useEffect } from "react";
import "./css/CertificationSlider.css";
const Certification = ({ BackColor, CertificationSlider }) => {
  const [brands, setBrands] = useState([]);
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
  return (
    <>
      <div className="" style={{ backgroundColor: BackColor }}>
        <div className="xl:px-10 md:py-16 py-8 3xl:mx-auto 3xl:max-w-screen-xl">
          <div
            className="Certification-slider-container"
            // style={{ backgroundColor: "#f6f3ff", borderTop: "1px solid #e2d9ff" }}
          >
            {/* Scrolling Brand Logos */}
            <div className="brand-slider">
              <div className="slider-track">
                {[...brands, ...brands].map((brand, index) => (
                  <div className="slide" key={index}>
                    <div className="flex justify-center items-center">
                      <img src={`${brand.src}`} alt={brand.alt} />
                    </div>
                    <h3
                      style={{ textTransform: "uppercase", color: "#898888" }}
                    >
                      {brand.title}
                    </h3>
                    <p
                      style={{ textTransform: "capitalize", color: "#b9b9b9" }}
                    >
                      {brand.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Certification;
