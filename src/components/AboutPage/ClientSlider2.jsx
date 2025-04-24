import { Parallax } from "react-scroll-parallax";
import C2P from "../../../src/assets/AboutPage/C2P.png";
import Joshi from "../../../src/assets/AboutPage/Johi.png";
import JollyDesign from "../../../src/assets/AboutPage/JollyDesign.png";
import Realxwell from "../../../src/assets/AboutPage/Realxwell.png";
import SleepyOwl from "../../../src/assets/AboutPage/Sleepy_Owl.png";
import StylistWardrobe from "../../../src/assets/AboutPage/Stylist_Wardrobe.png";
import Vahdam from "../../../src/assets/AboutPage/Vahdam.png";
import VibrantLiving from "../../../src/assets/AboutPage/Vibrant_Living.png";
import CustomerSliderRev from "../HomePage/CustomerSliderRev.jsx";

const ClientParallax = ({ Slider }) => {
  return (
    <div className="md:pt-6 xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl overflow-hidden">
      <div className="md:block hidden">
        <Parallax translateX={["0%", "-50%"]}>
          <div className="flex justify-evenly gap-10  relative">
            <img src={StylistWardrobe} className="w-[150px]" alt="C2P" />

            <img src={Vahdam} className="w-[150px]" alt="C2P" />

            <img src={C2P} className="w-[150px]" alt="C2P" />

            <img src={Joshi} className="w-[150px]" alt="Joshi" />

            <img src={JollyDesign} className="w-[150px]" alt="JollyDesign" />

            <img src={Realxwell} className="w-[150px]" alt="Realxwell" />

            <img src={SleepyOwl} className="w-[150px]" alt="SleepyOwl" />

            <img src={VibrantLiving} className="w-[150px]" alt="C2P" />
          </div>
        </Parallax>
      </div>
      <div className="md:hidden">
        <CustomerSliderRev CustomerSlider={Slider} />
      </div>
    </div>
  );
};

export default ClientParallax;
