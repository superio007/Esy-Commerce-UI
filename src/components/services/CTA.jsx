import { Link } from "react-router-dom";
const CTA = ({ apiRes }) => {
  return (
    <>
      <div className="bg-white">
        <div className="p-6  md:py-16 xl:px-16 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
          <div className="flex text-center flex-col justify-center items-center gap-12">
            <h2 className="text-xl md:text-4xl font-bold">
              {apiRes.Heading ||
                `Join 100+ Successful Tech Companies — Start Your Custom Software
              Journey Today`}
            </h2>
            <button>
              <Link to="/contact">
                <span
                  href=""
                  className="bg-[#007fff] text-white py-4 px-12 rounded-2xl"
                >
                  Chat With Us
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CTA;
