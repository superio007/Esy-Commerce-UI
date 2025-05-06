import React from "react";
import styles from "../css/SiteMap.module.scss";
import { Link } from "react-router-dom";
const SiteMap = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          id=""
          className={`${styles.SiteMapHead} xl:px-16 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <section className="px-6 md:px-0">
            <h1 className={`${styles.SiteMapHeading} text-center capitalize`}>
              Site Map
            </h1>
          </section>
        </section>
      </div>
      <div className="bg-white">
        <div
          className={`${styles.SiteMapHead} xl:px-16 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <div className="px-6 md:px-0">
            <div className="flex justify-center">
              <Link to="/" onClick={handleClick}>
                <h2 className="md:text-center text-2xl font-bold">Home</h2>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:text-center mt-10">
              <div className="flex flex-col gap-2">
                <h3 className="mb-3 underline">Face Pages</h3>
                <Link to={"/about"} onClick={handleClick}>
                  <p>About</p>
                </Link>
                <Link to={"/career"} onClick={handleClick}>
                  <p>Career</p>
                </Link>
                <Link to={"/blogs"} onClick={handleClick}>
                  <p>Blogs</p>
                </Link>
                <Link to={"/case-studies"} onClick={handleClick}>
                  <p>Case Studies</p>
                </Link>
                <Link to={"/why-us"} onClick={handleClick}>
                  <p>Why Us</p>
                </Link>
                <Link to={"/services"} onClick={handleClick}>
                  <p>Services</p>
                </Link>
                <Link to={"/contact"} onClick={handleClick}>
                  <p>Contact</p>
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-3 underline">Services Pages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 md:text-center gap-2">
                  <div>
                    {/* ecommerce */}
                    <Link to={"/ecommerce"} onClick={handleClick}>
                      <p className="font-bold">Ecommerce</p>
                    </Link>
                    <Link to={"/ecommerce-consultation"} onClick={handleClick}>
                      <p>--Ecommerce Consultation (Performance)</p>
                    </Link>
                    <Link to={"/ecommerce-enablement"} onClick={handleClick}>
                      <p>--Ecommerce Enablement Service </p>
                    </Link>
                    <Link
                      to={"/ecommerce-website-development"}
                      onClick={handleClick}
                    >
                      <p>--Ecommerce Website Development (TechDev)</p>
                    </Link>
                    {/* Design */}
                    <Link to={"/design"} onClick={handleClick}>
                      <p className="font-bold md:mt-2">Design</p>
                    </Link>
                    <Link
                      to={"/youtube-content-marketing"}
                      onClick={handleClick}
                    >
                      <p>--YouTube Content Marketing</p>
                    </Link>
                    <Link
                      to={"/linkedin-content-marketing"}
                      onClick={handleClick}
                    >
                      <p>--LinkedIn Content Marketing</p>
                    </Link>
                    <Link
                      to={"/identity-branding-communication"}
                      onClick={handleClick}
                    >
                      <p>--Identity, Branding & Communication</p>
                    </Link>
                    <Link
                      to={"/custom-website-development"}
                      onClick={handleClick}
                    >
                      <p>--Custom Website Development</p>
                    </Link>
                  </div>
                  <div>
                    {/* Development*/}

                    <Link to={"/development"} onClick={handleClick}>
                      <p className="font-bold">Development</p>
                    </Link>
                    <Link to={"/cms-development"} onClick={handleClick}>
                      <p className="font-medium">CMS Development</p>
                    </Link>
                    <Link to={"/crm-customization"} onClick={handleClick}>
                      <p className="font-medium">CRM Customization</p>
                    </Link>
                    <Link to={"/custom-development"} onClick={handleClick}>
                      <p className="font-medium">Custom Development</p>
                    </Link>
                    <Link to={"/staff-off-services"} onClick={handleClick}>
                      <p className="font-medium">Staff Augmentation</p>
                    </Link>
                    {/* BPM */}
                    <Link to={"/bpm"} onClick={handleClick}>
                      <p className="font-bold md:mt-2">BPM</p>
                    </Link>
                    <Link to={"/content-migration"} onClick={handleClick}>
                      <p>--Content Migration</p>
                    </Link>
                    <Link to={"/translation"} onClick={handleClick}>
                      <p>--Translation</p>
                    </Link>
                    <Link to={"/transcription"} onClick={handleClick}>
                      <p>--Transcription</p>
                    </Link>
                    <Link to={"/transliteration"} onClick={handleClick}>
                      <p>--Transliteration</p>
                    </Link>
                    <Link
                      to={"/data-labeling-annotation"}
                      onClick={handleClick}
                    >
                      <p>--Data Labeling & Annotation</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-3 underline">Policies Pages</h3>
                <Link to={"/privacy-policy"} onClick={handleClick}>
                  <p>Privacy Policy</p>
                </Link>
                <Link to={"/ethics-policy"} onClick={handleClick}>
                  <p>Ethics Policy</p>
                </Link>
                <Link to={"/data-security-policy"} onClick={handleClick}>
                  <p>Data Security Policy</p>
                </Link>
                <Link to={"/code-of-conduct"} onClick={handleClick}>
                  <p>Code of Conduct</p>
                </Link>
                <Link to={"/information-security"} onClick={handleClick}>
                  <p>Information Security</p>
                </Link>
                <Link to={"/faq"} onClick={handleClick}>
                  <p>FAQ</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SiteMap;
