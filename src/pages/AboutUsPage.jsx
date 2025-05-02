import HeaderAboutSection from "../components/AboutPage/HeaderAboutSection";
import { useEffect, useState } from "react";
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
import CustomerSliderRev from "../components/HomePage/CustomerSliderRev";
import CustomerSlider from "../components/HomePage/CustomerSlider";
import ClientSlider from "../components/AboutPage/ClientSlider";
import ClientSlider2 from "../components/AboutPage/ClientSlider2";
import styles from "../css/AboutUs.module.scss";
const fetchAboutContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/about-page?populate[certifications][populate]=*&populate[about_hero_section][populate]=*&populate[about_why_us][populate]=*&populate[about_us_core_value][populate]=*&populate[about_team_section][populate]=*&populate[about_cta][populate]=*&populate[team_members][populate]=*&populate[about_us_core_values_points][populate]=*&populate[customer_slider][populate]=*&populate[customer_slider_rev][populate]=*&populate[ClientSlider][populate]=*&populate[ClientSlider_Rev][populate]=*"
  );
  return data.data;
};
const About = () => {
  // const [apiResponse, setApiResponse] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["Aboutpage-content"],
    queryFn: fetchAboutContent,
    initialData: AboutPageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  const apiResponse = error ? AboutPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeaderAboutSection apiRes={apiResponse.about_hero_section} />
      <ClientWorkSection
        heading={apiResponse.about_why_us}
        points={apiResponse.about_hero_section.about_why_us_points}
      />
      <div className={styles.AboutSliders}>
        <CustomerSlider CustomerSlider={apiResponse.customer_slider} />
        <CustomerSliderRev CustomerSlider={apiResponse.customer_slider_rev} />
      </div>
      <CoreValues
        coreValues={apiResponse.about_us_core_values_points}
        CoreHeading={apiResponse.about_us_core_value}
      />
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
