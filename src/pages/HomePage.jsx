import styles from "../css/Homepage.module.css";
import HeroSection from "../components/HomePage/HeroSection";
import BulletPoints from "../components/HomePage/BulletPoints";
import CustomerSlider from "../components/HomePage/UniSlider";
import Certification from "../components/HomePage/CertificationSlider";
import BlogGrid from "../components/HomePage/BlogGrid";
import Testimonial from "../components/HomePage/Testimonial";
// import Headless from "../components/HomePage/HeadlessCms";
import Headless2 from "../components/HomePage/HeadlessCms2";
import CMS from "../components/HomePage/Cms";
import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import HomePageData from "../Data/HomeData.json";

const fetchHomeContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/home-page?populate[certifications][populate]=*&populate[customer_slider][populate]=*&populate[home_herosection][populate]=*&populate[home_bullet_section][populate]=*&populate[home_service_section][populate]=*&populate[home_headless_cms_section][populate][home_headless_cms_section_points][populate]=*&populate[home_testamonial_section][populate][home_testamonials_points][populate]=*"
  );
  return data.data;
};
const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Homepage-content"],
    queryFn: fetchHomeContent,
    initialData: HomePageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? HomePageData.data || [] : data || [];
  // console.log(apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className={styles.HomePage}>
        {/* Hero Section */}
        <HeroSection
          title={apiResponse.home_herosection.title}
          heading={apiResponse.home_herosection.home_herosection_headings}
          subHeading={apiResponse.home_herosection.subHeading}
          headline={apiResponse.home_herosection.FormHeading}
          Cta={apiResponse.home_herosection.FormCTA}
        />
        {/* Brand Slider */}
        <div className="md:py-6">
          <CustomerSlider CustomerSlider={apiResponse.customer_slider} />
        </div>
        {/* Bullet Points */}
        <BulletPoints apiRes={apiResponse.home_bullet_section} />
        {/* CMS Section */}
        <CMS apiRes={apiResponse.home_service_section} />
        {/* Headless Cms section */}
        {/* <Headless apiRes={apiResponse.home_headless_cms_section} /> */}
        <Headless2
          bullets={
            apiResponse.home_headless_cms_section
              .home_headless_cms_section_points
          }
          apiRes={apiResponse.home_headless_cms_section}
        />
        {/* Testimonial */}
        <Testimonial apiRes={apiResponse.home_testamonial_section} />
        {/* Blog Grid */}
        <BlogGrid />
        {/* Awards & Certification */}
        <Certification
          BackColor={"#fff"}
          CertificationSlider={apiResponse.certifications}
        />
      </div>
    </>
  );
};
export default HomePage;
