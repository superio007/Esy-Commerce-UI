import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BlogsPageData from "../Data/BlogsData.json";
import styles from "../css/Blogs.module.scss";
import BlogsSection from "../components/BlogsPage/blogsSection";
import { FaRegClock } from "react-icons/fa";
import { formatDate } from "../utils/dateConvert";
import { slugify } from "../utils/modifyUrl";
import { use } from "react";
const fetchBlogsContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/blogs?populate=*"
  );
  return data.data;
};

const SingleBlogs = () => {
  const { title } = useParams();
  const formattedTitle = title;
  const [allData, setAllData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [blogData, setBlogData] = useState(null);
  const [categories, setCategories] = useState([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["Blogspage-content"],
    queryFn: fetchBlogsContent,
    // initialData: BlogsPageData.data,
    // initialDataUpdatedAt: 0,
    // staleTime: 1000 * 60 * 60,
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  const BlogsData = useMemo(() => {
    const apiResponse = error ? BlogsPageData.data || [] : data || [];
    // console.log(apiResponse);
    return apiResponse.map((item, index) => ({
      id: index + 1,
      title: item.Title,
      Blogstructure: item.Blogstructure,
      description: item.Shortdescription,
      image: item.CoverImage?.url || "./default-image.webp",
      imageAlt: item.CoverImage?.alternativeText || "Blog Image",
      tags: item.blog_tags || [],
      category: item.blog_categories || [],
      ytlink: item.ytLink,
      PublicDate: item.createdAt,
    }));
  }, [data, error]);

  // Set all blog data
  useEffect(() => {
    setAllData(BlogsData);
  }, [BlogsData]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogData]);
  // Find current blog
  useEffect(() => {
    const foundBlog = BlogsData.find(
      (blog) => slugify(blog.title) === formattedTitle
    );
    setBlogData(foundBlog || null);
  }, [formattedTitle, BlogsData]);

  // Extract category names
  useEffect(() => {
    if (blogData?.category?.length > 0) {
      const categoryNames = blogData.category.map((cat) => cat.CatagoryName);
      setCategories(categoryNames);
    }
  }, [blogData]);

  // Filter recent blogs by category
  useEffect(() => {
    if (categories.length > 0 && allData.length > 0) {
      const filteredBlogs = allData.filter(
        (blog) =>
          blog.title !== formattedTitle && // Exclude current blog
          blog.category.some((cat) => categories.includes(cat.CatagoryName))
      );
      setRecentData(filteredBlogs);
    }
  }, [categories, allData, formattedTitle]);

  if (isLoading) return <p>Loading...</p>;
  if (!blogData) return <p>No data available</p>;
  // console.log(blogData);
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          className={`${styles.Blogs} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <h1 className={`text-center ${styles.blogHeading}`}>
            {blogData.title}
          </h1>
          <div className="flex justify-center">
            <p className={styles.blogp}>
              <span className="flex items-center gap-2">
                <FaRegClock className="text-white text-xl" />
                {formatDate(blogData.PublicDate)}
              </span>
            </p>
          </div>
        </section>
      </div>

      <div className={`${styles.BlogsContent} bg-white`}>
        <div className="xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl">
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

          <div className="flex my-7 justify-center items-center gap-5 flex-wrap">
            {blogData.tags.map((tag, index) => (
              <div
                key={index}
                className="inline-block bg-gray-200 rounded-full p-2"
              >
                {tag.Tags}
              </div>
            ))}
          </div>

          {/* Related Blogs Section */}
          <div>
            <h2 className={`${styles.blogH2} flex justify-center`}>
              Related Blogs
            </h2>
            <BlogsSection BlogsData={recentData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogs;
