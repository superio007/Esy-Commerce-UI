import { NavLink } from "react-router-dom";
const AboutCta = () => {
    return (
      <>
        <div className="bg-white">
          <div className="p-6  xl:px-16 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="flex text-center flex-col justify-center items-center gap-12">
              <h2 className="text-xl md:text-4xl font-bold">
                Join 100+ Successful Tech Companies — Start Your Custom Software
                Journey Today
              </h2>
              <button>
                <NavLink>
                  <span
                    href=""
                    className="bg-[#007fff] text-white py-4 px-12 rounded-2xl"
                  >
                    Chat With Us
                  </span>
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
export default AboutCta