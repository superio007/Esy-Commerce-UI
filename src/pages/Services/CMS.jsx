import styles from "../../css/CMS.module.css";
import HeroSection from "../../components/services/HeroSection";
import CTA from "../../components/services/CTA";
import OverviewKeyBenifits from "../../components/services/OverviewKeyBenifits";
import Steps from "../../components/services/Steps";
import WhyUs from "../../components/services/whyChooseUS";
import BrandSlider from "../../components/HomePage/CustomerSlider";
import CaseStudiesSection from "../../components/CaseStudies";
import FAQ from "../../components/services/FAQ";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CMSPageData from "../Data/CMSData.json";

const fetchCMSContent = async () => {
  const { data } = await axios.get(
    "https://whale-app-8hpek.ondigitalocean.app/api/cm?populate[service_hero_section][populate]=*&populate[service_over_view][populate]=*&populate[key_benift][populate]=*&populate[how_it_work][populate]=*&populate[why_us][populate]=*&populate[faq][populate]=*&populate[cta][populate]=*"
  );
  return data.data;
};
const CMS = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["CMSpage-content"],
    queryFn: fetchCMSContent,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? CMSPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {apiResponse ? (
        <>
          <HeroSection apiRes={apiResponse.service_hero_section} />
          <OverviewKeyBenifits
            overview={apiResponse.service_over_view}
            keyBenifits={apiResponse.key_benift}
          />
          <Steps apiRes={apiResponse.how_it_work} />
          <WhyUs apiRes={apiResponse.why_us} />
          <BrandSlider />
          <CaseStudiesSection bgColor={"#ffffff"} />
          <FAQ apiRes={apiResponse.faq} />
          <CTA apiRes={apiResponse.cta} />
        </>
      ) : (
        <div>No data available</div>
      )}
    </>
  );
};
export default CMS;
