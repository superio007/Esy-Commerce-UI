import React from "react";
import "../css/CertificationSlider.css";
const brands = [
  {
    src: "./src/assets/Aniversary.png",
    alt: "Aniversary.png",
    title: "Proven Track Record",
    text: "13+ years in business",
  },
  {
    src: "./src/assets/CMMI3.png",
    alt: "CMMI3.png",
    title: "Defined processes",
    text: "CMMI level 3 certified",
  },
  {
    src: "./src/assets/ISO.png",
    alt: "ISO.png",
    title: "Qulity Assured",
    text: "ISO 9001:2015 certified",
  },
  {
    src: "./src/assets/ISO27001.png",
    alt: "ISO27001.png",
    title: "Data Security Gauranteed",
    text: "ISO / IEC 27001:2013 certified",
  },
  {
    src: "./src/assets/IAF.png",
    alt: "IAF.png",
    title: "global accreditations",
    text: "IAS & IAF Certified",
  },
  {
    src: "./src/assets/microsoftGoldPartner.png",
    alt: "microsoftGoldPartner",
    title: "MICROSOFT GOLD PARTNER",
    text: "DATA ANALYTICS COMPETENCY",
  },
];
const Certification = () => {
  return (
    <>
      <div className="bg-[#fff] ">
        <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
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
