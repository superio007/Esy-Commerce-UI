import styles from "../../css/CMS.module.css";
import HeroSection from "../../components/services/HeroSection";
import CTA from "../../components/services/CTA";
import OverviewKeyBenifits from "../../components/services/OverviewKeyBenifits";
import Steps from "../../components/services/Steps";
import WhyUs from "../../components/services/whyChooseUS";
import BrandSlider from "../../components/HomePage/CustomerSlider";
import CaseStudiesSection from "../../components/CaseStudies";
import FAQ from "../../components/services/FAQ";
const CMS = () => {
  return (
    <>
      <HeroSection />
      <OverviewKeyBenifits />
      <Steps />
      <WhyUs />
      <BrandSlider />
      <CaseStudiesSection bgColor={"#ffffff"} />
      <FAQ />
      <CTA />
    </>
  );
};
export default CMS;
