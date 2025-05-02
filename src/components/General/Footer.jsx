import WebsitLogo from "../../../src/assets/General/Logo.png";
import styles from "./css/Footer.module.scss";
import { Link } from "react-router-dom";
import { TbBrandFacebook } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  
  SlSocialFacebook,
} from "react-icons/sl";
import { FiYoutube,FiFacebook , FiLinkedin } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import FooterBrands from "../../../src/assets/General/footerBrands.png";
import { useEffect, useState } from "react";
const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className={`${styles.Footer} bg-white  w-full`}>
        <div className={styles.FooterContainer}>
          <div
            className={`border-b-1 border-[#e7e7e7] ${styles.FirstFooterContainer} xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl`}
          >
            <div className="flex md:flex-row flex-col md:justify-between md:items-center px-6 md:p-2">
              <div className="flex flex-col md:flex-row md:gap-6 gap-3">
                <Link
                  className={styles.hoverNavTag}
                  to={"/about"}
                  onClick={handleClick}
                >
                  <p>About</p>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/services"}
                  onClick={handleClick}
                >
                  <p>Services</p>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/blogs"}
                  onClick={handleClick}
                >
                  <p>Blog</p>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/faq"}
                  onClick={handleClick}
                >
                  <p>FAQ</p>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/career"}
                  onClick={handleClick}
                >
                  <p>Careers</p>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/contact"}
                  onClick={handleClick}
                >
                  <p>Contact</p>
                </Link>
              </div>
              <div className="flex items-baseline gap-3 mt-8 md:mt-0">
                <Link
                  className={styles.hoverNavTag}
                  to={
                    "https://www.linkedin.com/company/esycommerce?originalSubdomain=in"
                  }
                  target="_blank"
                >
                  <FiLinkedin className="text-[#00234b] hover:text-[#007fff] text-xl" />
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={
                    "https://www.youtube.com/channel/UCnrZjfj9nMDt76ibDXYHqQQ"
                  }
                  target="_blank"
                >
                  <FiYoutube className="text-[#00234b] hover:text-[#007fff] text-xl" />
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"https://www.instagram.com/esycommerce/"}
                  target="_blank"
                >
                  <FaInstagram className="text-[#00234b] hover:text-[#007fff] text-xl" />
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"https://x.com/EsyCommerce"}
                  target="_blank"
                >
                  <FaXTwitter className="text-[#00234b] hover:text-[#007fff] text-xl" />
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"https://www.facebook.com/esycommerce"}
                  target="_blank"
                >
                  <FiFacebook
                    className="text-[#00234b] hover:text-[#007fff]
                  text-xl"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${styles.SecondFooterContainer} px-6 xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl xl:grid xl:grid-rows-1 xl:grid-cols-5 md:grid md:grid-rows-2 md:grid-cols-2  gap-6 `}
          >
            <div className="col-span-1">
              <img
                className="mb-3"
                style={{ maxWidth: "90%", width: "400px" }}
                src={WebsitLogo}
                alt="Website Logo"
              />
              <p className="p-1 mb-6 leading-normal text-[16px] ">
                Your one stop service <br /> provider for all HITL data <br />{" "}
                labeling and content <br /> management services <br /> required
                for successful AI & <br /> Machine Learning projects.
              </p>
              <img
                style={{ maxWidth: "86%", width: "400px" }}
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
                <Link
                  className={styles.hoverNavTag}
                  to={"/ecommerce"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Ecommerce</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/design"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Design</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/development"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Development</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/bpm"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>BPM</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/about"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>About Us</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/contact"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Contact Us</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-3 leading-normal text-[18px] font-bold">
                Legal Compliance
              </h2>
              <ul style={{ width: "max-content" }}>
                <Link
                  className={styles.hoverNavTag}
                  to={"/privacy-policy"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Privacy Policy</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/ethics-policy"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Ethics Policy</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/data-security-policy"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Data Security Policy</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/code-of-conduct"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Code of Conduct</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/information-security"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Information Security</p>
                  </li>
                </Link>
                <Link
                  className={styles.hoverNavTag}
                  to={"/sitemap"}
                  onClick={handleClick}
                >
                  <li
                    className={`${styles.navHeads} mb-3 leading-normal flex gap-6 items-center justify-between`}
                  >
                    <p>Site Map</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="xl:col-span-2 md:col-span-1">
              <h2 className="mb-3 leading-normal text-[18px] font-bold">
                Contact Us
              </h2>
              <div className="pb-5">
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
            className={`text-center ${styles.ThirdFooterContainer}`}
            style={{ borderTop: "1px solid #e7e7e7" }}
          >
            <p className="text-sm text-gray-600">
              © 2025 EsyCommerce Digital Services LLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
