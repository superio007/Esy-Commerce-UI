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
        <div className="diamond">
          <img className="img" src={Wordpress} alt="WordPress Logo" />
        </div>
        <div className="clown">
          <img className="img" src={drupal} alt="Drupal Logo" />
        </div>
        <div className="money">
          <img className="img" src={joomla} alt="Joomla Logo" />
        </div>
        <div className="hand">
          <img className="img" src={magento} alt="Magento Logo" />
        </div>
      </div>
    </div>
  );
};

export default RotateEffect;
