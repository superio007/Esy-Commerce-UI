import WebsitLogo from "./assets/Logo.png";
import styles from "./css/Footer.module.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import FooterBrands from "./assets/footerBrands.png";
const Footer = () => {
  return (
    <>
      <div className={`${styles.Footer} bg-white  w-full`}>
        <div className="border-b-1 border-[#e7e7e7] py-9 xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl">
          <div className="flex md:flex-row flex-col md:justify-between md:items-center p-6 md:p-2">
            <div className="flex flex-col md:flex-row md:gap-6 gap-3">
              <Link to={"/about"}>
                <p>About</p>
              </Link>
              <Link to={"/services"}>
                <p>Services</p>
              </Link>
              <Link to={"/blogs"}>
                <p>Blog</p>
              </Link>
              <Link to={"/why-us"}>
                <p>Why Us</p>
              </Link>
              <Link to={"/contact"}>
                <p>Contact</p>
              </Link>
            </div>
            <div className="mt-8 md:mt-0">
              <Link
                to={
                  "https://www.linkedin.com/company/esycommerce?originalSubdomain=in"
                }
              >
                <FaLinkedin className="text-[#00234b] hover:text-[#007fff] text-md" />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-14 p-6 xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl xl:grid xl:grid-rows-1 xl:grid-cols-5 md:grid md:grid-rows-2 md:grid-cols-2  gap-6 ">
          <div className="col-span-1">
            <img
              className="mb-6"
              style={{ maxWidth: "70%", width: "400px" }}
              src={WebsitLogo}
              alt="Website Logo"
            />
            <p className="p-1 mb-6 leading-normal text-[16px] ">
              Your one stop service <br /> provider for all HITL data <br />{" "}
              labeling and content <br /> management services <br /> required
              for successful AI & <br /> Machine Learning projects.
            </p>
            <img
              style={{ maxWidth: "70%", width: "400px" }}
              src={FooterBrands}
              className="mb-6"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <h2 className="mb-3 leading-normal text-[18px] font-bold">
              Our Services
            </h2>
            <ul style={{ width: "max-content" }}>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>Ecommerce</p>
              </li>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>Design</p>
              </li>

              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>Development</p>
              </li>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>BPM</p>
              </li>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>About Us</p>
              </li>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>Contact Us</p>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="mb-3 leading-normal text-[18px] font-bold">
              Legal Compliance
            </h2>
            <ul style={{ width: "max-content" }}>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>Privacy Policy</p>
              </li>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>Ethics Policy</p>
              </li>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>Data Security Policy</p>
              </li>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>Code of Conduct</p>
              </li>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>Information Security</p>
              </li>
              <li
                className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
              >
                <p>FAQ</p>
              </li>
            </ul>
          </div>
          <div className="xl:col-span-2 md:col-span-1">
            <h2 className="mb-1 leading-normal text-[18px] font-bold">
              Contact Us
            </h2>
            <div className="pb-1">
              <p className="flex  flex-wrap gap-2 text-1xl leading-normal font-medium mb-2">
                <img
                  className="w-[25px]"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1fa-1f1f8.svg"
                  alt=""
                />
                EsyCommerce Digital Services LLC
              </p>
              <p className="font-normal text-[16px] ">
                447 Broadway, 2nd Floor, Suite 896,
                <br /> New York, New York 10013, USA <br /> Phone: +1 (279)
                732-6842
              </p>
            </div>
            <div className="">
              <p className="flex flex-wrap gap-2 text-1xl leading-normal font-medium mb-2">
                <img
                  className="w-[25px]"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1ee-1f1f3.svg"
                  alt=""
                />
                Offshore Global Capability Center (GCC)
              </p>
              <p className="font-normal text-[16px] ">
                811, Opal Business Park, Wagle Estate <br /> Thane, Mumbai 400
                606, India <br /> Phone: +91 865-223-3399
              </p>
            </div>
          </div>
        </div>
        <div
          className="text-center py-6"
          style={{ borderTop: "1px solid #e7e7e7" }}
        >
          <p className="text-sm text-gray-600">
            © 2025 EsyCommerce Digital Services LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
