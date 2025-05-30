import styles from "../css/Development.module.scss";
import { Link } from "react-router-dom";
import React,{ useEffect} from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CMS from "../assets/Services/CMSoption.lottie";
import CRM from "../assets/Services/CRM.lottie";
import CustomDevelopment from "../assets/Services/CustomeDevelopment.lottie";
import StaffOffServices from "../assets/Services/StaffOffService.lottie";
import AiImplementation from "../assets/Services/AiImplementation.lottie";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DevelopmentPageData from "../Data/DevelopmentData.json";
import CustomerSlider from "../components/HomePage/CustomerSlider";
import HeroSection from "../components/services/HeroSection";
const fetchDevelopmentContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/development-page?populate[services_pages_points][populate]=*&populate[customer_slider][populate]=*&populate[service_page_hero_section][populate]=*"
  );
  return data.data;
};
const Development = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Developmentpage-content"],
    queryFn: fetchDevelopmentContent,
    // initialData: DevelopmentPageData.data,
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
  const apiResponse = error ? DevelopmentPageData.data || [] : data || [];
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
        <div className={styles.Development}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {/* AI Implementation*/}
              <section className={styles.DivSpace}>
                <div className="flex   md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    <DotLottieReact src={AiImplementation} loop autoplay />
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={StaffOffServices}
                    /> */}
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left ">
                    <h2 className={styles.DevelopmentH2Middle}>
                      {apiResponse.services_pages_points[0].title ||
                        "AI Implementation"}
                    </h2>
                    <p className={styles.Developmentp}>
                      {apiResponse.services_pages_points[0].description ||
                        ` Practical, business-aligned AI solutions that automate workflows, uncover insights, and scale with you—designed to deliver real results, not just promise potential.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/staff-off-services"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* CMS */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex  md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left  md:mb-0 ">
                    <h2 className={styles.DevelopmentH2}>
                      {apiResponse.services_pages_points[1].title ||
                        "CMS Development"}
                    </h2>
                    <p className={styles.Developmentp}>
                      {apiResponse.services_pages_points[1].description ||
                        `Empower your team to manage website content with ease. We
                      design and develop flexible, scalable CMS solutions using
                      platforms like WordPress, Strapi, and headless
                      architectures tailored to your workflow. Whether it’s
                      blogs, product pages, or landing sections—manage content
                      without touching code.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/cms-development"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <DotLottieReact src={CMS} loop autoplay />
                    {/* <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={CMS}
                    /> */}
                  </div>
                </div>
              </section>
              {/* CRM */}
              <section className={styles.DivSpace}>
                <div className="flex   md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    <DotLottieReact src={CRM} loop autoplay />
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={CRM}
                    /> */}
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left ">
                    <h2 className={styles.DevelopmentH2Middle}>
                      {apiResponse.services_pages_points[2].title ||
                        "CRM Customization"}
                    </h2>
                    <p className={styles.Developmentp}>
                      {apiResponse.services_pages_points[2].description ||
                        `We help businesses implement and optimize CRM systems that
                      centralize customer data, automate workflows, and improve
                      sales and support processes. From HubSpot to Zoho to
                      custom-built CRMs, we ensure seamless integration with
                      your Developmenterce and marketing stack—so no lead slips
                      through the cracks.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/crm-customization"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Custom Development */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex  md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left  md:mb-0 ">
                    <h2 className={styles.DevelopmentH2}>
                      {apiResponse.services_pages_points[3].title ||
                        "Custom Development"}
                    </h2>
                    <p className={styles.Developmentp}>
                      {apiResponse.services_pages_points[3].description ||
                        `Have a unique idea or business challenge that
                      off-the-shelf tools can’t solve? Our custom development
                      services bring your vision to life with tailored digital
                      solutions. From bespoke dashboards and apps to third-party
                      integrations and automation—if you can dream it, we can
                      build it.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/custom-development"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <DotLottieReact src={CustomDevelopment} loop autoplay />
                    {/* <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={CustomDevelopment}
                    /> */}
                  </div>
                </div>
              </section>
              {/* Staff Off Services (Remote Talent Solutions)*/}
              <section>
                <div className="flex md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    <DotLottieReact src={StaffOffServices} loop autoplay />
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={StaffOffServices}
                    /> */}
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left ">
                    <h2 className={styles.DevelopmentH2Middle}>
                      {apiResponse.services_pages_points[4].title ||
                        "Staff Off Services (Remote Talent Solutions)"}
                    </h2>
                    <p className={styles.Developmentp}>
                      {apiResponse.services_pages_points[4].description ||
                        `Access skilled remote professionals across a wide range of
                      business functions without the overhead of in-house
                      hiring. Our offshore talent seamlessly integrates with
                      your operations, delivering support in areas like data
                      entry, customer service, administrative assistance,
                      content moderation, back-office operations, and more.
                      Whether you need one role or a fully managed team, our
                      staffing solutions are flexible, cost-effective, and
                      tailored to your business processes and goals.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/staff-off-services"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
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
export default Development;
