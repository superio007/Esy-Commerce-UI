import HeaderAboutSection from "../components/AboutPage/HeaderAboutSection";
import AboutCta from "../components/AboutPage/AboutCta"
import CoreValues from "../components/AboutPage/CoreValues";
import CertificateSlider from "../components/HomePage/CertificationSlider"
const About = () => {
  return (
    <>
      <HeaderAboutSection />
      <CoreValues />
      <CertificateSlider BackColor={"#fafafa"}/>
      <AboutCta />
    </>
  );
};
export default About;
