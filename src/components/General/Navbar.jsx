import React, { useState, useEffect, useRef } from "react";
import logoWhite from "../../../src/assets/General/logoWhite.png";
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
        setIsMenuOpen(false);
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
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);
  return (
    <>
      <nav
        ref={menuRef}
        // #007fff94
        // #007fffc7
        className={`${
          isContactPage ? `bg-[#007fffc7]` : `bg-[#007fff]`
        } p-3 px-8 md:px-0 border-gray-200 dark:border-gray-600 relative z-9`}
      >
        <div className="flex flex-wrap justify-between items-center xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => {
              setMIsEcommMenu(false);
              setMIsDesignMenu(false);
              setMIsDevMenu(false);
              setMIsBpmMenu(false);
              setIsMenuOpen(false);
            }}
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
              <li className={styles.navHeadsOp}>
                <a
                  onMouseOver={() => {
                    setIsEcommMenu(!isEcommMenuOpen);
                    setIsDesignMenu(false);
                    setIsDevMenu(false);
                    setIsBpmMenu(false);
                  }}
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
                          <Link
                            to={"/ecommerce-consultation"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Ecommerce Consultation (Performance)
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            to={"/ecommerce-enablement"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Ecommerce Enablement (Operations)
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            to={"/ecommerce-website-development"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Ecommerce Website Development (TechDev)
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="bg-[#1b8dff]  p-2">
                      <span className="block text-white text-center">
                        Have a Query?
                      </span>
                    </div> */}
                  </div>
                )}
              </li>
              <li className={styles.navHeadsOp}>
                <a
                  onMouseOver={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(!isDesignMenuOpen);
                    setIsDevMenu(false);
                    setIsBpmMenu(false);
                  }}
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
                          <Link
                            to={"/youtube-content-marketing"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            YouTube Content Marketing
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            to={"/linkedin-content-marketing"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            LinkedIn Content Marketing
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            to={"/identity-branding-communication"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Identity, Branding & Communication
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            to={"/custom-website-development"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Custom Website Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="bg-[#1b8dff]  p-2">
                      <span className="block text-white text-center">
                        Have a Query?
                      </span>
                    </div> */}
                  </div>
                )}
              </li>
              <li className={styles.navHeadsOp}>
                <a
                  onMouseOver={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(false);
                    setIsDevMenu(!isDevMenuOpen);
                    setIsBpmMenu(false);
                  }}
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
                      <ul>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            to={"/cms"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            CMS
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            to={"/crm"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            CRM
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            to={"/custom-development"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Custom Development
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            to={"/staff-off-services"}
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Staff Off Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="bg-[#1b8dff]  p-2">
                      <span className="block text-white text-center">
                        Have a Query?
                      </span>
                    </div> */}
                  </div>
                )}
              </li>
              <li className={styles.navHeadsOp}>
                <a
                  onMouseOver={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(false);
                    setIsDevMenu(false);
                    setIsBpmMenu(!isBpmMenuOpen);
                  }}
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
                          <Link
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            to={"/content-migration"}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Content Migration
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            to={"/translation"}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Translation
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            to={"/transcription"}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Transcription
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            to={"/transliteration"}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Transliteration
                          </Link>
                        </li>
                        <li className="lg:mt-2 mt-1.5 ">
                          <Link
                            onClick={() => {
                              setIsEcommMenu(false);
                              setIsDesignMenu(false);
                              setIsDevMenu(false);
                              setIsBpmMenu(false);
                            }}
                            to={"/data-labeling-annotation"}
                            className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                          >
                            Data Labeling & Annotation
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="bg-[#1b8dff] p-2">
                      <span className="block text-white text-center">
                        Have a Query?
                      </span>
                    </div> */}
                  </div>
                )}
              </li>
              <li className={styles.navHeads}>
                <Link
                  to={"/about"}
                  onMouseOver={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(false);
                    setIsDevMenu(false);
                    setIsBpmMenu(false);
                  }}
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
                  onMouseOver={() => {
                    setIsEcommMenu(false);
                    setIsDesignMenu(false);
                    setIsDevMenu(false);
                    setIsBpmMenu(false);
                  }}
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
                className="absolute w-6 h-0.5 bg-white rounded"
                variants={{
                  closed: { rotate: 0, y: -6 },
                  open: { rotate: 45, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Middle Line */}
              <motion.span
                className="absolute w-6 h-0.5 bg-white rounded"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Bottom Line */}
              <motion.span
                className="absolute w-6 h-0.5 bg-white rounded"
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
          className={`xl:hidden transform transition-transform duration-300 ease-in-out fixed mt-3 right-0 w-full md:max-w-[400px] sm:max-w-[100vw] h-[94%] z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } p-4 bg-white flex flex-col justify-between`}
        >
          <ul style={{ overflowY: "scroll" }} className="space-y-4">
            <li className={`${styles.navHeadsMobile}`}>
              <div
                className="flex justify-between items-center  "
                onClick={() => {
                  setMIsEcommMenu(!isMEcommMenuOpen);
                  setMIsDesignMenu(false);
                  setMIsDevMenu(false);
                  setMIsBpmMenu(false);
                }}
              >
                Ecommerce
                {isMEcommMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </li>
            {isMEcommMenuOpen && (
              <li>
                <div className="bg-white p-4">
                  <ul>
                    <li className="mb-6 ">
                      <Link
                        to={"/ecommerce-consultation"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Ecommerce Consultation (Performance)
                      </Link>
                    </li>
                    <li className="mb-6 ">
                      <Link
                        to={"/ecommerce-enablement"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Ecommerce Enablement (Operations)
                      </Link>
                    </li>
                    <li className="mb-6 ">
                      <Link
                        to={"/ecommerce-website-development"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Ecommerce Website Development (TechDev)
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li className={styles.navHeadsMobile}>
              <div
                onClick={() => {
                  setMIsEcommMenu(false);
                  setMIsDesignMenu(!isMDesignMenuOpen);
                  setMIsDevMenu(false);
                  setMIsBpmMenu(false);
                }}
                className="flex justify-between items-center  "
              >
                Design
                {isMDesignMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </li>
            {isMDesignMenuOpen && (
              <li>
                <div className="bg-white p-4">
                  <ul>
                    <li className="mb-6 ">
                      <Link
                        to={"/youtube-content-marketing"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        YouTube Content Marketing
                      </Link>
                    </li>
                    <li className="mb-6 ">
                      <Link
                        to={"/linkedin-content-marketing"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        LinkedIn Content Marketing
                      </Link>
                    </li>
                    <li className="mb-6 ">
                      <Link
                        to={"/identity-branding-communication"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Identity, Branding & Communication
                      </Link>
                    </li>
                    <li className="mb-6 ">
                      <Link
                        to={"//custom-website-development"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Custom Website Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li className={styles.navHeadsMobile}>
              <div
                onClick={() => {
                  setMIsEcommMenu(false);
                  setMIsDesignMenu(false);
                  setMIsDevMenu(!isMDevMenuOpen);
                  setMIsBpmMenu(false);
                }}
                className="flex justify-between items-center  "
              >
                Development
                {isMDevMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </li>
            {isMDevMenuOpen && (
              <li>
                <div className="bg-white p-4">
                  <ul className="flex flex-col">
                    <li className="mb-4">
                      <Link
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        to={"/cms"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        CMS
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        to={"/crm"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        CRM
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        to={"/custom-development"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        Custom Development
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                        to={"/staff-off-services"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        Staff Off Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li className={styles.navHeadsMobile}>
              <div
                onClick={() => {
                  setMIsEcommMenu(false);
                  setMIsDesignMenu(false);
                  setMIsDevMenu(false);
                  setMIsBpmMenu(!isMBpmMenuOpen);
                }}
                className=" flex justify-between items-center "
              >
                BPM
                {isMBpmMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </li>
            {isMBpmMenuOpen && (
              <li>
                <div className="bg-white p-4">
                  <ul>
                    <li className="mb-6 ">
                      <Link
                        to={"/content-migration"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Content Migration
                      </Link>
                    </li>
                    <li className="mb-6 ">
                      <Link
                        to={"/translation"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Translation
                      </Link>
                    </li>
                    <li className="mb-6 ">
                      <Link
                        to={"/transcription"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Transcription
                      </Link>
                    </li>
                    <li className="mb-6 ">
                      <Link
                        to={"/transliteration"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Transliteration
                      </Link>
                    </li>
                    <li className="mb-6 ">
                      <Link
                        to={"/data-labeling-annotation"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`${styles.MenuItemText}  rounded py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5`}
                      >
                        Data Labeling & Annotation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li className={styles.navHeadsMobile}>
              <NavLink
                to={"/about"}
                onClick={() => {
                  setMIsEcommMenu(false);
                  setMIsDesignMenu(false);
                  setMIsDevMenu(false);
                  setMIsBpmMenu(false);
                  setIsMenuOpen(!isMenuOpen);
                }}
                className=" "
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
                    to={"/contact"}
                    onClick={() => {
                      setMIsEcommMenu(false);
                      setMIsDesignMenu(false);
                      setMIsDevMenu(false);
                      setMIsBpmMenu(false);
                      setIsMenuOpen(!isMenuOpen);
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
