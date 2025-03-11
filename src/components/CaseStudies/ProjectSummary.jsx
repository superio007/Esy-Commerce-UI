const ProjectSummary = () => {
  return (
    <section className="bg-white">
      <section className="p-6 xl:px-16 py-[60px] 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="flex md:flex-row flex-col gap-12 items-start md:items-center">
          <div>
            <h2 className="text-3xl font-bold ">
              Project Summary:
            </h2>
            <p className=" mt-4 leading-relaxed max-w-3xl">
              Kadeya, a company focused on eliminating single-use plastics
              through smart beverage vending machines, partnered with us to
              develop a comprehensive dashboard. This dashboard consolidates and
              displays critical data across customers and users, allowing Kadeya
              to monitor sales, user engagement, and operational efficiency in
              real-time. We delivered an intuitive, easy-to-use product that met
              Kadeya’s business needs efficiently.
            </p>

            {/* Tech Stack & Engagement Model */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Core Technologies */}
              <div>
                <h3 className="text-lg font-semibold ">
                  Core Technologies
                </h3>
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
                <h3 className="text-lg font-semibold ">
                  Engagement model
                </h3>
                <div className="mt-3">
                  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                    Software Outsourcing
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Team Size */}
          <div className="mt-8 grid grid-cols-1 justify-items-center gap-3">
            <p className="text-sm font-bold">Team size</p>
            <div className="text-center border border-gray-300 rounded-full w-24 h-24 flex flex-col items-center justify-center">
              <p className="text-6xl font-bold ">3</p>
            </div>
            <p className="text-sm ">Specialists</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectSummary;
