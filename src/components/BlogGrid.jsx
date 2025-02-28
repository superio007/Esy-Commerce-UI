import React from "react";
import "../css/BlogGrid.css"; // Ensure CSS file is included

const BlogGrid = () => {
  return (
    <div id="overFlow" className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
      <div className="grid grid-cols-11 grid-rows-8 gap-5 py-24">
        <div className="blog-grid col-span-7 row-span-5 bg-white rounded-2xl h-[350px]">1</div>
        <div className="blog-grid col-span-4 row-span-3 col-start-8 bg-white rounded-2xl">
          7
        </div>
        <div
          className="blog-grid col-span-4 row-span-2 col-start-8 row-start-4
          bg-white
          rounded-2xl"
        >
          8
        </div>
        <div className="blog-grid col-span-8 row-span-3 row-start-6 bg-white rounded-2xl">
          9
        </div>
        <div
          className="blog-grid col-span-3 row-span-3 col-start-9 row-start-6
          bg-white
          rounded-2xl"
        >
          10
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
