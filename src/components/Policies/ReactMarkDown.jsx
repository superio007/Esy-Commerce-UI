import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import React from "react";
const ReactMarkDown = ({ Content }) => {
  return (
    <>
      <div className="px-6 md:px-0">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {Content}
        </ReactMarkdown>
      </div>
    </>
  );
};
export default ReactMarkDown;
