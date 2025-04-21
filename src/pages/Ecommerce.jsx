import styles from "../css/Ecommerce.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import ECommConsultation from "../assets/Services/Ecomm-Consultation.png";
import ECommEnablement from "../assets/Services/EcommerceEnablement.png";
import ECommWebsiteDevelopment from "../assets/Services/EcommerceWebDev.png";
const Ecommerce = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={styles.EComm}>
          <section
            className={`xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
          >
            <div className="px-6 md:px-0">
              <h1
                className={`${styles.ECommHeading} text-center text-white capitalize`}
              >
                Ecommerce
              </h1>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-white">
        <div className={styles.EComm}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {/* Ecommerce Consultation (Performance) */}
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-16 md:mb-0 ">
                    <h2 className={styles.ECommH2}>
                      Ecommerce Consultation (Performance)
                    </h2>
                    <p className={styles.ECommp}>
                      Our ecommerce consulting service is designed to optimize
                      your store’s performance and profitability. With over 13
                      years of industry experience, we help brands identify
                      growth opportunities, improve customer acquisition, and
                      increase conversion rates. From in-depth analytics to UX
                      audits and performance benchmarking, our strategic
                      insights ensure your ecommerce platform runs at peak
                      efficiency.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/ecommerce-consultation"}
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
                      src={ECommConsultation}
                    />
                  </div>
                </div>
              </section>
              {/* Ecommerce Enablement (Operations) */}
              <section className="text-gray-600 body-font">
                <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={ECommEnablement}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left ">
                    <h1 className={styles.ECommH2Middle}>
                      Ecommerce Enablement (Operations)
                    </h1>
                    <p className={styles.ECommp}>
                      We streamline ecommerce operations to help businesses
                      scale effortlessly. Our team works closely with you to
                      optimize inventory management, order fulfillment,
                      logistics, and customer service workflows. Whether you're
                      managing multiple sales channels or transitioning to D2C,
                      we’ll ensure your backend operations support seamless,
                      scalable growth.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/ecommerce-enablement"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Ecommerce Website Development (TechDev) */}
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-16 md:mb-0 ">
                    <h2 className={styles.ECommH2}>
                      Ecommerce Website Development (TechDev)
                    </h2>
                    <p className={styles.ECommp}>
                      We build high-performance ecommerce websites that are
                      fast, secure, and built to convert. Our development team
                      specializes in custom WordPress, Shopify, and headless
                      ecommerce solutions tailored to your business needs. From
                      storefront design to backend integration with ERPs and
                      CRMs, we deliver robust technology that powers your brand
                      online.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/ecommerce-website-development"}
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
                      src={ECommWebsiteDevelopment}
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
export default Ecommerce;
