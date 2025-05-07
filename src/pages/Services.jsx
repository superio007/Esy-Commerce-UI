import styles from "../css/Services.module.scss";
import { Link } from "react-router-dom";
import React,{ useEffect} from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ecommerce from "../assets/Services/Ecommerce.lottie";
import design from "../assets/Services/Design.lottie";
import Development from "../assets/Services/Development.lottie";
import bpm from "../assets/Services/BPM.lottie";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ServicesPageData from "../Data/ServicesData.json";
import CustomerSlider from "../components/HomePage/CustomerSlider";
const fetchServicesContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/service-page?populate[services_pages_points][populate]=*&populate[customer_slider][populate]=*"
  );
  return data.data;
};
const Services = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Servicespage-content"],
    queryFn: fetchServicesContent,
    initialData: ServicesPageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? ServicesPageData.data || [] : data || [];
  // console.log(apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={styles.Services}>
          <section className={`xl:px-16 p-3 3xl:mx-auto 3xl:max-w-screen-xl`}>
            <div className="px-6 md:px-0">
              <h1
                className={`${styles.ServicesHeading} text-center text-white capitalize`}
              >
                Services
              </h1>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-white">
        <div className={styles.Services}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {/* Ecommerce */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0  ">
                    <h2 className={styles.ServicesH2}>
                      {apiResponse.services_pages_points[0].title ||
                        "Ecommerce Services"}
                    </h2>
                    <p className={styles.Servicesp}>
                      {apiResponse.services_pages_points[0].description ||
                        `We provide end-to-end ecommerce services tailored to your brand — from strategy and store setup to operations and performance marketing. Our solutions help you scale faster, streamline operations, and boost customer experience across all major platforms.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/ecommerce"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <DotLottieReact src={ecommerce} loop autoplay />
                  </div>
                </div>
              </section>
              {/* Design */}
              <section className={styles.DivSpace}>
                <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    <DotLottieReact src={design} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left  ">
                    <h2 className={styles.ServicesH2Middle}>
                      {apiResponse.services_pages_points[1].title || "Design"}
                    </h2>
                    <p className={styles.Servicesp}>
                      {apiResponse.services_pages_points[1].description ||
                        `Our UI/UX experts craft visually stunning, conversion-focused designs that reflect your brand and improve user journeys. From wireframes to final mockups, we ensure every pixel serves a purpose and every screen delivers impact.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/design"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Development */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0  ">
                    <h2 className={styles.ServicesH2}>
                      {apiResponse.services_pages_points[2].title ||
                        "Development"}
                    </h2>
                    <p className={styles.Servicesp}>
                      {apiResponse.services_pages_points[2].description ||
                        `We build ecommerce websites and custom tools that are fast, secure, and tailored to your business. Whether it's Shopify, WooCommerce, headless commerce, or custom APIs, we deliver tech that works for your growth.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/development"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <DotLottieReact src={Development} loop autoplay />
                    {/* <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={Development}
                    /> */}
                  </div>
                </div>
              </section>
              {/* BPM */}
              <section className={styles.DivSpace}>
                <div className="flex px-5 md:pt-16 pt-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={bpm}
                    /> */}
                    <DotLottieReact src={bpm} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left  ">
                    <h2 className={styles.ServicesH2Middle}>
                      {apiResponse.services_pages_points[3].title || "BPM"}
                    </h2>
                    <p className={styles.Servicesp}>
                      {apiResponse.services_pages_points[3].description ||
                        `Our BPM services cover product uploads, order processing, customer support, and other backend operations, allowing you to focus on strategy while we handle the daily grind. Reliable, efficient, and always aligned with your KPIs.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/bpm"}>
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
export default Services;
