import React from "react";
import styles from "../../css/Ethics.module.css";
import HeroSection from "../../components/EthicsPage/HeroSection";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
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
  });
  const apiResponse = error ? EthicsPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection
        heading={apiResponse.Heading}
        subHeading={apiResponse.subHeading}
      />
      <div className={`${styles.Ethics} bg-white`}>
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

export default EthicsPolicyPage;
