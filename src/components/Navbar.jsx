import React, { useState } from "react";
import WebsitLogo from "../assets/Logo.png";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setisServiceDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:border-gray-600 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={WebsitLogo} className="h-8" alt="Flowbite Logo" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menu Items */}
          <div
            id="mega-menu-full-cta"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    setisServiceDropdownOpen(!isServiceDropdownOpen)
                  }
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-blue-500"
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500"
                >
                  About US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500"
                >
                  Contact US
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isServiceDropdownOpen && (
          <div id="mega-menu-full-cta-dropdown" className="mt-1">
            <div className="max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400">
              <div className="flex justify-between space-x-8">
                <ul className="space-y-2">
                  <li className="text-[#414141] font-bold">DIGITAL IDENTITY</li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      YouTube Content Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      LinkedIn Content Marketing
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-[#414141] font-bold">ECOMMERCE</li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Ecommerce Consultation (Performance)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Ecommerce Enablement (Operations)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Ecommerce Website Development (TechDev)
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-[#414141] font-bold">DESIGN</li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Identity, Branding & Communication
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Custom Website Development
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-[#414141] font-bold">DEVELOPMENT</li>
                  <div className="pl-3">
                    <li className="font-bold space-y-2 mb-1">- CMS</li>
                    <div className="pl-3">
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          WordPress
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          Drupal
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          Joomla
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="pl-3">
                    <li className="font-bold space-y-2 mb-1">- CRM </li>
                    <div className="pl-3">
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          Salesforce
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          HubSpot
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          Odoo
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          Zoho
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          ERP
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          ERPNext
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          Microsoft Dynamics
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          href="#"
                        >
                          Oracle NetSuite
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
                <ul className="space-y-2">
                  <li className="text-[#414141] font-bold">BPM</li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      CONTENT MIGRATION
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      TRANSLATION
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      TRANSCRIPTION
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      TRANSLITERATION
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      DATA LABELING & ANNOTATION
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar2;
