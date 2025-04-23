import React from "react";
import styles from "./css/Locations.module.scss";
const Locations = ({ heading, Locations }) => {
  function insertLineBreak(address, breakAfter = 35) {
    if (address.length <= breakAfter) return address;
    const firstPart = address.slice(0, breakAfter);
    const secondPart = address.slice(breakAfter).trim();
    return `${firstPart}<br /> ${secondPart}`;
  }
  return (
    <>
      <div className={styles.LocationSection}>
        <div className=" xl:px-10 gap-2 3xl:mx-auto 3xl:max-w-screen-xl">
          <div className="px-6 md:px-0">
            <h2 className={`${styles.LocationH2} text-center`}>
              {heading || "Our Offices"}
            </h2>
            <div className="flex md:flex-row  gap-4 flex-col justify-evenly">
              <div className="md:w-max w-auto">
                <div className="bg-white rounded-md md:px-12 p-8 md:py-6">
                  <h3
                    className={`flex flex-wrap gap-2 ${styles.LocationH3} `}
                  >
                    <img
                      className="w-[25px]"
                      src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1fa-1f1f8.svg"
                      alt=""
                    />
                    {Locations[0].OfficeName ||
                      "EsyCommerce Digital Services LLC"}
                  </h3>
                  <p
                    className={styles.Locationp}
                    dangerouslySetInnerHTML={{
                      __html: insertLineBreak(Locations[0].OfficeAddress),
                    }}
                  ></p>
                  <p className={styles.Locationp}>
                    Phone: {Locations[0].Phone || "+1 (279) 732-6842"}
                  </p>
                </div>
              </div>
              <div className="md:w-max w-auto">
                <div className="bg-white rounded-md md:px-12 p-8 md:py-6">
                  <h3
                    className={`flex flex-wrap gap-2 ${styles.LocationH3} `}
                  >
                    <img
                      className="w-[25px]"
                      src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1ee-1f1f3.svg"
                      alt=""
                    />
                    {Locations[1].OfficeName ||
                      "Offshore Global Capability Center (GCC)"}
                  </h3>
                  <p
                    className={styles.Locationp}
                    dangerouslySetInnerHTML={{
                      __html: insertLineBreak(Locations[1].OfficeAddress, 38),
                    }}
                  ></p>
                  <p className={styles.Locationp}>
                    Phone: {Locations[1].Phone || "+91 865-223-3399"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Locations;
