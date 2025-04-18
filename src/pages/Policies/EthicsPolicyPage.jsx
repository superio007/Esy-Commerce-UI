import React from "react";
import styles from "../../css/Ethics.module.scss";
import HeroSection from "../../components/Policies/HeroSection";
import Lottie from "../../assets/EthicsPage/Employees.lottie";
import ReactMarkdown from "../../components/Policies/ReactMarkDown";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import EthicsPageData from "../Data/EthicsData.json";
const fetchEthicsPageDataContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/ethics-policy"
  );
  return data.data;
};
const EthicsPolicyPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["EthicsPageDatapage-content"],
    queryFn: fetchEthicsPageDataContent,
    initialData: EthicsPageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  const apiResponse = error ? EthicsPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection
        heading={apiResponse.Heading}
        subHeading={apiResponse.subHeading}
        lottie={Lottie}
      />
      <div className={`${styles.Ethics} bg-white`}>
        <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
          <ReactMarkdown Content={apiResponse.Content} />
        </div>
      </div>
    </>
  );
};

export default EthicsPolicyPage;
