import BlogCards from "./BlogCards";
const blogsSection = ({ BlogsData }) => {
  return (
    <>
      <div className="xl:px-12 p-6 3xl:mx-auto 3xl:max-w-screen-xl py-12 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {BlogsData.map((study) => (
            <BlogCards key={study.id} study={study} />
          ))}
        </div>
      </div>
    </>
  );
};
export default blogsSection;
