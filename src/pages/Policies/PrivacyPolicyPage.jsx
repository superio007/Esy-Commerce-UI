import React from "react";
import HeroSection from "../../components/PrivacyPolicy/HeroSection";
import styles from "../../css/PrivacyPolicyPage.module.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PrivacyPageData from "../Data/PrivacyData.json";
const fetchPrivacyPageDataContent = async () => {
  const { data } = await axios.get(
    "https://whale-app-8hpek.ondigitalocean.app/api/privacy-policy"
  );
  return data.data;
};
const PrivacyPolicyPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["PrivacyPageDatapage-content"],
    queryFn: fetchPrivacyPageDataContent,
  });
  const apiResponse = error ? PrivacyPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection
        heading={apiResponse.Heading}
        subHeading={apiResponse.subHeading}
      />
      <div className={`${styles.PrivacyPolicy} bg-white`}>
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

export default PrivacyPolicyPage;
