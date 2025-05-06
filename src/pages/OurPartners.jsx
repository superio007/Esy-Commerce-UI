import React from "react";
import styles from "../css/OurClients.module.scss";
import Set1 from "../assets/PartnerPage/NewHide.png";
import Set2 from "../assets/PartnerPage/Rangmart.png";
import Set3 from "../assets/PartnerPage/SinghAdvisor.png";
import Set4 from "../assets/PartnerPage/SleepNinja.png";
import Set5 from "../assets/PartnerPage/Spherehot.png";
import Set6 from "../assets/PartnerPage/Venturini.png";
import Set7 from "../assets/PartnerPage/calysto.png";
import Set8 from "../assets/PartnerPage/DantaHerbs.png";

import Set9 from "../assets/PartnerPage/Asentech.png";
import Set10 from "../assets/PartnerPage/BeautyBumble.png";
import Set11 from "../assets/PartnerPage/Bergamo.png";
import Set12 from "../assets/PartnerPage/CORSOUND.png";
import Set13 from "../assets/PartnerPage/Ddecore.png";
import Set14 from "../assets/PartnerPage/Dekoturf.png";
import Set15 from "../assets/PartnerPage/Dharmashala.png";
import Set16 from "../assets/PartnerPage/HomeCoat.png";

import Set17 from "../assets/PartnerPage/AAWI.png";
import Set18 from "../assets/PartnerPage/GreenDragon.png";
import Set19 from "../assets/PartnerPage/Piramal.png";
import Set20 from "../assets/PartnerPage/SuperBottom.png";
import Set21 from "../assets/PartnerPage/Swyft.png";
import Set22 from "../assets/PartnerPage/AllAboutDance.png";
import Set23 from "../assets/PartnerPage/CMIPL.png";
import Set24 from "../assets/PartnerPage/HomeCoat.png";

import Set25 from "../assets/PartnerPage/Aarasan.png";
import Set26 from "../assets/PartnerPage/Jakmans.png";
import Set27 from "../assets/PartnerPage/Kalsigns.png";
import Set28 from "../assets/PartnerPage/Kanta.png";
import Set29 from "../assets/PartnerPage/Kishco.png";
import Set30 from "../assets/PartnerPage/Modal.png";
import Set31 from "../assets/PartnerPage/SagunaBaug.png";
import Set32 from "../assets/PartnerPage/Samnaa.png";

import Set33 from "../assets/PartnerPage/Shipra.png";
import Set34 from "../assets/PartnerPage/Sleepmax.png";
import Set35 from "../assets/PartnerPage/Sugar.png";
import Set36 from "../assets/PartnerPage/Tasa.png";
import Set37 from "../assets/PartnerPage/Titan.png";
import Set38 from "../assets/PartnerPage/Village.png";
import Set39 from "../assets/PartnerPage/Fragmatic.png";
import Set40 from "../assets/PartnerPage/Freekal.png";
const LogosSet1 = [Set1, Set2, Set3, Set4, Set5, Set6, Set7, Set8];
const LogosSet2 = [Set9, Set10, Set11, Set12, Set13, Set14, Set15, Set16];
const LogosSet3 = [Set17, Set18, Set19, Set20, Set21, Set22, Set23, Set24];
const LogosSet4 = [Set25, Set26, Set27, Set28, Set29, Set30, Set31, Set32];
const LogosSet5 = [Set33, Set34, Set35, Set36, Set37, Set38, Set39, Set40];
const OurPartners = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={styles.Partner}>
          <section className={`xl:px-16 p-3 3xl:mx-auto 3xl:max-w-screen-xl`}>
            <div className="px-6 md:px-0">
              <h1
                className={`${styles.PartnerHeading} text-center text-white capitalize`}
              >
                Our Partners
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
                <div className="hidden md:grid grid-cols-2 md:grid-cols-4">
                  {LogosSet1.map((src, index) => {
                    const totalCols = 4; // Update if this changes
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;
                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center 
                                ${
                                  !isFirstRow
                                    ? "border-t border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? "border-l border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="md:hidden grid grid-cols-2 md:grid-cols-4">
                  {LogosSet1.map((src, index) => {
                    const isMobile = true; // optional, could use `useMediaQuery` if dynamic
                    const totalCols = 2; // mobile
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;

                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center
                                ${
                                  !isFirstRow
                                    ? `border-t border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? `border-l border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-6"></div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Retail</h2>
                <div className="hidden md:grid grid-cols-2 md:grid-cols-4">
                  {LogosSet2.map((src, index) => {
                    const totalCols = 4; // Update if this changes
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;
                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center 
                                ${
                                  !isFirstRow
                                    ? "border-t border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? "border-l border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="md:hidden grid grid-cols-2 md:grid-cols-4">
                  {LogosSet2.map((src, index) => {
                    const isMobile = true; // optional, could use `useMediaQuery` if dynamic
                    const totalCols = 2; // mobile
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;

                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center
                                ${
                                  !isFirstRow
                                    ? `border-t border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? `border-l border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Finance</h2>
                <div className="hidden md:grid grid-cols-2 md:grid-cols-4">
                  {LogosSet3.map((src, index) => {
                    const totalCols = 4; // Update if this changes
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;
                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center 
                                ${
                                  !isFirstRow
                                    ? "border-t border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? "border-l border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="md:hidden grid grid-cols-2 md:grid-cols-4">
                  {LogosSet3.map((src, index) => {
                    const isMobile = true; // optional, could use `useMediaQuery` if dynamic
                    const totalCols = 2; // mobile
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;

                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center
                                ${
                                  !isFirstRow
                                    ? `border-t border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? `border-l border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Healthcare</h2>
                <div className="hidden md:grid grid-cols-2 md:grid-cols-4">
                  {LogosSet4.map((src, index) => {
                    const totalCols = 4; // Update if this changes
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;
                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center 
                                ${
                                  !isFirstRow
                                    ? "border-t border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? "border-l border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="md:hidden grid grid-cols-2 md:grid-cols-4">
                  {LogosSet4.map((src, index) => {
                    const isMobile = true; // optional, could use `useMediaQuery` if dynamic
                    const totalCols = 2; // mobile
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;

                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center
                                ${
                                  !isFirstRow
                                    ? `border-t border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? `border-l border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.DivSpace}>
                <h2 className={styles.ClientH2}>Technology</h2>
                <div className="hidden md:grid grid-cols-2 md:grid-cols-4">
                  {LogosSet5.map((src, index) => {
                    const totalCols = 4; // Update if this changes
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;
                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center 
                                ${
                                  !isFirstRow
                                    ? "border-t border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? "border-l border-dashed border-[#a0a3aa]"
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="md:hidden grid grid-cols-2 md:grid-cols-4">
                  {LogosSet5.map((src, index) => {
                    const isMobile = true; // optional, could use `useMediaQuery` if dynamic
                    const totalCols = 2; // mobile
                    const isFirstRow = index < totalCols;
                    const isFirstCol = index % totalCols === 0;

                    return (
                      <div
                        key={index}
                        className={`
                                aspect-square bg-white flex items-center justify-center
                                ${
                                  !isFirstRow
                                    ? `border-t border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                                ${
                                  !isFirstCol
                                    ? `border-l border-dashed border-[#a0a3aa]`
                                    : ""
                                }
                              `}
                      >
                        <img
                          className={`${styles.ClientLogos} max-w-[90%] max-h-[90%] object-contain`}
                          src={src}
                          alt={`partner-logo-${index + 1}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartners;
