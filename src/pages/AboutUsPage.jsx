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
  // https://whale-app-8hpek.ondigitalocean.app/api/about-page?populate[about_hero_section][populate]=*&populate[about_why_us][populate]=*&populate[about_us_core_value][populate]=*&populate[about_team_section][populate]=*&populate[certifications][populate]=*&populate[about_cta][populate]=*
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
