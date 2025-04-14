import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BlogsPageData from "../Data/BlogsData.json";
import styles from "../css/Blogs.module.css";

const fetchBlogsContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/blogs?populate=*"
  );
  return data.data;
};

const SingleBlogs = () => {
  const { title } = useParams();
  const formattedTitle = title.replace(/-/g, " ");

  const { data, isLoading, error } = useQuery({
    queryKey: ["Blogspage-content"],
    queryFn: fetchBlogsContent,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  // ✅ Use useMemo to prevent infinite loops
  const BlogsData = useMemo(() => {
    const apiResponse = error ? BlogsPageData.data || [] : data || [];

    return apiResponse.map((item, index) => ({
      id: index + 1,
      title: item.Title,
      Blogstructure: item.Blogstructure, // Markdown content
      description: item.Shortdescription,
      image: item.CoverImage?.url || "./default-image.webp",
      imageAlt: item.CoverImage?.alternativeText || "Blog Image",
      tags: item.tags || [],
      category: item.categories || [],
      ytlink: item.ytLink,
    }));
  }, [data, error]); // ✅ Recalculate only when `data` or `error` changes

  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const foundBlog = BlogsData.find((blog) => blog.title === formattedTitle);
    setBlogData(foundBlog || null);
  }, [formattedTitle, BlogsData]);

  if (isLoading) return <p>Loading...</p>;
  if (!blogData) return <p>No data available</p>;

  return (
    <>
      <div className="bg-[#007fff]">
        <section
          className={`${styles.Blogs} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <h1 className="text-[45px] font-bold text-center text-white capitalize">
            {blogData.title}
          </h1>
        </section>
      </div>

      <div className={`${styles.BlogsContent} bg-white `}>
        <div className="xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl">
          {/* Markdown Content */}
          <div
            className={`${styles.markDown} text-lg leading-7`}
            style={{ maxWidth: "70%", margin: "0 auto" }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {blogData.Blogstructure}
            </ReactMarkdown>
          </div>

          {/* YouTube Video */}
          {/* {blogData.ytlink && (
            <div className="mt-10 flex justify-center">
              <iframe
                width="560"
                height="315"
                src={blogData.ytlink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default SingleBlogs;
