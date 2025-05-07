import React from "react";
import styles from "../css/OurClients.module.scss";
import HeroSection from "../components/services/HeroSection";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import OurClientsData from "../Data/OrClientsData.json";

const fetchOurClientsPage = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/clients-page?populate[our_clients_sections][populate]=*&populate[service_page_hero_section][populate]=*"
  );
  return data.data;
};
const OurClients = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["OurClientsPage-content"],
    queryFn: fetchOurClientsPage,
    // initialData: OurClientsData.data,
    // initialDataUpdatedAt: 0, // 👈 Forces background API call
    // staleTime: 1000 * 60 * 60, // 1 hour
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
  });
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? OurClientsData.data || [] : data || [];
  // console.log(apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection
        title={apiResponse.service_page_hero_section.Title}
        heading={apiResponse.service_page_hero_section.service_page_headings}
        subHeading={apiResponse.service_page_hero_section.subHeading}
        headline={apiResponse.service_page_hero_section.FormHeading}
        Cta={apiResponse.service_page_hero_section.FormCTA}
      />
      <div className="bg-white">
        <div className={styles.Client}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {apiResponse.our_clients_sections.map((item, index) => (
                <div key={index} className={styles.DivSpace}>
                  <h2 className={styles.ClientH2}>
                    {item.Title || "Manufacturing"}
                  </h2>
                  <div className="hidden md:grid grid-cols-2 md:grid-cols-4">
                    {item.ClientsLogo.map((src, index) => {
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
                            src={src.url}
                            alt={src.alternativeText}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="md:hidden grid grid-cols-2 md:grid-cols-4">
                    {item.ClientsLogo.map((src, index) => {
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
                            src={src.url}
                            alt={src.alternativeText}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
