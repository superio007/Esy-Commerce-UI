import React from "react";
import "../css/BlogGrid.css"; // Ensure CSS file is included

const BlogGrid = () => {
  return (
    <section className="bg-white xl:py-12">
      <section
        id="HeadingSection"
        className="xl:px-12 p-6 3xl:mx-auto 3xl:max-w-screen-xl"
      >
        <h2
          className={`Land-Blog-Heading xl:text-6xl text-4xl font-bold leading-tight text-center`}
        >
          Our Blogs
        </h2>
      </section>
      <div
        style={{ scrollbarWidth: "none" }}
        className="xl:px-12  p-6 3xl:mx-auto 3xl:max-w-screen-xl overflow-x-auto"
      >
        <div
          id="overFlow"
          className="grid grid-cols-5 grid-rows-6 gap-8 min-w-[800px] flex-shrink-0"
        >
          <div className="blog-grid row-span-4 bg-[#d22823] rounded-2xl text-white h-[350px]">
            1
          </div>
          <div className="blog-grid col-span-3 row-span-4 bg-[#d22823] rounded-2xl text-white">
            2
          </div>
          <div className="blog-grid row-span-4 col-start-5 row-start-3 bg-[#d22823] rounded-2xl text-white">
            3
          </div>
          <div className="blog-grid row-span-2 col-start-5 row-start-1 bg-[#d22823] rounded-2xl text-white">
            4
          </div>
          <div className="blog-grid col-span-2 row-span-2 col-start-3 row-start-5 bg-[#d22823] rounded-2xl text-white">
            5
          </div>
          <div className="blog-grid col-span-2 row-span-2 col-start-1 row-start-5 bg-[#d22823] rounded-2xl text-white">
            6
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
