import HeaderAboutSection from "../components/AboutPage/HeaderAboutSection";
import AboutCta from "../components/AboutPage/AboutCta";
import CoreValues from "../components/AboutPage/CoreValues";
import CertificateSlider from "../components/HomePage/CertificationSlider";
import { ParallaxProvider } from "react-scroll-parallax";
import ClientWorkSection from "../components/AboutPage/ClientWork";
import ClientParallax from "../components/AboutPage/ClientParallax";
import TeamSection from "../components/AboutPage/TeamMembers";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AboutPageData from "../Data/AboutData.json";

const fetchAboutContent = async () => {
  const { data } = await axios.get(
    "https://whale-app-8hpek.ondigitalocean.app/api/about-page?populate[about_hero_section][populate]=*&populate[about_why_us][populate]=*&populate[about_us_core_value][populate]=*&populate[about_team_section][populate]=*&populate[certifications][populate]=*&populate[about_cta][populate]=*&populate[team_members][populate]=*"
  );
  return data.data;
};
const About = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Aboutpage-content"],
    queryFn: fetchAboutContent,
  });
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? AboutPageData.data || [] : data || [];
  console.log("API Response:", apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeaderAboutSection apiRes={apiResponse.about_hero_section} />
      <ClientWorkSection
        heading={apiResponse.about_why_us}
        points={apiResponse.about_hero_section.about_why_us_points}
      />
      <ParallaxProvider>
        <ClientParallax />
      </ParallaxProvider>
      <CoreValues coreValues={apiResponse.about_us_core_value} />
      <TeamSection
        TeamMembers={apiResponse.team_members}
        heading={apiResponse.about_team_section.Heading}
        subHeading={apiResponse.about_team_section.subHeading}
      />
      <CertificateSlider
        BackColor={"#fafafa"}
        CertificationSlider={apiResponse.certifications}
      />
      <AboutCta heading={apiResponse.about_cta.Heading} />
    </>
  );
};
export default About;
