import React from "react";
import HeroSection from "../../components/Policies/HeroSection";
import styles from "../../css/CodeOfConduct.module.scss";
import Lottie from "../../assets/CodeOfConduct/Employees.lottie";
import ReactMarkdown from "../../components/Policies/ReactMarkDown";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CodeofConductPageData from "../Data/CodeofConductData.json";
const fetchCodeofConductPageDataContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/codeof-conduct?populate=*"
  );
  return data.data;
};
const CodeofConductPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["CodeofConductPageDatapage-content"],
    queryFn: fetchCodeofConductPageDataContent,
    initialData: CodeofConductPageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  const apiResponse = error ? CodeofConductPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection
        heading={apiResponse.Heading}
        subHeading={apiResponse.subHeading}
        lottie={Lottie}
      />
      <div className={`${styles.CodeOfConduct} bg-white`}>
        <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
          <ReactMarkdown Content={apiResponse.Content} />
        </div>
      </div>
    </>
  );
};

export default CodeofConductPage;
