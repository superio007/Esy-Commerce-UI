import RotateEffect from "./RotateEffect";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from "./css/CMS.module.css";
import { useEffect, useState } from "react";
const CMS = ({ apiRes }) => {
  const [contentArray, setcontentArray] = useState([]);
  useEffect(() => {
    const data =
      apiRes.home_service_section_points?.map((item) => ({
        title: item.Heading,
        description: item.subHeading,
      })) || [];
    setcontentArray(data);
  }, [apiRes]);
  return (
    <>
      <div className="bg-white">
        <section
          id="CMSSection"
          className=" xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl md:py-16 py-8 "
        >
          <div className="md:text-left text-center grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            {/* Left Content */}
            <div className={`space-y-6 `}>
              <h2
                className={`${styles.LandCMSHeading} sm:text-4xl capitalize text-3xl font-medium`}
              >
                Services We Offer
              </h2>

              <div className="">
                {contentArray.map((item, index) => (
                  <div className="pb-4" key={index}>
                    <h3
                      className={`${styles.LandCMSSubheading} text-[21px] font-normal`}
                    >
                      {item.title}
                    </h3>
                    <p className={`${styles.LandCMSPara} text-gray-600`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content (Lottie Animation) */}
            <div className="flex justify-center">
              <ParallaxProvider>
                <RotateEffect />
              </ParallaxProvider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default CMS;
