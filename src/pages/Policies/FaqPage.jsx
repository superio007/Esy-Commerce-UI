import React from "react";
import HeroSection from "../../components/FaqPage/HeroSection";
import Faq from "../../components/FaqPage/Faq";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FaqPageData from "../Data/FaqData.json";
const fetchFaqContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/faq-page?populate=*"
  );
  return data.data;
};
const FaqPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Faqpage-content"],
    queryFn: fetchFaqContent,
    initialData: FaqPageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? FaqPageData.data || [] : data || [];
  console.log(apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <HeroSection Heading={apiResponse.Heading} />
      <Faq faqs={apiResponse.main_faqqnas} />
    </>
  );
};

export default FaqPage;
