import React from "react";
import { useParams } from "react-router-dom";

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
let blogData = [];
const SingleBlogs = () => {
    let title = useParams().title.split("-").join(" ");
    BlogsData.map((blog) =>{
        if (blog.title === title) {
            blogData = blog;
        }
    })
    return (
        <>
        </>
    );
};
export default SingleBlogs;