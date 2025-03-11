import HeaderAboutSection from "../components/AboutPage/HeaderAboutSection";
import AboutCta from "../components/AboutPage/AboutCta";
import CoreValues from "../components/AboutPage/CoreValues";
import CertificateSlider from "../components/HomePage/CertificationSlider";
import { ParallaxProvider } from "react-scroll-parallax";
import ClientWorkSection from "../components/AboutPage/ClientWork";
import ClientParallax from "../components/AboutPage/ClientParallax";
const About = () => {
  return (
    <>
      <HeaderAboutSection />
      <ClientWorkSection />
      <ParallaxProvider>
        <ClientParallax />
      </ParallaxProvider>
      <CoreValues />
      <CertificateSlider BackColor={"#fafafa"} />
      <AboutCta />
    </>
  );
};
export default About;
