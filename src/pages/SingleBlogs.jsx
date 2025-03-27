import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
let BlogsData = [];
let blogData = [];
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BlogsPageData from "../Data/BlogsData.json";
import styles from "../css/Blogs.module.css";
const fetchBlogsContent = async () => {
  const { data } = await axios.get(
    "http://localhost:1337/api/blogs?populate=*"
  );
  return data.data;
};
const SingleBlogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Blogspage-content"],
    queryFn: fetchBlogsContent,
  });

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? BlogsPageData.data || [] : data || [];

  const BlogsData = apiResponse.map((item, index) => ({
    id: index + 1,
    title: item.Title,
    Blogstructure: item.Blogstructure,
    description: item.Shortdescription,
    image: item.CoverImage?.url || "./default-image.webp",
    imageAlt: item.CoverImage?.alternativeText || "Blog Image",
    tags: item.blog_tags || [],
    category: item.blog_categories || [],
  }));
  let title = useParams().title.split("-").join(" ");
  BlogsData.map((blog) => {
    if (blog.title === title) {
      blogData = blog;
    }
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {apiResponse ? (
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
          <div className="bg-white">
            <div className={`${styles.markDown}xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-x`} style={{maxWidth:"70%"}}>
              <ReactMarkdown >{blogData.Blogstructure}</ReactMarkdown>
            </div>
          </div>
        </>
      ) : (
        <div>No data Available</div>
      )}
    </>
  );
};
export default SingleBlogs;
