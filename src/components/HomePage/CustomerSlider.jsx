import { React, useEffect, useState } from "react";
import "./css/CustomerSlider.css"; // Import CSS
import { useLocation } from "react-router-dom";
const landingBrandslider = ({ CustomerSlider }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const data =
      CustomerSlider?.Images?.map((item) => ({
        src: item.url,
        alt: item.alternativeText,
      })) || [];
    setBrands(data);
  }, [CustomerSlider]);
  const location = useLocation();
  // Adjust the path to match your contact page route
  const isContactPage = location.pathname === "/contact";
  return (
    <div className={isContactPage ? "bg-[#fafafa]" : "bg-[fff]"}>
      <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <div
          className=" brand-slider-container"
          // style={{ backgroundColor: "#f6f3ff", borderTop: "1px solid #e2d9ff" }}
        >
          {/* Scrolling Brand Logos */}
          <div className="brand-slider">
            <div className="slider-track">
              {[...brands, ...brands].map((brand, index) => (
                <div className="slide" key={index}>
                  <img src={`${brand.src}`} alt={brand.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingBrandslider;
