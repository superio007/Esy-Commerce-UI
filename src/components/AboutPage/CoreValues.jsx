import { useEffect, useState } from "react";
import styles from "./css/CoreValues.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function CoreValues({ coreValues, CoreHeading }) {
  const [valuesList, setValuesList] = useState([]);

  useEffect(() => {
    if (coreValues && coreValues.length > 0) {
      const formattedValues = coreValues.map((value) => ({
        title: value.Heading,
        description: value.subHeading,
        icon: value.icon?.url || "⭐", // fallback icon
        alt: value.icon?.alternativeText || value.Heading,
      }));
      setValuesList(formattedValues);
    }
  }, [coreValues]);

  return (
    <section className="bg-white">
      <section className={styles.CoreValuesSection}>
        <section className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl text-center">
          <section className="px-6 md:px-0">
            <h2 className={styles.coreH2}>
              {CoreHeading.Heading || "Our Core Values"}
            </h2>
            <p className={styles.coresub}>
              {CoreHeading.subHeading ||
                `Our values shape the culture of our organization and define the
              character of our company.`}
            </p>
            <div className="md:block hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                {valuesList.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                  >
                    <div className="text-4xl mb-3">
                      {value.icon.startsWith("http") ? (
                        <img
                          src={value.icon}
                          alt={value.alt || value.title}
                          className="w-12 h-12"
                        />
                      ) : (
                        value.icon
                      )}
                    </div>
                    <h3 className={styles.coreH3}>{value.title}</h3>
                    <p className={styles.coreP}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="py-8"
              >
                {valuesList.map((value, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-full">
                      <div className="text-4xl mb-3">
                        {value.icon.startsWith("http") ? (
                          <img
                            src={value.icon}
                            alt={value.alt || value.title}
                            className="w-12 h-12"
                          />
                        ) : (
                          value.icon
                        )}
                      </div>
                      <h3 className={styles.coreH3}>{value.title}</h3>
                      <p className={styles.coreP}>{value.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
