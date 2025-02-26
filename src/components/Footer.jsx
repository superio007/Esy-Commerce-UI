import WebsitLogo from "../assets/Logo.png";
import "../css/Footer.css";
import FooterBrands from "../assets/footerBrands.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
  const [isMEcomm, setisMEcomm] = useState(false);
  const [isMDesign, setisMDesign] = useState(false);
  const [isMDev, setisMDev] = useState(false);
  const [isMBpm, setisMBpm] = useState(false);
  return (
    <>
      <div className="bg-white  w-full">
        <div className="py-14 p-6 xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl xl:grid xl:grid-rows-1 xl:grid-cols-5 md:grid md:grid-rows-2 md:grid-cols-2  gap-6 ">
          <div className="col-span-1">
            <img
              className="mb-6"
              style={{ maxWidth: "70%", width: "400px" }}
              src={WebsitLogo}
              alt="Website Logo"
            />
            <p className="p-1 mb-6 leading-normal text-[16px] text-[#00000099]">
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
            <p className="mb-3 leading-normal text-[18px]">Our Services</p>
            <ul style={{ width: "max-content" }}>
              <div style={{ position: "relative" }}>
                <li
                  onClick={() => {
                    setisMEcomm(!isMEcomm);
                    setisMDesign(false);
                    setisMDev(false);
                    setisMBpm(false);
                  }}
                  className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between"
                >
                  Ecommerce
                  {isMEcomm ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </li>
                {isMEcomm && (
                  <li
                    style={{
                      position: "absolute",
                      width: "max-content",
                      zIndex: "999",
                    }}
                  >
                    <div className="bg-white p-4">
                      <ul>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            Ecommerce Consultation (Performance)
                          </NavLink>
                        </li>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            Ecommerce Enablement (Operations)
                          </NavLink>
                        </li>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            Ecommerce Website Development (TechDev)
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
              </div>
              <div style={{ position: "relative" }}>
                <li
                  onClick={() => {
                    setisMEcomm(false);
                    setisMDesign(!isMDesign);
                    setisMDev(false);
                    setisMBpm(false);
                  }}
                  className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between"
                >
                  Design
                  {isMDesign ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </li>
                {isMDesign && (
                  <li
                    style={{
                      position: "absolute",
                      width: "max-content",
                      zIndex: "999",
                    }}
                  >
                    <div className="bg-white p-4">
                      <ul>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            YouTube Content Marketing
                          </NavLink>
                        </li>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            LinkedIn Content Marketing
                          </NavLink>
                        </li>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            Identity, Branding & Communication
                          </NavLink>
                        </li>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            Custom Website Development
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
              </div>
              <div style={{ position: "relative" }}>
                <li
                  onClick={() => {
                    setisMEcomm(false);
                    setisMDesign(false);
                    setisMDev(!isMDev);
                    setisMBpm(false);
                  }}
                  className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between"
                >
                  Development
                  {isMDev ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </li>
                {isMDev && (
                  <li
                    style={{
                      position: "absolute",
                      zIndex: "999",
                      width: "max-content",
                      height: "160px",
                      overflowY: "scroll",
                      scrollbarWidth: "none",
                    }}
                  >
                    <div className="bg-white p-4">
                      <ul>
                        <li className="mb-4">CMS</li>
                        <div className="pl-4">
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              WordPress
                            </NavLink>
                          </li>
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              Drupal
                            </NavLink>
                          </li>
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              Joomla
                            </NavLink>
                          </li>
                        </div>
                        <li className="mb-4">CRM</li>
                        <div className="pl-4">
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              Salesforce
                            </NavLink>
                          </li>
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              HubSpot
                            </NavLink>
                          </li>
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              Odoo
                            </NavLink>
                          </li>
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              Zoho
                            </NavLink>
                          </li>
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              ERP
                            </NavLink>
                          </li>
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              ERPNext
                            </NavLink>
                          </li>
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              Microsoft Dynamics
                            </NavLink>
                          </li>
                          <li className="mb-6 ">
                            <NavLink
                              href="#"
                              className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                            >
                              Oracle NetSuite
                            </NavLink>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </li>
                )}
              </div>
              <div style={{ position: "relative" }}>
                <li
                  onClick={() => {
                    setisMEcomm(false);
                    setisMDesign(false);
                    setisMDev(false);
                    setisMBpm(!isMBpm);
                  }}
                  className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between"
                >
                  BPM
                  {isMBpm ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </li>
                {isMBpm && (
                  <li
                    style={{
                      position: "absolute",
                      zIndex: "999",
                      width: "max-content",
                      height: "120px",
                      overflowY: "scroll",
                      scrollbarWidth: "none",
                    }}
                  >
                    <div className="bg-white p-4">
                      <ul>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            CONTENT MIGRATION
                          </NavLink>
                        </li>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            TRANSLATION
                          </NavLink>
                        </li>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            TRANSCRIPTION
                          </NavLink>
                        </li>
                        <li className="mb-6 ">
                          <NavLink
                            href="#"
                            className="Menu-item-text text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5"
                          >
                            TRANSLITERATION
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
              </div>
              <li
                onClick={() => {
                  setisMEcomm(false);
                  setisMDesign(false);
                  setisMDev(false);
                  setisMBpm(false);
                }}
                className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between"
              >
                About Us
              </li>
              <li
                onClick={() => {
                  setisMEcomm(false);
                  setisMDesign(false);
                  setisMDev(false);
                  setisMBpm(false);
                }}
                className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between"
              >
                Contact Us
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="mb-3 leading-normal text-[18px]">Legal Compliance</p>
            <ul style={{ width: "max-content" }}>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                Privacy Policy
              </li>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                Ethics Policy
              </li>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                Data Security Policy
              </li>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                Code of Conduct
              </li>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                Information Security
              </li>
            </ul>
          </div>
          <div className="xl:col-span-2 md:col-span-1">
            <p className="mb-3 leading-normal text-[18px]">Contact Us</p>
            <div className="p-3.5  ">
              <p className="flex  flex-wrap gap-2 text-1xl leading-normal font-medium mb-2">
                <img
                  className="w-[25px]"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1fa-1f1f8.svg"
                  alt=""
                />
                EsyCommerce Digital Services LLC
              </p>
              <p className="font-normal text-[16px] text-[#00000099]">
                447 Broadway, 2nd Floor, Suite 896,
                <br /> New York, New York 10013, USA <br /> Phone: +1 (279)
                732-6842
              </p>
            </div>
            <div className="p-3.5">
              <p className="flex flex-wrap gap-2 text-1xl leading-normal font-medium mb-2">
                <img
                  className="w-[25px]"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1ee-1f1f3.svg"
                  alt=""
                />
                Offshore Global Capability Center (GCC)
              </p>
              <p className="font-normal text-[16px] text-[#00000099]">
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
}
export default Footer;