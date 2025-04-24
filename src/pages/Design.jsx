import styles from "../css/Design.module.scss";
import { Link } from "react-router-dom";
import React from "react";
// import Youtube from "../assets/Services/YoutubeContentMarketing.png";
// import LinkedIn from "../assets/Services/LinkedinContentMarketing.png";
// import Identity from "../assets/Services/IdentityBrandingCommunication.png";
// import CustomWebsite from "../assets/Services/custom-website-development.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Youtube from "../assets/Services/YouTube.lottie";
import LinkedIn from "../assets/Services/LinkedInContMkt.lottie";
import Identity from "../assets/Services/IdentityBrandingCommunication.png";
import CustomWebsite from "../assets/Services/WebDevelopment.lottie";
const Design = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <div className={styles.Design}>
          <section
            className={`xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
          >
            <div className="px-6 md:px-0">
              <h1
                className={`${styles.DesignHeading} text-center text-white capitalize`}
              >
                Design
              </h1>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-white">
        <div className={styles.Design}>
          <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
            <div className="px-6 md:px-0">
              {/* YouTube Content Marketing */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0  ">
                    <h2 className={styles.DesignH2}>
                      YouTube Content Marketing
                    </h2>
                    <p className={styles.Designp}>
                      We help brands build engaging YouTube channels that drive
                      traffic, build trust, and convert viewers into customers.
                      From strategy and scripting to editing and optimization,
                      we handle the entire video marketing process. Leverage the
                      world’s second-largest search engine with content that
                      educates, entertains, and sells.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/youtube-content-marketing"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <DotLottieReact src={Youtube} loop autoplay />
                  </div>
                </div>
              </section>
              {/* LinkedIn Content Marketing */}
              <section className={styles.DivSpace}>
                <div className="flex px-5 md:py-16 py-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={LinkedIn}
                    /> */}
                    <DotLottieReact src={LinkedIn} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left  ">
                    <h1 className={styles.DesignH2Middle}>
                      LinkedIn Content Marketing
                    </h1>
                    <p className={styles.Designp}>
                      Position your brand as an industry thought leader with
                      high-impact LinkedIn content. We craft strategic posts,
                      carousels, and articles that spark conversations and build
                      credibility. Whether you're targeting B2B clients or
                      hiring top talent, our LinkedIn marketing services drive
                      real business results.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/linkedin-content-marketing"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* Identity, Branding & Communication */}
              <section className={styles.DivSpace}>
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0  ">
                    <h2 className={styles.DesignH2}>
                      Identity, Branding & Communication
                    </h2>
                    <p className={styles.Designp}>
                      Your brand is more than a logo—it’s how the world sees and
                      experiences your business. We help shape your brand’s
                      identity with compelling visuals, tone of voice, and
                      messaging that resonate with your audience. From brand
                      strategy to design systems, we create identities that
                      stand out and scale.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/identity-branding-communication"}
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
                      src={Identity}
                    />
                  </div>
                </div>
              </section>
              {/* Custom Website Development */}
              <section className={styles.DivSpace}>
                <div className="flex px-5 md:pt-16 pt-8 md:flex-row flex-col items-center">
                  <div className="w-full md:w-1/2 flex justify-start">
                    {/* <img
                      className="object-cover object-center rounded w-full max-w-md"
                      alt="hero"
                      src={CustomWebsite}
                    /> */}
                    <DotLottieReact src={CustomWebsite} loop autoplay />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:items-start text-left  ">
                    <h1 className={styles.DesignH2Middle}>
                      Custom Website Development
                    </h1>
                    <p className={styles.Designp}>
                      We specialize in building bespoke websites tailored to
                      your unique business goals. Whether it's an ecommerce
                      store, corporate website, or a landing page funnel, our
                      custom development ensures fast load times, mobile
                      responsiveness, SEO optimization, and seamless user
                      experience—crafted to convert.
                    </p>
                    <div className="flex md:justify-center">
                      <Link
                        to={"/custom-website-development"}
                        className="inline-flex text-white bg-[#007fff] border-0 py-2 px-6 focus:outline-none hover:cursor-pointer rounded text-lg"
                      >
                        Know More
                      </Link>
                    </div>
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
export default Design;
