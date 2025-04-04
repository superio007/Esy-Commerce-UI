import styles from "../css/Homepage.module.css";
import HeroSection from "../components/HomePage/HeroSection";
import BulletPoints from "../components/HomePage/BulletPoints";
import CustomerSlider from "../components/HomePage/CustomerSlider";
import Certification from "../components/HomePage/CertificationSlider";
import BlogGrid from "../components/HomePage/BlogGrid";
import Testimonial from "../components/HomePage/Testimonial";
import Headless from "../components/HomePage/HeadlessCms";
import CMS from "../components/HomePage/Cms";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import HomePageData from "../Data/HomeData.json";

const fetchHomeContent = async () => {
  const { data } = await axios.get(
    "https://whale-app-8hpek.ondigitalocean.app/api/home-page?populate[home_herosection][populate]=*&populate[customer_slider][populate]=*&populate[home_bullet_section][populate]=*&populate[home_service_section][populate]=*&populate[home_headless_cms_section][populate]=*&populate[home_testamonial_section][populate]=*&populate[certifications][populate]=*"
  );
  return data.data;
};
const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Homepage-content"],
    queryFn: fetchHomeContent,
  });
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? HomePageData.data || [] : data || [];
  console.log(apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        heading={apiResponse.home_herosection.Heading}
        subHeading={apiResponse.home_herosection.subHeading}
      />
      {/* Brand Slider */}
      <CustomerSlider CustomerSlider={apiResponse.customer_slider} />
      {/* Bullet Points */}
      <BulletPoints apiRes={apiResponse.home_bullet_section} />
      {/* CMS Section */}
      <CMS apiRes={apiResponse.home_service_section} />
      {/* Headless Cms section */}
      <Headless apiRes={apiResponse.home_headless_cms_section} />
      {/* Blog Grid */}
      <BlogGrid />
      {/* Testimonial */}
      <Testimonial apiRes={apiResponse.home_testamonial_section} />
      {/* Awards & Certification */}
      <Certification
        BackColor={"#fff"}
        CertificationSlider={apiResponse.certifications}
      />
    </>
  );
};
export default HomePage;
