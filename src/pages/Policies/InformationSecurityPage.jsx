import React from "react";
import HeroSection from "../../components/InformationSecurityPage/HeroSection";
import styles from "../../css/InformationSecurity.module.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import InformationSecurityPageData from "../Data/InformationSecurityData.json";
const fetchInformationSecurityPageDataContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/information-security"
  );
  return data.data;
};
const InformationSecurityPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["InformationSecurityPageDatapage-content"],
    queryFn: fetchInformationSecurityPageDataContent,
    initialData: InformationSecurityPageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  const apiResponse = error
    ? InformationSecurityPageData.data || []
    : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection
        heading={apiResponse.Heading}
        subHeading={apiResponse.subHeading}
      />
      <div className={`${styles.InformationSecurity} bg-white`}>
        <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {apiResponse.Content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default InformationSecurityPage;
