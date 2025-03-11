import { Parallax } from "react-scroll-parallax";
import C2P from "./assets/C2P.png";
import Joshi from "./assets/Johi.png";
import JollyDesign from "./assets/JollyDesign.png";
import Realxwell from "./assets/Realxwell.png";
import SleepyOwl from "./assets/Sleepy_Owl.png";
import StylistWardrobe from "./assets/Stylist_Wardrobe.png";
import Vahdam from "./assets/Vahdam.png";
import VibrantLiving from "./assets/Vibrant_Living.png";

const ClientParallax = () => {
  return (
    <div className="p-6 xl:px-10 py-16 3xl:mx-auto 3xl:max-w-screen-xl overflow-hidden">
      <div className="flex justify-evenly gap-10 py-6 relative">
        <Parallax translateX={["55px", "-55px"]} className=" w-auto">
          <img src={StylistWardrobe} className="w-[455px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["80px", "-80px"]} className=" w-auto">
          <img src={Vahdam} className="w-[455px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["100px", "-100px"]} className=" w-auto">
          <img src={C2P} className="w-[455px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["150px", "-150px"]} className=" w-auto">
          <img src={Joshi} className="w-[455px]" alt="Joshi" />
        </Parallax>
        <Parallax translateX={["200px", "-200px"]} className=" w-auto">
          <img src={JollyDesign} className="w-[455px]" alt="JollyDesign" />
        </Parallax>
        <Parallax translateX={["250px", "-250px"]} className=" w-auto">
          <img src={Realxwell} className="w-[455px]" alt="Realxwell" />
        </Parallax>
        <Parallax translateX={["300px", "-300px"]} className=" w-auto">
          <img src={SleepyOwl} className="w-[455px]" alt="SleepyOwl" />
        </Parallax>
        <Parallax translateX={["350px", "-350px"]} className=" w-auto">
          <img src={VibrantLiving} className="w-[455px]" alt="C2P" />
        </Parallax>
      </div>
      <div className="flex justify-evenly gap-10 py-6 relative">
        <Parallax translateX={["-55px", "55px"]} className=" w-auto">
          <img src={StylistWardrobe} className="w-[455px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["-80px", "80px"]} className=" w-auto">
          <img src={Vahdam} className="w-[455px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["-100px", "100px"]} className=" w-auto">
          <img src={C2P} className="w-[455px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["-150px", "150px"]} className=" w-auto">
          <img src={Joshi} className="w-[455px]" alt="Joshi" />
        </Parallax>
        <Parallax translateX={["-200px", "200px"]} className=" w-auto">
          <img src={JollyDesign} className="w-[455px]" alt="JollyDesign" />
        </Parallax>
        <Parallax translateX={["-250px", "250px"]} className=" w-auto">
          <img src={Realxwell} className="w-[455px]" alt="Realxwell" />
        </Parallax>
        <Parallax translateX={["-300px", "300px"]} className=" w-auto">
          <img src={SleepyOwl} className="w-[455px]" alt="SleepyOwl" />
        </Parallax>
        <Parallax translateX={["-350px", "350px"]} className=" w-auto">
          <img src={VibrantLiving} className="w-[455px]" alt="C2P" />
        </Parallax>
      </div>
    </div>
  );
};

export default ClientParallax;
