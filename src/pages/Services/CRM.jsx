import styles from "../../css/CRM.module.css";
import HeroSection from "../../components/services/HeroSection";
import CTA from "../../components/services/CTA";
import OverviewKeyBenifits from "../../components/services/OverviewKeyBenifits";
import Steps from "../../components/services/Steps";
import WhyUs from "../../components/services/whyChooseUS";
import BrandSlider from "../../components/HomePage/CustomerSlider";
import CaseStudiesSection from "../../components/services/CaseStudies";
import FAQ from "../../components/services/FAQ";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CRMPageData from "../Data/CRMData.json";
import { useEffect } from "react";
const fetchCRMContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/crm?populate[service_hero_section][populate]=*&populate[service_over_view][populate]=*&populate[key_benift][populate]=*&populate[how_it_work][populate]=*&populate[why_us][populate][why_us_points][populate]=*&populate[faq][populate]=*&populate[cta][populate]=*&populate[customer_slider][populate]=*"
  );
  return data.data;
};
const CRM = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["CRMpage-content"],
    queryFn: fetchCRMContent,
    // initialData: CRMPageData.data,
    // initialDataUpdatedAt: 0, // 👈 Forces background API call
    // staleTime: 1000 * 60 * 60, // 1 hour
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
  });
useEffect(() => {
  window.scrollTo(0, 0);
}, [data]);
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? CRMPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {apiResponse ? (
        <>
          <HeroSection
            title={apiResponse.service_hero_section.Title}
            heading={
              apiResponse.service_hero_section.service_hero_section_headings
            }
            subHeading={apiResponse.service_hero_section.SubHeading}
            headline={apiResponse.service_hero_section.FormHeading}
            Cta={apiResponse.service_hero_section.FormCTA}
            apiRes={apiResponse.service_hero_section}
          />
          <OverviewKeyBenifits
            overview={apiResponse.service_over_view}
            keyBenifits={apiResponse.key_benift}
          />
          <Steps apiRes={apiResponse.how_it_work} />
          <WhyUs apiRes={apiResponse.why_us} />
          <div className="mt-5 md:mt-10">
            <BrandSlider CustomerSlider={apiResponse.customer_slider} />
          </div>
          {/* <CaseStudiesSection bgColor={"#ffffff"} /> */}
          <FAQ apiRes={apiResponse.faq} />
          <CTA apiRes={apiResponse.cta} />
        </>
      ) : (
        <div>No data available</div>
      )}
    </>
  );
};
export default CRM;
