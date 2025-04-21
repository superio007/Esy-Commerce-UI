import RotateEffect from "./RotateEffect";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from "./css/CMS.module.scss";
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
        <div className={styles.CMSSection}>
          <section className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl ">
            <div className="px-6 md:px-0">
              <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h2
                    className={`${styles.LandCMSHeading} md:mb-3`}
                  >
                    Services We Offer
                  </h2>

                  <div className="">
                    {contentArray.map((item, index) => (
                      <div className="" key={index}>
                        <h3
                          className={`${styles.LandCMSSubheading}`}
                        >
                          {item.title}
                        </h3>
                        <p className={`${styles.LandCMSPara}`}>
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default CMS;
