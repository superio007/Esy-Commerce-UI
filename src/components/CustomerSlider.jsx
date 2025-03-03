import React from "react";
import "../css/CustomerSlider.css"; // Import CSS

const brands = [
  { src: "./src/assets/Archana_Rao.png", alt: "" },
  { src: "./src/assets/C2P.png", alt: "" },
  { src: "./src/assets/Clensta.png", alt: "" },
  { src: "./src/assets/Johi.png", alt: "" },
  { src: "./src/assets/Realxwell.png", alt: "" },
  { src: "./src/assets/Rovectin.png", alt: "" },
  { src: "./src/assets/Sleepy_Owl.png", alt: "" },
  { src: "./src/assets/Stylist_Wardrobe.png", alt: "" },
  { src: "./src/assets/The_Good_Leaf.png", alt: "" },
  { src: "./src/assets/Vahdam.png", alt: "" },
  { src: "./src/assets/Vibrant_Living.png", alt: "" },
];

const landingBrandslider = () => {
  return (
    <div className="bg-white">
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
