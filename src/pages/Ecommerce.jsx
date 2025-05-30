import styles from "../css/Ecommerce.module.scss";
import { Link } from "react-router-dom";
import React,{ useEffect} from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ECommWebsiteDevelopment from "../assets/Services/EcomWebDev.lottie";
import ECommEnablement from "../assets/Services/EcomEnablement.lottie";
import ECommConsultation from "../assets/Services/EcommerceConsultation.lottie";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import EcommercePageData from "../Data/EcommerceData.json";
import CustomerSlider from "../components/HomePage/CustomerSlider";
import HeroSection from "../components/services/HeroSection";
const fetchEcommerceContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/ecommerce-page?populate[services_pages_points][populate]=*&populate[customer_slider][populate]=*&populate[service_page_hero_section][populate]=*"
  );
  return data.data;
};
const Ecommerce = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Ecommercepage-content"],
    queryFn: fetchEcommerceContent,
    // initialData: EcommercePageData.data,
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
  const apiResponse = error ? EcommercePageData.data || [] : data || [];
  // console.log(apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection
        title={apiResponse.service_page_hero_section.Title}
        heading={apiResponse.service_page_hero_section.service_page_headings}
        subHeading={apiResponse.service_page_hero_section.subHeading}
        headline={apiResponse.service_page_hero_section.FormHeading}
        Cta={apiResponse.service_page_hero_section.FormCTA}
      />
      <div className="bg-white">
        <div className={styles.EComm}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {/* Ecommerce Consultation (Performance) */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex  md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left  md:mb-0 ">
                    <h2 className={styles.ECommH2}>
                      {apiResponse.services_pages_points[0].title ||
                        "Ecommerce Consultation (Performance)"}
                    </h2>
                    <p className={styles.ECommp}>
                      {apiResponse.services_pages_points[0].description ||
                        `Our ecommerce consulting service is designed to optimize
                      your store’s performance and profitability. With over 13
                      years of industry experience, we help brands identify
                      growth opportunities, improve customer acquisition, and
                      increase conversion rates. From in-depth analytics to UX
                      audits and performance benchmarking, our strategic
                      insights ensure your ecommerce platform runs at peak
                      efficiency.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/ecommerce-consultation"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full mt-3 md:mt-0 md:w-1/2 flex justify-center">
                    <DotLottieReact src={ECommConsultation} loop autoplay />
                    {/* <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={ECommConsultation}
                    /> */}
                  </div>
                </div>
              </section>
              {/* Ecommerce Enablement Service  */}
              <section className={styles.DivSpace}>
                <div className="flex md:flex-row flex-col items-center">
                  <div className="w-full mt-3 md:mt-0 md:w-1/2 flex justify-center">
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={ECommEnablement}
                    /> */}
                    <DotLottieReact src={ECommEnablement} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left ">
                    <h1 className={styles.ECommH2Middle}>
                      {apiResponse.services_pages_points[1].title ||
                        "Ecommerce Enablement Service "}
                    </h1>
                    <p className={styles.ECommp}>
                      {apiResponse.services_pages_points[1].description ||
                        `We streamline ecommerce operations to help businesses
                      scale effortlessly. Our team works closely with you to
                      optimize inventory management, order fulfillment,
                      logistics, and customer service workflows. Whether you're
                      managing multiple sales channels or transitioning to D2C,
                      we’ll ensure your backend operations support seamless,
                      scalable growth.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/ecommerce-enablement"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Ecommerce Website Development (TechDev) */}
              <section>
                <div className="container mx-auto flex  md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left  md:mb-0 ">
                    <h2 className={styles.ECommH2}>
                      {apiResponse.services_pages_points[2].title ||
                        "Ecommerce Website Development (TechDev)"}
                    </h2>
                    <p className={styles.ECommp}>
                      {apiResponse.services_pages_points[2].description ||
                        `We build high-performance ecommerce websites that are
                      fast, secure, and built to convert. Our development team
                      specializes in custom WordPress, Shopify, and headless
                      ecommerce solutions tailored to your business needs. From
                      storefront design to backend integration with ERPs and
                      CRMs, we deliver robust technology that powers your brand
                      online.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/ecommerce-website-development"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full mt-3 md:mt-0 md:w-1/2 flex justify-center">
                    {/* <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={ECommWebsiteDevelopment}
                    /> */}
                    <DotLottieReact
                      src={ECommWebsiteDevelopment}
                      loop
                      autoplay
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <CustomerSlider CustomerSlider={apiResponse.customer_slider} />
      </div>
    </>
  );
};
export default Ecommerce;
