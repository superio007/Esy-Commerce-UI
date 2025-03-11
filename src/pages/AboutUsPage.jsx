import HeaderAboutSection from "../components/AboutPage/HeaderAboutSection";
import AboutCta from "../components/AboutPage/AboutCta";
import CoreValues from "../components/AboutPage/CoreValues";
import CertificateSlider from "../components/HomePage/CertificationSlider";
import { ParallaxProvider } from "react-scroll-parallax";
import ClientWorkSection from "../components/AboutPage/ClientWork";
import ClientParallax from "../components/AboutPage/ClientParallax";
// import Timeline from "../components/AboutPage/Timeline";
import TeamSection from "../components/AboutPage/TeamMembers";
const About = () => {
  return (
    <>
      <HeaderAboutSection />
      <ClientWorkSection />
      <ParallaxProvider>
        <ClientParallax />
      </ParallaxProvider>
      <CoreValues />
      {/* <Timeline /> */}
      <TeamSection />
      <CertificateSlider BackColor={"#fafafa"} />
      <AboutCta />
    </>
  );
};
export default About;
