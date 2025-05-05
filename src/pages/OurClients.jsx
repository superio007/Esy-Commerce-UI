import React from "react";
import styles from "../css/OurClients.module.scss";
import NewHide1 from "../assets/PartnerPage/newhide-1.png";
import NewHide2 from "../assets/PartnerPage/newhide-2.png";
import NewHide3 from "../assets/PartnerPage/newhide-3.png";
import NewHide4 from "../assets/PartnerPage/newhide-4.png";
import NewHide5 from "../assets/PartnerPage/newhide-5.png";
import NewHide6 from "../assets/PartnerPage/newhide-6.png";
import NewHide7 from "../assets/PartnerPage/newhide-7.png";
import NewHide8 from "../assets/PartnerPage/newhide-8.png";
const logos = [
  NewHide1,
  NewHide2,
  NewHide3,
  NewHide4,
  NewHide5,
  NewHide6,
  NewHide7,
  NewHide8,
];
const OurClients = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={styles.Client}>
          <section className={`xl:px-16 p-3 3xl:mx-auto 3xl:max-w-screen-xl`}>
            <div className="px-6 md:px-0">
              <h1
                className={`${styles.ClientHeading} text-center text-white capitalize`}
              >
                Our Clients
              </h1>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-white">
        <div className={styles.Client}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Manufacturing</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Retail</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Finance</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Healthcare</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Technology</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Transportation</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Food and Beverage</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Construction</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Education</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h2 className={styles.ClientH2}>Entertainment</h2>
                <div className="flex flex-wrap gap-6">
                  {logos.map((src, index) => (
                    <img
                      key={index}
                      className={styles.ClientLogos}
                      src={src}
                      alt={`partner-logo-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
