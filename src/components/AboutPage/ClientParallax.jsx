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
    <div className="p-6 xl:px-10 py-10 3xl:mx-auto 3xl:max-w-screen-xl overflow-hidden">
      <div className="flex justify-evenly gap-10 py-6 relative">
        <Parallax translateX={["55px", "-55px"]} className=" w-[800px] h-[60px]">
          <img src={StylistWardrobe} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["80px", "-80px"]} className=" w-[800px] h-[60px]">
          <img src={Vahdam} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["100px", "-100px"]} className=" w-[800px] h-[60px]">
          <img src={C2P} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["150px", "-150px"]} className=" w-[800px] h-[60px]">
          <img src={Joshi} className="w-[500px]" alt="Joshi" />
        </Parallax>
        <Parallax translateX={["200px", "-200px"]} className=" w-[800px] h-[60px]">
          <img src={JollyDesign} className="w-[500px]" alt="JollyDesign" />
        </Parallax>
        <Parallax translateX={["250px", "-250px"]} className=" w-[800px] h-[60px]">
          <img src={Realxwell} className="w-[500px]" alt="Realxwell" />
        </Parallax>
        <Parallax translateX={["300px", "-300px"]} className=" w-[800px] h-[60px]">
          <img src={SleepyOwl} className="w-[500px]" alt="SleepyOwl" />
        </Parallax>
        <Parallax translateX={["350px", "-350px"]} className=" w-[800px] h-[60px]">
          <img src={VibrantLiving} className="w-[500px]" alt="C2P" />
        </Parallax>
      </div>
      <div className="flex justify-evenly gap-10 py-6 relative">
        <Parallax translateX={["-55px", "55px"]} className=" w-[800px] h-[60px]">
          <img src={StylistWardrobe} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["-80px", "80px"]} className=" w-[800px] h-[60px]">
          <img src={Vahdam} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["-100px", "100px"]} className=" w-[800px] h-[60px]">
          <img src={C2P} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax translateX={["-150px", "150px"]} className=" w-[800px] h-[60px]">
          <img src={Joshi} className="w-[500px]" alt="Joshi" />
        </Parallax>
        <Parallax translateX={["-200px", "200px"]} className=" w-[800px] h-[60px]">
          <img src={JollyDesign} className="w-[500px]" alt="JollyDesign" />
        </Parallax>
        <Parallax translateX={["-250px", "250px"]} className=" w-[800px] h-[60px]">
          <img src={Realxwell} className="w-[500px]" alt="Realxwell" />
        </Parallax>
        <Parallax translateX={["-300px", "300px"]} className=" w-[800px] h-[60px]">
          <img src={SleepyOwl} className="w-[500px]" alt="SleepyOwl" />
        </Parallax>
        <Parallax translateX={["-350px", "350px"]} className=" w-[800px] h-[60px]">
          <img src={VibrantLiving} className="w-[500px]" alt="C2P" />
        </Parallax>
      </div>
    </div>
  );
};

export default ClientParallax;
