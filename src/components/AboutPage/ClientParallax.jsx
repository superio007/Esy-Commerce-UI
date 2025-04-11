import { Parallax } from "react-scroll-parallax";
import C2P from "../../../src/assets/AboutPage/C2P.png";
import Joshi from "../../../src/assets/AboutPage/Johi.png";
import JollyDesign from "../../../src/assets/AboutPage/JollyDesign.png";
import Realxwell from "../../../src/assets/AboutPage/Realxwell.png";
import SleepyOwl from "../../../src/assets/AboutPage/Sleepy_Owl.png";
import StylistWardrobe from "../../../src/assets/AboutPage/Stylist_Wardrobe.png";
import Vahdam from "../../../src/assets/AboutPage/Vahdam.png";
import VibrantLiving from "../../../src/assets/AboutPage/Vibrant_Living.png";

const ClientParallax = () => {
  return (
    <div className="p-6 xl:px-10 md:py-16 py-8 3xl:mx-auto 3xl:max-w-screen-xl overflow-hidden">
      <div className="flex justify-evenly gap-10 py-8 relative">
        <Parallax
          translateX={["55px", "-55px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={StylistWardrobe} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax
          translateX={["80px", "-80px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={Vahdam} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax
          translateX={["100px", "-100px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={C2P} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax
          translateX={["150px", "-150px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={Joshi} className="w-[500px]" alt="Joshi" />
        </Parallax>
        <Parallax
          translateX={["200px", "-200px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={JollyDesign} className="w-[500px]" alt="JollyDesign" />
        </Parallax>
        <Parallax
          translateX={["250px", "-250px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={Realxwell} className="w-[500px]" alt="Realxwell" />
        </Parallax>
        <Parallax
          translateX={["300px", "-300px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={SleepyOwl} className="w-[500px]" alt="SleepyOwl" />
        </Parallax>
        <Parallax
          translateX={["350px", "-350px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={VibrantLiving} className="w-[500px]" alt="C2P" />
        </Parallax>
      </div>
      <div className="flex justify-evenly gap-10 py-8 relative">
        <Parallax
          translateX={["-55px", "55px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={StylistWardrobe} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax
          translateX={["-80px", "80px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={Vahdam} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax
          translateX={["-100px", "100px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={C2P} className="w-[500px]" alt="C2P" />
        </Parallax>
        <Parallax
          translateX={["-150px", "150px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={Joshi} className="w-[500px]" alt="Joshi" />
        </Parallax>
        <Parallax
          translateX={["-200px", "200px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={JollyDesign} className="w-[500px]" alt="JollyDesign" />
        </Parallax>
        <Parallax
          translateX={["-250px", "250px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={Realxwell} className="w-[500px]" alt="Realxwell" />
        </Parallax>
        <Parallax
          translateX={["-300px", "300px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={SleepyOwl} className="w-[500px]" alt="SleepyOwl" />
        </Parallax>
        <Parallax
          translateX={["-350px", "350px"]}
          className=" w-[800px] h-[60px]"
        >
          <img src={VibrantLiving} className="w-[500px]" alt="C2P" />
        </Parallax>
      </div>
    </div>
  );
};

export default ClientParallax;
