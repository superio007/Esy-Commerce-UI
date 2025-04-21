import styles from "../css/BPM.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import Content from "../assets/Services/Content-migration.png"
import Translation from "../assets/Services/Translation.png";
import Transcription from "../assets/Services/Transcription.png";
import Transliteration from "../assets/Services/Transliteration.png";
// import DataLabeling from "../assets/Services/Data-labeling.png";
const BPM = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={styles.BPM}>
          <section
            className={`xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
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
                    <h2 className={styles.BPMH2}>Content Migration</h2>
                    <p className={styles.BPMp}>
                      Moving your digital content shouldn’t mean compromising
                      structure, SEO, or data integrity. We offer seamless
                      content migration services across platforms—whether you're
                      upgrading your CMS, rebranding, or consolidating multiple
                      websites. Every detail is handled with precision to ensure
                      zero downtime and 100% content fidelity.
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
                    <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={Content}
                    />
                  </div>
                </div>
              </section>
              {/* Translation */}
              <section className="text-gray-600 body-font">
                <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={Translation}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start md:text-left ">
                    <h1 className={styles.BPMH2Middle}>Translation</h1>
                    <p className={styles.BPMp}>
                      Break language barriers and go global. Our professional
                      translation services ensure your content resonates with
                      local audiences while preserving the original message,
                      tone, and intent. We work with expert linguists and native
                      speakers across various industries and languages to
                      maintain cultural and contextual accuracy.
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
                    <h2 className={styles.BPMH2}>Transcription</h2>
                    <p className={styles.BPMp}>
                      Convert audio and video into accurate, well-formatted text
                      with our professional transcription services. Whether it's
                      meetings, interviews, podcasts, or webinars, we deliver
                      clean, timestamped transcripts that are ready to publish,
                      subtitle, or archive—supporting your accessibility and
                      content strategies.
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
                    <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src={Transcription}
                    />
                  </div>
                </div>
              </section>
              {/* Transliteration */}
              <section className="text-gray-600 body-font">
                <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={Transliteration}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start md:text-left ">
                    <h1 className={styles.BPMH2Middle}>Transliteration</h1>
                    <p className={styles.BPMp}>
                      Preserve the sound and spirit of your content in a new
                      script. Our transliteration services are ideal for brand
                      names, product catalogs, and culturally sensitive
                      content—ensuring pronunciation, phonetics, and meaning are
                      correctly conveyed across languages and writing systems.
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
                    <h2 className={styles.BPMH2}>Data Labeling & Annotation</h2>
                    <p className={styles.BPMp}>
                      Turn raw data into machine learning gold. We provide
                      high-quality data labeling and annotation services for
                      images, video, text, and audio—fueling AI models with
                      accuracy and consistency. Whether you're training a
                      chatbot or computer vision algorithm, our
                      human-in-the-loop solutions deliver at scale.
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
                      src="https://dummyimage.com/720x600"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BPM;
