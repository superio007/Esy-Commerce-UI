import styles from "../../css/LinkedinContentMarketing.module.css";
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
import LinkedinContentMarketingPageData from "../Data/LinkedinContentMarketingData.json";

const fetchLinkedinContentMarketingContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/linked-in-content-marketing?populate[service_hero_section][populate]=*&populate[service_over_view][populate]=*&populate[key_benift][populate]=*&populate[how_it_work][populate]=*&populate[why_us][populate]=*&populate[faq][populate]=*&populate[cta][populate]=*&populate[customer_slider][populate]=*"
  );
  return data.data;
};
const LinkedinContentMarketing = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["LinkedinContentMarketingpage-content"],
    queryFn: fetchLinkedinContentMarketingContent,
    // initialData: LinkedinContentMarketingPageData.data,
    // initialDataUpdatedAt: 0, // Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error
    ? LinkedinContentMarketingPageData.data || []
    : data || [];
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
          <BrandSlider CustomerSlider={apiResponse.customer_slider} />
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
export default LinkedinContentMarketing;
