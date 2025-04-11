import { useParallax } from "react-scroll-parallax";
import "./css/RotateEffect.css";
import loadingLogo from "../../../src/assets/homePage/loadingLogo.png";
import Wordpress from "../../../src/assets/homePage/wordpress.png";
import drupal from "../../../src/assets/homePage/drupal.png";
import magento from "../../../src/assets/homePage/magento.png";
import joomla from "../../../src/assets/homePage/social.png";

const RotateEffect = () => {
  const parallaxOuter = useParallax({
    rotate: [0, 360], // Rotate effect while scrolling
  });
  const parallaxSecondOuter = useParallax({
    rotate: [360, 0], // Rotate effect while scrolling
  });
  const parallaxSecondInner = useParallax({
    rotate: [0, 360], // Rotate effect while scrolling
  });
  return (
    <>
      <div className="spinner border-effect">
        <img
          src={loadingLogo}
          id="centerLogo"
          alt="loadingLogo"
          className="h-[80px]"
        />
        <div className="outer-rotation-container" ref={parallaxOuter.ref}>
          {/* Rotating elements */}
          <div className="element-one">
            <img className="img" src={Wordpress} alt="WordPress Logo" />
          </div>
          <div className="element-two">
            <img className="img" src={drupal} alt="Drupal Logo" />
          </div>
          <div className="element-three">
            <img className="img" src={joomla} alt="Joomla Logo" />
          </div>
          <div className="element-four">
            <img className="img" src={magento} alt="Magento Logo" />
          </div>
        </div>
        <div className="second-outer-container" ref={parallaxSecondOuter.ref}>
          {/* Rotating elements */}
          <div className="element-one">
            <img className="img" src={Wordpress} alt="WordPress Logo" />
          </div>
          <div className="element-two">
            <img className="img" src={drupal} alt="Drupal Logo" />
          </div>
          <div className="element-three">
            <img className="img" src={joomla} alt="Joomla Logo" />
          </div>
          <div className="element-four">
            <img className="img" src={magento} alt="Magento Logo" />
          </div>
        </div>
        <div className="second-inner-container" ref={parallaxSecondInner.ref}>
          {/* Rotating elements */}
          <div className="element-one">
            <img className="img" src={Wordpress} alt="WordPress Logo" />
          </div>
          <div className="element-two">
            <img className="img" src={drupal} alt="Drupal Logo" />
          </div>
          <div className="element-three">
            <img className="img" src={joomla} alt="Joomla Logo" />
          </div>
          <div className="element-four">
            <img className="img" src={magento} alt="Magento Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RotateEffect;
