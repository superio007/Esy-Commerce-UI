import styles from "../css/Design.module.scss";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Youtube from "../assets/Services/YouTube.lottie";
import LinkedIn from "../assets/Services/LinkedInContMkt.lottie";
import Identity from "../assets/Services/BrandingIdentityCommunication.lottie";
import CustomWebsite from "../assets/Services/CustomeWebDevelopment.lottie";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DesignPageData from "../Data/DesignData.json";
import HeroSection from "../components/services/HeroSection";
import CustomerSlider from "../components/HomePage/CustomerSlider";
const fetchDesignContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/design-page?populate[services_pages_points][populate]=*&populate[customer_slider][populate]=*&populate[service_page_hero_section][populate]=*"
  );
  return data.data;
};
const Design = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Designpage-content"],
    queryFn: fetchDesignContent,
    // initialData: DesignPageData.data,
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
  const apiResponse = error ? DesignPageData.data || [] : data || [];
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
        <div className={styles.Design}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {/* YouTube Content Marketing */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex  md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0  ">
                    <h2 className={styles.DesignH2}>
                      {apiResponse.services_pages_points[0].title ||
                        "YouTube Content Marketing"}
                    </h2>
                    <p className={styles.Designp}>
                      {apiResponse.services_pages_points[0].description ||
                        `We help brands build engaging YouTube channels that drive
                      traffic, build trust, and convert viewers into customers.
                      From strategy and scripting to editing and optimization,
                      we handle the entire video marketing process. Leverage the
                      world’s second-largest search engine with content that
                      educates, entertains, and sells.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/youtube-content-marketing"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <DotLottieReact src={Youtube} loop autoplay />
                  </div>
                </div>
              </section>
              {/* LinkedIn Content Marketing */}
              <section className={styles.DivSpace}>
                <div className="flex md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={LinkedIn}
                    /> */}
                    <DotLottieReact src={LinkedIn} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left  ">
                    <h2 className={styles.DesignH2Middle}>
                      {apiResponse.services_pages_points[1].title ||
                        "LinkedIn Content Marketing"}
                    </h2>
                    <p className={styles.Designp}>
                      {apiResponse.services_pages_points[1].description ||
                        `Position your brand as an industry thought leader with
                      high-impact LinkedIn content. We craft strategic posts,
                      carousels, and articles that spark conversations and build
                      credibility. Whether you're targeting B2B clients or
                      hiring top talent, our LinkedIn marketing services drive
                      real business results.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/linkedin-content-marketing"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Identity, Branding & Communication */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex  md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0  ">
                    <h2 className={styles.DesignH2}>
                      {apiResponse.services_pages_points[2].title ||
                        "Identity, Branding & Communication"}
                    </h2>
                    <p className={styles.Designp}>
                      {apiResponse.services_pages_points[2].description ||
                        `Your brand is more than a logo—it’s how the world sees and
                      experiences your business. We help shape your brand’s
                      identity with compelling visuals, tone of voice, and
                      messaging that resonate with your audience. From brand
                      strategy to design systems, we create identities that
                      stand out and scale.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/identity-branding-communication"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <DotLottieReact src={Identity} loop autoplay />
                    {/* <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={Identity}
                    /> */}
                  </div>
                </div>
              </section>
              {/* Custom Website Development */}
              <section className={styles.DivSpace}>
                <div className="flex md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={CustomWebsite}
                    /> */}
                    <DotLottieReact src={CustomWebsite} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left  ">
                    <h2 className={styles.DesignH2Middle}>
                      {apiResponse.services_pages_points[3].title ||
                        "Custom Website Development"}
                    </h2>
                    <p className={styles.Designp}>
                      {apiResponse.services_pages_points[3].description ||
                        `We specialize in building bespoke websites tailored to
                      your unique business goals. Whether it's an ecommerce
                      store, corporate website, or a landing page funnel, our
                      custom development ensures fast load times, mobile
                      responsiveness, SEO optimization, and seamless user
                      experience—crafted to convert.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/custom-website-development"}>
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
export default Design;
