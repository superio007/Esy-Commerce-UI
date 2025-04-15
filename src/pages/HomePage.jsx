import styles from "../css/Homepage.module.css";
import HeroSection from "../components/HomePage/HeroSection";
import BulletPoints from "../components/HomePage/BulletPoints";
import CustomerSlider from "../components/HomePage/CustomerSlider";
import Certification from "../components/HomePage/CertificationSlider";
import BlogGrid from "../components/HomePage/BlogGrid";
import Testimonial from "../components/HomePage/Testimonial";
import Headless from "../components/HomePage/HeadlessCms";
import Headless2 from "../components/HomePage/HeadlessCms2";
import CMS from "../components/HomePage/Cms";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import HomePageData from "../Data/HomeData.json";

const fetchHomeContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/home-page?populate[home_herosection][populate]=*&populate[customer_slider][populate]=*&populate[home_bullet_section][populate]=*&populate[home_service_section][populate]=*&populate[home_headless_cms_section][populate]=*&populate[home_testamonial_section][populate]=*&populate[certifications][populate]=*"
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
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? HomePageData.data || [] : data || [];
  console.log(apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className={styles.HomePage}>
        {/* Hero Section */}
        <HeroSection
          heading={apiResponse.home_herosection.Heading}
          subHeading={apiResponse.home_herosection.subHeading}
        />
        {/* Brand Slider */}
        <div className="md:pt-6">
          <CustomerSlider CustomerSlider={apiResponse.customer_slider} />
        </div>
        {/* Bullet Points */}
        <BulletPoints apiRes={apiResponse.home_bullet_section} />
        {/* CMS Section */}
        <CMS apiRes={apiResponse.home_service_section} />
        {/* Headless Cms section */}
        {/* <Headless apiRes={apiResponse.home_headless_cms_section} /> */}
        <Headless2 apiRes={apiResponse.home_headless_cms_section} />
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
