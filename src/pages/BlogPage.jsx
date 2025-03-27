import styles from "../css/Blogs.module.css";
import { useState, useEffect } from "react";
import BlogsSection from "../components/BlogsPage/blogsSection";
const BlogsData = [
  {
    id: 1,
    title: "How Innostax helped Bancstac to optimize Software Development...",
    description:
      "Innostax helped Bancstac to optimize Software Development through AWS, Elastic Search, and MySQL.",
    image: "./src/assets/case1.webp",
    tags: ["AWS", "Elastic Search", "Java", "Jenkins", "MySQL"],
  },
  {
    id: 2,
    title: "How Innostax Streamlined Technique’s Project Management...",
    description:
      "Innostax Streamlined Technique's Project Management and Significantly Enhanced Overall Efficiency through Automation",
    image: "./src/assets/case2.webp",
    tags: ["Azure", "Microsoft Power Automate"],
  },
  {
    id: 3,
    title: "How Innostax Powered a 15% Increase in Travelstart’s Ticket Sales",
    description:
      "Innostax enabled Travelstart to increase ticket sales by 15% through .NET and Angular enhancements.",
    image: "./src/assets/case1.webp",
    tags: [".NET", "Angular", "Java"],
  },
];
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BlogsPageData from "../Data/BlogsData.json";
const fetchBlogsContent = async (formattedData) => {
  const { data } = await axios.get("localhost:1337/api/blogs?populate=*");
  return data.data;
};
const Blogs = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setData(fetchBlogsContent);
  }, []);

  // Use API data if available; fallback to static data on error
  const apiResponse = error ? BlogsPageData.data : Data || {};
  console.log(apiResponse);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          id=""
          className={`${styles.Blogs} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <h1 className="text-[45px] font-bold text-center text-white capitalize">
            Blogs
          </h1>
        </section>
      </div>
      <div className="bg-white">
        <BlogsSection BlogsData={BlogsData} />
      </div>
    </>
  );
};
export default Blogs;
