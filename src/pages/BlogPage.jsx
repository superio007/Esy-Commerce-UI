import styles from "../css/Blogs.module.css";
import { useState, useEffect } from "react";
import BlogsSection from "../components/BlogsPage/blogsSection";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BlogsPageData from "../Data/BlogsData.json";

const fetchBlogsContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/blogs?populate=*"
  );
  return data.data;
};

const Blogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Blogspage-content"],
    queryFn: fetchBlogsContent,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? BlogsPageData.data || [] : data || [];

  const ApiData = apiResponse.map((item, index) => ({
    id: index + 1,
    title: item.Title,
    description: item.Shortdescription,
    image: item.CoverImage?.url || "./default-image.webp",
    imageAlt: item.CoverImage?.alternativeText || "Blog Image",
    tags: item.blog_tags || [],
    category: item.blog_categories || [],
  }));
  if (isLoading) return <p>Loading...</p>;
  console.log(ApiData);

  return (
    <>
      {ApiData.length > 0 ? (
        <>
          <div className="bg-[#007fff]">
            <section
              className={`${styles.Blogs} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
            >
              <h1 className="text-[45px] font-bold text-center text-white capitalize">
                Blogs
              </h1>
            </section>
          </div>
          <div className="bg-white">
            <BlogsSection BlogsData={ApiData} />
          </div>
        </>
      ) : (
        <div>No data available</div>
      )}
    </>
  );
};

export default Blogs;
