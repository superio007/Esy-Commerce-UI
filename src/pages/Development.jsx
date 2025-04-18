import styles from "../css/Development.module.scss";
import { Link } from "react-router-dom";
const Development = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={styles.Development}>
          <section
            className={`xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
          >
            <div className="px-6 md:px-0">
              <h1
                className={`${styles.DevelopmentHeading} text-center text-white capitalize`}
              >
                Development
              </h1>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-white">
        <div className={styles.Development}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {/* CMS */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0 ">
                    <h2 className={styles.DevelopmentH2}>CMS</h2>
                    <p className={styles.Developmentp}>
                      Empower your team to manage website content with ease. We
                      design and develop flexible, scalable CMS solutions using
                      platforms like WordPress, Strapi, and headless
                      architectures tailored to your workflow. Whether it’s
                      blogs, product pages, or landing sections—manage content
                      without touching code.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/cms"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src="https://dummyimage.com/720x600"
                    />
                  </div>
                </div>
              </section>
              {/* CRM */}
              <section className={styles.DivSpace}>
                <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src="https://dummyimage.com/720x600"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left ">
                    <h2 className={styles.DevelopmentH2Middle}>CRM</h2>
                    <p className={styles.Developmentp}>
                      We help businesses implement and optimize CRM systems that
                      centralize customer data, automate workflows, and improve
                      sales and support processes. From HubSpot to Zoho to
                      custom-built CRMs, we ensure seamless integration with
                      your ecommerce and marketing stack—so no lead slips
                      through the cracks.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/crm"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Custom Development */}
              <section>
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0 ">
                    <h2 className={styles.DevelopmentH2}>Custom Development</h2>
                    <p className={styles.Developmentp}>
                      Have a unique idea or business challenge that
                      off-the-shelf tools can’t solve? Our custom development
                      services bring your vision to life with tailored digital
                      solutions. From bespoke dashboards and apps to third-party
                      integrations and automation—if you can dream it, we can
                      build it.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/custom-development"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      className="w-100 object-cover object-center rounded"
                      alt="hero"
                      src="https://dummyimage.com/720x600"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Development;
