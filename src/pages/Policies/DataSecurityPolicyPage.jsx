import React from "react";
import styles from "../../css/DataPolicy.module.css";
import HeroSection from "../../components/DataSecurity/HeroSection";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DataSecurityPageData from "../Data/DataSecurityData.json";
const fetchDataSecurityPageDataContent = async () => {
  const { data } = await axios.get(
    "https://whale-app-8hpek.ondigitalocean.app/api/data-security-policy"
  );
  return data.data;
};
const DataSecurityPolicyPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["DataSecurityPageDatapage-content"],
    queryFn: fetchDataSecurityPageDataContent,
  });
  const apiResponse = error ? DataSecurityPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection
        heading={apiResponse.Heading}
        subHeading={apiResponse.subHeading}
      />
      <div className={`${styles.DataPolicy} bg-white`}>
        <div>
          <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {apiResponse.Content}
              </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSecurityPolicyPage;
