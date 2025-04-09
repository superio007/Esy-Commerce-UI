import React from "react";
import HeroSection from "../../components/CodeOfConduct/HeroSection";
import styles from "../../css/CodeOfConduct.module.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CodeofConductPageData from "../Data/CodeofConductData.json";
const fetchCodeofConductPageDataContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/codeof-conduct"
  );
  return data.data;
};
const CodeofConductPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["CodeofConductPageDatapage-content"],
    queryFn: fetchCodeofConductPageDataContent,
  });
  const apiResponse = error ? CodeofConductPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection
        heading={apiResponse.Heading}
        subHeading={apiResponse.subHeading}
      />
      <div className={`${styles.CodeOfConduct} bg-white`}>
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

export default CodeofConductPage;
