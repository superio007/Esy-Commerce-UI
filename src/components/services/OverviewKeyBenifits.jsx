import styles from "./css/OverviewKeyBenifits.module.css";
const OverviewKeyBenifits = ({ keyBenifits, overview }) => {
  return (
    <>
      <div className="bg-white">
        <div className="xl:px-10 py-8 px-8 md:py-16 3xl:mx-auto 3xl:max-w-screen-xl">
          {/* Overview of Services */}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex md:px-5 md:flex-row flex-col items-center">
              <div className="w-full md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                <h2 className="title-font sm:text-2xl text-center text-3xl mb-4 text-gray-900">
                  {overview.Heading || "Overview of the Service"}
                </h2>
                <p className="mb-2 leading-relaxed">
                  {overview.subHeading ||
                    `Our eCommerce solutions are designed to help businesses scale
                  efficiently in the competitive online marketplace. Whether you
                  need strategic consultation, operational enablement, or
                  technical development, we provide end-to-end support to ensure
                  your online store runs smoothly and profitably.`}
                </p>
                <h3 className="mb-2 leading-relaxed">
                  {overview.pointsHeading || "Key problems we solve"}:
                </h3>
                <ul className={`${styles.overview} list-disc list-inside`}>
                  {overview.overview_points.map((point, index) => (
                    <li key={index}>{point.Point}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  className="w-100 object-cover object-center rounded"
                  alt={overview.SideImage.alternativeText || "Hero"}
                  src={
                    overview.SideImage.url || "https://dummyimage.com/720x600"
                  }
                />
              </div>
            </div>
          </section>
          {/* Key Section */}
          <section className="text-gray-600 body-font">
            <div className="flex md:px-5 pt-8 md:pt-16 md:pb-0 md:flex-row flex-col-reverse items-center">
              <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0 md:justify-start">
                <img
                  className="object-cover object-center rounded w-full max-w-md"
                  alt={keyBenifits.SideImage.alternativeText || "hero"}
                  src={
                    keyBenifits.SideImage.url ||
                    "https://dummyimage.com/720x600"
                  }
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                <h2 className="title-font sm:text-2xl text-3xl mb-4 text-gray-900">
                  {keyBenifits.Heading || "Key Benifits"}
                </h2>
                {keyBenifits.key_benifts_points.map((key, index) => (
                  <div
                    key={index}
                    className={`${styles.keyBeniFitsItem} rounded flex p-4 h-full items-center`}
                  >
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
                    <span className="title-font mr-2 w-max md:text-center text-start">
                      {key.Heading}:
                    </span>
                    <span className="w-max md:text-center text-start">
                      {key.subHeading}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default OverviewKeyBenifits;
