import { Link } from "react-router-dom";
import styles from "./css/OverviewKeyBenifits.module.css";
const OverviewKeyBenifits = () => {
  return (
    <>
      <div className="bg-white">
        <div className="xl:px-10 py-6 md:py-12 3xl:mx-auto 3xl:max-w-screen-xl">
          {/* Overview of Services */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
              <div className="w-full md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                <h2 className="title-font sm:text-2xl text-center text-3xl mb-4 text-gray-900">
                  Overview of the Service
                </h2>
                <p className="mb-2 leading-relaxed">
                  Our eCommerce solutions are designed to help businesses scale
                  efficiently in the competitive online marketplace. Whether you
                  need strategic consultation, operational enablement, or
                  technical development, we provide end-to-end support to ensure
                  your online store runs smoothly and profitably.
                </p>
                <h3 className="mb-2 leading-relaxed">Key problems we solve:</h3>
                <ul className={`${styles.overview} list-disc list-inside`}>
                  <li>Poor website performance leading to lost sales</li>
                  <li>Inefficient operations and fulfillment processes.</li>
                  <li>Lack of data-driven decision-making for growth.</li>
                </ul>
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
          {/* Key Section */}
          <section className="text-gray-600 body-font">
            <div className="flex px-5 py-12 md:py-24 md:flex-row flex-col-reverse items-center">
              <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0 md:justify-start">
                <img
                  className="object-cover object-center rounded w-full max-w-md"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                <h2 className="title-font sm:text-2xl text-3xl mb-4 text-gray-900">
                  Key Benifits
                </h2>
                <div className={`${styles.keyBeniFitsItem} rounded flex p-4 h-full items-center`}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-[#007fff] w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font mr-2 w-max">
                    Optimized performance:
                  </span>
                  <span className="w-max">
                    Faster load times and improved conversion rates.
                  </span>
                </div>
                <div className={`${styles.keyBeniFitsItem} rounded flex p-4 h-full items-center`}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-[#007fff] w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font mr-2 w-auto">
                    Streamlined operations:
                  </span>
                  <span className="w-max">
                    Better inventory, order management, and fulfillment
                    processes.
                  </span>
                </div>
                <div className={`${styles.keyBeniFitsItem} rounded flex p-4 h-full items-center`}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-[#007fff] w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font mr-2 w-auto">
                    Increased revenue:
                  </span>
                  <span className="w-max">
                    Data-driven strategies to boost online sales.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default OverviewKeyBenifits;
