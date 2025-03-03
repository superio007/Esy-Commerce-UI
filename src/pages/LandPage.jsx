import "../css/Homepage.css";
import HeroSection from "../components/HeroSection";
import BulletPoints from "../components/BulletPoints";
import CustomerSlider from "../components/CustomerSlider";
import Certification from "../components/CertificationSlider";
import BlogGrid from "../components/BlogGrid";
import Testimonial from "../components/Testimonial";
import Headless from "../components/HeadlessCms";
import CMS from "../components/Cms";
const LandPage = () => {
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
      <Certification />
    </>
  );
};
export default LandPage;
