import styles from "../css/Homepage.module.css";
import HeroSection from "../components/HomePage/HeroSection";
import BulletPoints from "../components/HomePage/BulletPoints";
import CustomerSlider from "../components/HomePage/CustomerSlider";
import Certification from "../components/HomePage/CertificationSlider";
import BlogGrid from "../components/HomePage/BlogGrid";
import Testimonial from "../components/HomePage/Testimonial";
import Headless from "../components/HomePage/HeadlessCms";
import CMS from "../components/HomePage/Cms";
const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Brand Slider */}
      <CustomerSlider />
      {/* Bullet Points */}
      <BulletPoints />
      {/* CMS Section */}
      <CMS />
      {/* Headless Cms section */}
      <Headless />
      {/* Blog Grid */}
      <BlogGrid />
      {/* Testimonial */}
      <Testimonial />
      {/* Awards & Certification */}
      <Certification BackColor={"#fff"}/>
    </>
  );
};
export default HomePage;
