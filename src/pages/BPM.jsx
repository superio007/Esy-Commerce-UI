import styles from "../css/BPM.module.scss";
import { Link } from "react-router-dom";
import React from "react";
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
const fetchBPMContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/bpm-page?populate[services_pages_points][populate]=*&populate[customer_slider][populate]=*"
  );
  return data.data;
};
const BPM = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["BPMpage-content"],
    queryFn: fetchBPMContent,
    initialData: BPMPageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? BPMPageData.data || [] : data || [];
  console.log(apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={styles.BPM}>
          <section
            className={`xl:px-16 p-3 3xl:mx-auto 3xl:max-w-screen-xl`}
          >
            <div className="px-6 md:px-0">
              <h1
                className={`${styles.BPMHeading} text-center text-white capitalize`}
              >
                BPM
              </h1>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-white">
        <div className={styles.BPM}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {/* Content Migration */}
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
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
                      <Link
                        to={"/content-migration"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
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
              {/* Translation */}
              <section className="text-gray-600 body-font">
                <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={Translation}
                    /> */}
                    <DotLottieReact src={Translation} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start md:text-left ">
                    <h1 className={styles.BPMH2Middle}>
                      {apiResponse.services_pages_points[1].title ||
                        "Translation"}
                    </h1>
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
                      <Link
                        to={"/translation"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Transcription */}
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col items-start md:text-left mb-16 md:mb-0 ">
                    <h2 className={styles.BPMH2}>
                      {apiResponse.services_pages_points[2].title ||
                        "Transcription"}
                    </h2>
                    <p className={styles.BPMp}>
                      {apiResponse.services_pages_points[2].description ||
                        `Convert audio and video into accurate, well-formatted text
                      with our professional transcription services. Whether it's
                      meetings, interviews, podcasts, or webinars, we deliver
                      clean, timestamped transcripts that are ready to publish,
                      subtitle, or archive—supporting your accessibility and
                      content strategies.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/transcription"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <DotLottieReact src={Transcription} loop autoplay />
                    {/* <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={Transcription}
                    /> */}
                  </div>
                </div>
              </section>
              {/* Transliteration */}
              <section className="text-gray-600 body-font">
                <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={Transliteration}
                    /> */}
                    <DotLottieReact src={Transliteration} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start md:text-left ">
                    <h1 className={styles.BPMH2Middle}>
                      {apiResponse.services_pages_points[3].title ||
                        "Transliteration"}
                    </h1>
                    <p className={styles.BPMp}>
                      {apiResponse.services_pages_points[3].description ||
                        `Preserve the sound and spirit of your content in a new
                      script. Our transliteration services are ideal for brand
                      names, product catalogs, and culturally sensitive
                      content—ensuring pronunciation, phonetics, and meaning are
                      correctly conveyed across languages and writing systems.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/transliteration"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Data Labeling & Annotation */}
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col items-start md:text-left mb-16 md:mb-0 ">
                    <h2 className={styles.BPMH2}>
                      {apiResponse.services_pages_points[4].title ||
                        "Data Labeling & Annotation"}
                    </h2>
                    <p className={styles.BPMp}>
                      {apiResponse.services_pages_points[4].description ||
                        `Turn raw data into machine learning gold. We provide
                      high-quality data labeling and annotation services for
                      images, video, text, and audio—fueling AI models with
                      accuracy and consistency. Whether you're training a
                      chatbot or computer vision algorithm, our
                      human-in-the-loop solutions deliver at scale.`}
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/data-labeling-annotation"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
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
