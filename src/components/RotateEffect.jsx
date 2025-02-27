import { useParallax } from "react-scroll-parallax";
import "../css/RotateEffect.css";
import loadingLogo from "../assets/loadingLogo.png";
import Wordpress from "../assets/wordpress.png";
import drupal from "../assets/drupal.png";
import magento from "../assets/magento.png";
import joomla from "../assets/social.png";

const RotateEffect = () => {
  const parallax = useParallax({
    rotate: [0, 360], // Rotate effect while scrolling
  });

  return (
    <div ref={parallax.ref} className="spinner">
      <img src={loadingLogo} alt="loadingLogo.png" className="w-[90px]" />
      <div className="diamond">
        <img src={Wordpress} alt="" />
      </div>
      <div className="clown">
        <img src={drupal} alt="" />
      </div>
      <div className="money">
        <img src={joomla} alt="" />
      </div>
      <div className="hand">
        <img src={magento} alt="" />
      </div>
    </div>
  );
};

export default RotateEffect;
