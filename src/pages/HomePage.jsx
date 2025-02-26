import "../css/Homepage.css";
import HeroSection from "../components/HeroSection";
import BulletPoints from "../components/BulletPoints";
import CustomerSlider from "../components/CustomerSlider";
import Certification from "../components/CertificationSlider";
import Testimonial from "../components/Testimonial";
import Headless from "../components/HeadlessCms";
import CMS from "../components/Cms"
const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Brand Slider */}
      <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <CustomerSlider />
      </div>
      {/* Bullet Points */}
      <BulletPoints />
      {/* CMS Section */}
      <CMS/>
      {/* Headless Cms section */}
      <Headless/>
      {/* Testimonial */}
      <Testimonial />
      {/* Awards & Certification */}
      <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
        <Certification />
      </div>
    </>
  );
};
export default HomePage;
