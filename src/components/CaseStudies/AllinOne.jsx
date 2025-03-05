import "./css/AllinOne.css";
import TestimonialCard from "./TestimonialCard";
import { FaArrowRight } from "react-icons/fa";
import Enquery from "./Enquery";

const AllinOne = () => {
  return (
    <>
      <section className="3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="bg-[#007fff] CaseStudyHeader relative">
          <div className="p-6 xl:px-16 py-[60px]">
            {/* Two Column Layout: Content (60%) | Enquiry (40%) */}
            <div className="grid grid-cols-12 gap-8 items-start relative">
              {/* Left Side - 60% */}
              <div className="col-span-7">
                <h1 className="text-3xl font-bold leading-snug">
                  We Built a Dashboard to Turn Complex Data into Actionable
                  Insights for Kadeya’s Operations
                </h1>
                <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
                  Chat With Us <FaArrowRight />
                </button>
                <div className="mt-6">
                  <TestimonialCard />
                </div>
              </div>

              {/* Right Side - Floating Enquiry Form */}
              <div className="col-span-5 relative">
                <div className="absolute top-0 right-0 w-[90%] lg:w-[80%] xl:w-[75%] bg-white shadow-lg rounded-lg p-6">
                  <Enquery />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white">
          <section className="p-6 xl:px-16 py-[60px]">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Content (60%) */}
              <div className="col-span-7">
                <h2 className="text-3xl font-bold">Project Summary:</h2>
                <p className="mt-4 leading-relaxed max-w-3xl">
                  Kadeya, a company focused on eliminating single-use plastics
                  through smart beverage vending machines, partnered with us to
                  develop a comprehensive dashboard. This dashboard consolidates
                  and displays critical data across customers and users,
                  allowing Kadeya to monitor sales, user engagement, and
                  operational efficiency in real-time. We delivered an
                  intuitive, easy-to-use product that met Kadeya’s business
                  needs efficiently.
                </p>

                {/* Tech Stack & Engagement Model */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Core Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold">Core Technologies</h3>
                    <div className="flex flex-wrap mt-3 gap-3">
                      {[
                        "NextJs",
                        "Recharts",
                        "PostgreSQL",
                        "Tailwind",
                        "ReactJS",
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engagement Model */}
                  <div>
                    <h3 className="text-lg font-semibold">Engagement Model</h3>
                    <div className="mt-3">
                      <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                        Software Outsourcing
                      </span>
                    </div>
                  </div>

                  {/* Team Size Section */}
                  <div className="mt-8 flex flex-col items-center">
                    <p className="text-sm font-bold">Team Size</p>
                    <div className="text-center border border-gray-300 rounded-full w-24 h-24 flex flex-col items-center justify-center">
                      <p className="text-6xl font-bold">3</p>
                    </div>
                    <p className="text-sm">Specialists</p>
                  </div>
                </div>
              </div>

              {/* Right Content (40%) - Keeping it Empty to Maintain Layout */}
              <div className="col-span-5"></div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default AllinOne;
