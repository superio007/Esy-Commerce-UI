import styles from "../../css/EcommerceConsultation.module.css";
import HeroSection from "../../components/services/Ecommerce/EcommerceConsultation/HeroSection";
import CTA from "../../components/services/Ecommerce/EcommerceConsultation/CTA";
import OverviewKeyBenifits from "../../components/services/Ecommerce/EcommerceConsultation/OverviewKeyBenifits";
import Steps from "../../components/services/Ecommerce/EcommerceConsultation/Steps";
import WhyUs from "../../components/services/Ecommerce/EcommerceConsultation/whyChooseUS";
import BrandSlider from "../../components/HomePage/CustomerSlider";
import CaseStudiesSection from "../../components/CaseStudies";
import FAQ from "../../components/services/Ecommerce/EcommerceConsultation/FAQ";
const EcommerceConsultation = () => {
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
export default EcommerceConsultation;
