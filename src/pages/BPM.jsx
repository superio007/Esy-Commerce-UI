import styles from "../css/BPM.module.scss";
import { Link } from "react-router-dom";
import React,{ useEffect} from "react";
import Content from "../assets/Services/ContentMigration.lottie";
import Translation from "../assets/Services/Translation.lottie";
import Transcription from "../assets/Services/Transcription.lottie";
import Transliteration from "../assets/Services/Translitration.lottie";
import DataLabel from "../assets/Services/DataLabel.png";
import Check from "../assets/CodeOfConduct/Check.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CustomerSlider from "../components/HomePage/CustomerSlider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BPMPageData from "../Data/BPMData.json";
import HeroSection from "../components/services/HeroSection";
const fetchBPMContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/bpm-page?populate[services_pages_points][populate]=*&populate[customer_slider][populate]=*&populate[service_page_hero_section][populate]=*"
  );
  return data.data;
};
const BPM = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["BPMpage-content"],
    queryFn: fetchBPMContent,
    // initialData: BPMPageData.data,
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
  const apiResponse = error ? BPMPageData.data || [] : data || [];
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
        <div className={styles.BPM}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {/* Content Migration */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex  md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col items-start md:text-left mb-16 md:mb-0 ">
                    <h2 className={styles.BPMH2}>
                      {apiResponse.services_pages_points[0].title ||
                        "Content Migration"}
                    </h2>
                    <p className={styles.BPMp}>
                      {apiResponse.services_pages_points[0].description ||
                        `Moving your digital content shouldn’t mean compromising
                      structure, SEO, or data integrity. We offer seamless
                      content migration services across platforms—whether you're
                      upgrading your CMS, rebranding, or consolidating multiple
                      websites. Every detail is handled with precision to ensure
                      zero downtime and 100% content fidelity.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/content-migration"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <DotLottieReact src={Content} loop autoplay />
                    {/* <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={Content}
                    /> */}
                  </div>
                </div>
              </section>
              {/* Linguastic Services */}
              <section className={styles.DivSpace}>
                <div className="flex md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={Translation}
                    /> */}
                    <DotLottieReact src={Translation} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start md:text-left ">
                    <h2 className={styles.BPMH2Middle}>
                      {apiResponse.services_pages_points[1].title ||
                        "Translation"}
                    </h2>
                    <p className={styles.BPMp}>
                      {apiResponse.services_pages_points[1].description ||
                        `Break language barriers and go global. Our professional
                      translation services ensure your content resonates with
                      local audiences while preserving the original message,
                      tone, and intent. We work with expert linguists and native
                      speakers across various industries and languages to
                      maintain cultural and contextual accuracy.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/translation"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Data Labeling & Annotation */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex  md:flex-row flex-col-reverse items-center">
                  <div className="w-full md:w-1/2 flex flex-col items-start md:text-left ">
                    <h2 className={styles.BPMH2}>
                      {apiResponse.services_pages_points[2].title ||
                        "Data Labeling & Annotation"}
                    </h2>
                    <p className={styles.BPMp}>
                      {apiResponse.services_pages_points[2].description ||
                        `Turn raw data into machine learning gold. We provide
                      high-quality data labeling and annotation services for
                      images, video, text, and audio—fueling AI models with
                      accuracy and consistency. Whether you're training a
                      chatbot or computer vision algorithm, our
                      human-in-the-loop solutions deliver at scale.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link to={"/data-labeling-annotation"}>
                        <button class="center-hover-btn">
                          <span>Know More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={DataLabel}
                    />
                    {/* <DotLottieReact src={DataLabel} loop autoplay /> */}
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
export default BPM;
