import React, { useState, useEffect, useRef } from "react";
import logoWhite from "./assets/logoWhite.png";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Sticky from "./StickyFrom";
import { motion } from "framer-motion";
import styles from "./css/Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  // Adjust the path to match your contact page route
  const isContactPage = location.pathname === "/contact";
  // Menu toggle states for desktop and mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEcommMenuOpen, setIsEcommMenu] = useState(false);
  const [isDesignMenuOpen, setIsDesignMenu] = useState(false);
  const [isDevMenuOpen, setIsDevMenu] = useState(false);
  const [isBpmMenuOpen, setIsBpmMenu] = useState(false);
  const [isMEcommMenuOpen, setMIsEcommMenu] = useState(false);
  const [isMDesignMenuOpen, setMIsDesignMenu] = useState(false);
  const [isMDevMenuOpen, setMIsDevMenu] = useState(false);
  const [isMBpmMenuOpen, setMIsBpmMenu] = useState(false);

  const menuRef = useRef(null);
  const [isFromJwtAvailble, setisFromJwtAvailble] = useState( 
    localStorage.getItem("user-token") || ""
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsEcommMenu(false);
        setIsDesignMenu(false);
        setIsDevMenu(false);
        setIsBpmMenu(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsEcommMenu(false);
        setIsDesignMenu(false);
        setIsDevMenu(false);
        setIsBpmMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Loading screen states and initial effect
  // const [showLoading, setShowLoading] = useState(true);
  // const [slideUp, setSlideUp] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSlideUp(true);
  //     setTimeout(() => {
  //       setShowLoading(false);
  //     }, 500); // match this with your transition duration
  //   }, 2000); // initial display duration
  //   return () => clearTimeout(timer);
  // }, []);

  // // Function to re-trigger the loading screen when needed (e.g., on logo click)
  // const handleLoadingScreen = () => {
  //   setShowLoading(true);
  //   setSlideUp(false);
  //   setTimeout(() => {
  //     setSlideUp(true);
  //     setTimeout(() => {
  //       setShowLoading(false);
  //     }, 500);
  //   }, 5000);
  // };

  return (
    <>
      {/* {showLoading && (
        <div
          id="loading-screen"
          className={`bg-black flex justify-center items-center h-screen transition-transform duration-500 ${
            slideUp ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <img
            className="w-[150px] animate-spin"
            src={loadingLogo}
            alt="Loading"
          />
        </div>
      )} */}

      <nav
        ref={menuRef}
        // #007fff94
        // #007fffc7
        className={`${
          isContactPage ? `bg-[#007fffc7]` : `bg-[#007fff]`
        } p-2 border-gray-200 dark:border-gray-600 relative z-9`}
      >
        <div className="flex flex-wrap justify-between items-center xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-3 relative"
            // onClick={handleLoadingScreen}
          >
            <img
              src={logoWhite}
              className={`h-8 ${styles.WebsiteLogo}`}
              alt="Ecommerce Logo"
            />
          </NavLink>

          {/* Desktop Menu (Visible on xl screens) */}
          <div
            id="mega-menu-full-cta"
            className="hidden xl:flex items-center w-auto"
          >
            <ul
              id="desk-menu"
              className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse"
            >
              <li className={styles.navHeads}>
                <a
                  onClick={() => {
                    setIsEcommMenu(!isEcommMenuOpen);
                    setIsDesignMenu(false);
                    setIsDevMenu(false);
                    setIsBpmMenu(false);
                  }}
                >
                  Ecommerce
                </a>
                {isEcommMenuOpen && (
                  <div
                    style={{
                      position: "absolute",
                      width: "max-content",
                      top: "3.28rem",
                      left: "-25px",
                    }}
                  >
                    <div className="bg-white px-10 3xl:mx-auto 3xl:max-w-screen-xl py-4">
                      <ul>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Ecommerce Consultation (Performance)
                          </NavLink>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Ecommerce Enablement (Operations)
                          </NavLink>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Ecommerce Website Development (TechDev)
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#1b8dff]  p-2">
                      <span className="block text-white text-center">
                        Have a Query?
                      </span>
                    </div>
                  </div>
                )}
              </li>
              <li className={styles.navHeads}>
                <a
                  onClick={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(!isDesignMenuOpen);
                    setIsDevMenu(false);
                    setIsBpmMenu(false);
                  }}
                >
                  Design
                </a>
                {isDesignMenuOpen && (
                  <div
                    style={{
                      position: "absolute",
                      width: "max-content",
                      top: "3.28rem",
                      left: "-25px",
                    }}
                  >
                    <div className="bg-white px-10 3xl:mx-auto 3xl:max-w-screen-xl py-4">
                      <ul>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            YouTube Content Marketing
                          </NavLink>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            LinkedIn Content Marketing
                          </NavLink>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Identity, Branding & Communication
                          </NavLink>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Custom Website Development
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#1b8dff]  p-2">
                      <span className="block text-white text-center">
                        Have a Query?
                      </span>
                    </div>
                  </div>
                )}
              </li>
              <li className={styles.navHeads}>
                <a
                  onClick={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(false);
                    setIsDevMenu(!isDevMenuOpen);
                    setIsBpmMenu(false);
                  }}
                >
                  Development
                </a>
                {isDevMenuOpen && (
                  <div
                    style={{
                      position: "absolute",
                      width: "max-content",
                      top: "3.28rem",
                      left: "-25px",
                    }}
                  >
                    <div className="bg-white px-10 3xl:mx-auto 3xl:max-w-screen-xl py-4">
                      <div className="md:flex justify-left gap-8">
                        <ul>
                          <li>CMS</li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              WordPress
                            </NavLink>
                          </li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              Drupal
                            </NavLink>
                          </li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              Joomla
                            </NavLink>
                          </li>
                        </ul>
                        <ul>
                          <li>CRM</li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              Salesforce
                            </NavLink>
                          </li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              HubSpot
                            </NavLink>
                          </li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              Odoo
                            </NavLink>
                          </li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              Zoho
                            </NavLink>
                          </li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              ERP
                            </NavLink>
                          </li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              ERPNext
                            </NavLink>
                          </li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              Microsoft Dynamics
                            </NavLink>
                          </li>
                          <li className="lg:mt-2 mt-1.5 ">
                            <NavLink
                              className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                            >
                              Oracle NetSuite
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-[#1b8dff]  p-2">
                      <span className="block text-white text-center">
                        Have a Query?
                      </span>
                    </div>
                  </div>
                )}
              </li>
              <li className={styles.navHeads}>
                <a
                  onClick={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(false);
                    setIsDevMenu(false);
                    setIsBpmMenu(!isBpmMenuOpen);
                  }}
                >
                  BPM
                </a>
                {isBpmMenuOpen && (
                  <div
                    style={{
                      position: "absolute",
                      width: "max-content",
                      top: "3.28rem",
                      left: "-25px",
                    }}
                  >
                    <div className="bg-white px-10 3xl:mx-auto 3xl:max-w-screen-xl py-4">
                      <ul>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Content Migration
                          </NavLink>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Translation
                          </NavLink>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Transcription
                          </NavLink>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Transliteration
                          </NavLink>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <NavLink
                            className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Data Labeling & Annotation
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#1b8dff] p-2">
                      <span className="block text-white text-center">
                        Have a Query?
                      </span>
                    </div>
                  </div>
                )}
              </li>
              <li className={styles.navHeads}>
                <Link
                  to={"/about"}
                  onClick={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(false);
                    setIsDevMenu(false);
                    setIsBpmMenu(false);
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className={styles.navHeads}>
                <Link
                  to={"/contact"}
                  onClick={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(false);
                    setIsDevMenu(false);
                    setIsBpmMenu(false);
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="xl:hidden relative w-10 h-10 flex items-end justify-start rounded-md focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="relative w-6 h-6 flex flex-col justify-between"
            >
              {/* Top Line */}
              <motion.span
                className="absolute w-6 h-0.5 bg-gray-500 rounded"
                variants={{
                  closed: { rotate: 0, y: -6 },
                  open: { rotate: 45, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Middle Line */}
              <motion.span
                className="absolute w-6 h-0.5 bg-gray-500 rounded"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Bottom Line */}
              <motion.span
                className="absolute w-6 h-0.5 bg-gray-500 rounded"
                variants={{
                  closed: { rotate: 0, y: 6 },
                  open: { rotate: -45, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu (Toggled) */}
        <div
          className={`xl:hidden ${styles.mobileMenuNav} ${
            isMenuOpen ? "block" : "hidden"
          } p-4 bg-white xl:px-10 flex flex-col justify-between min-h-screen`}
        >
          <ul style={{ overflowY: "scroll" }} className="space-y-4">
            <li className={styles.navHeadsMobile}>
              <NavLink
                className="flex justify-between items-center text-gray-900 hover:text-blue-700"
                onClick={() => {
                  setMIsEcommMenu(!isMEcommMenuOpen);
                  setMIsDesignMenu(false);
                  setMIsDevMenu(false);
                  setMIsBpmMenu(false);
                }}
              >
                Ecommerce
                {isMEcommMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </NavLink>
            </li>
            {isMEcommMenuOpen && (
              <li>
                <div className="bg-white p-4">
                  <ul>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Ecommerce Consultation (Performance)
                      </NavLink>
                    </li>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Ecommerce Enablement (Operations)
                      </NavLink>
                    </li>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Ecommerce Website Development (TechDev)
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li className={styles.navHeadsMobile}>
              <NavLink
                onClick={() => {
                  setMIsEcommMenu(false);
                  setMIsDesignMenu(!isMDesignMenuOpen);
                  setMIsDevMenu(false);
                  setMIsBpmMenu(false);
                }}
                className="flex justify-between items-center text-gray-900 hover:text-blue-700"
              >
                Design
                {isMDesignMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </NavLink>
            </li>
            {isMDesignMenuOpen && (
              <li>
                <div className="bg-white p-4">
                  <ul>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        YouTube Content Marketing
                      </NavLink>
                    </li>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        LinkedIn Content Marketing
                      </NavLink>
                    </li>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Identity, Branding & Communication
                      </NavLink>
                    </li>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Custom Website Development
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li className={styles.navHeadsMobile}>
              <NavLink
                onClick={() => {
                  setMIsEcommMenu(false);
                  setMIsDesignMenu(false);
                  setMIsDevMenu(!isMDevMenuOpen);
                  setMIsBpmMenu(false);
                }}
                className="flex justify-between items-center text-gray-900 hover:text-blue-700"
              >
                Development
                {isMDevMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </NavLink>
            </li>
            {isMDevMenuOpen && (
              <li>
                <div className="bg-white p-4">
                  <ul>
                    <li className="mb-4">CMS</li>
                    <div className="pl-4">
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          WordPress
                        </NavLink>
                      </li>
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          Drupal
                        </NavLink>
                      </li>
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          Joomla
                        </NavLink>
                      </li>
                    </div>
                    <li className="mb-4">CRM</li>
                    <div className="pl-4">
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          Salesforce
                        </NavLink>
                      </li>
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          HubSpot
                        </NavLink>
                      </li>
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          Odoo
                        </NavLink>
                      </li>
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          Zoho
                        </NavLink>
                      </li>
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          ERP
                        </NavLink>
                      </li>
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          ERPNext
                        </NavLink>
                      </li>
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          Microsoft Dynamics
                        </NavLink>
                      </li>
                      <li className="mb-6 ">
                        <NavLink
                          className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        >
                          Oracle NetSuite
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </div>
              </li>
            )}
            <li className={styles.navHeadsMobile}>
              <NavLink
                onClick={() => {
                  setMIsEcommMenu(false);
                  setMIsDesignMenu(false);
                  setMIsDevMenu(false);
                  setMIsBpmMenu(!isMBpmMenuOpen);
                }}
                className="text-gray-900 flex justify-between items-center hover:text-blue-700"
              >
                BPM
                {isMBpmMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </NavLink>
            </li>
            {isMBpmMenuOpen && (
              <li>
                <div className="bg-white p-4">
                  <ul>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Content Migration
                      </NavLink>
                    </li>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Translation
                      </NavLink>
                    </li>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Transcription
                      </NavLink>
                    </li>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Transliteration
                      </NavLink>
                    </li>
                    <li className="mb-6 ">
                      <NavLink
                        className={`${styles.MenuItemText} text-gray-900 rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Data Labeling & Annotation
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li className={styles.navHeadsMobile}>
              <NavLink
                onClick={() => {
                  setMIsEcommMenu(false);
                  setMIsDesignMenu(false);
                  setMIsDevMenu(false);
                  setMIsBpmMenu(false);
                }}
                className="text-gray-900 hover:text-blue-700"
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <div
            style={{
              textAlign: "center",
              marginTop: "auto",
              paddingBottom: "10px",
            }}
          >
            {isFromJwtAvailble ? (
              <ul className="flex justify-center items-center bg-[#1b8dff] text-white">
                <li className={styles.navHeadsMobile}>
                  <NavLink
                    onClick={() => {
                      setMIsEcommMenu(false);
                      setMIsDesignMenu(false);
                      setMIsDevMenu(false);
                      setMIsBpmMenu(false);
                    }}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            ) : (
              <Sticky />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
