import { useParallax } from "react-scroll-parallax";
import "./css/RotateEffect.css";
import loadingLogo from "../../../src/assets/homePage/loadingLogo.png";
import Wordpress from "../../../src/assets/homePage/wordpress.png";
import drupal from "../../../src/assets/homePage/drupal.png";
import magento from "../../../src/assets/homePage/magento.png";
import joomla from "../../../src/assets/homePage/social.png";

const RotateEffect = () => {
  const parallax = useParallax({
    rotate: [0, 360], // Rotate effect while scrolling
  });

  return (
    <div className="spinner border-effect">
      <img
        src={loadingLogo}
        id="centerLogo"
        alt="loadingLogo"
        className="h-[80px]"
      />
      <div ref={parallax.ref}>
        {/* Center logo (will not rotate) */}

        {/* Rotating elements */}
        <div className="Wordpress">
          <img className="img" src={Wordpress} alt="WordPress Logo" />
        </div>
        <div className="Drupal">
          <img className="img" src={drupal} alt="Drupal Logo" />
        </div>
        <div className="Joomla">
          <img className="img" src={joomla} alt="Joomla Logo" />
        </div>
        <div className="Magento">
          <img className="img" src={magento} alt="Magento Logo" />
        </div>
      </div>
    </div>
  );
};

export default RotateEffect;
