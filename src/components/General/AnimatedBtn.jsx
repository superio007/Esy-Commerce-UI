import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaCopy, FaShareAlt } from "react-icons/fa";

export default function CircularDownloadButton() {
  const [expanded, setExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 331);
  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 331);

    checkScreenSize(); // Set initial state
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      {/* For desktop */}
      <motion.div
        initial={{ width: "60px", height: "auto", borderRadius: "50%" }}
        whileHover={{ width: "225px", height: "auto", borderRadius: "50px" }} // Expands horizontally but keeps a rounded shape
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden md:flex items-center border border-[#007fff] bg-[#fff]] text-[#007fff] cursor-pointer px-2 py-2 overflow-hidden shadow-lg"
      >
        {/* Download Icon */}
        <span className="flex items-center justify-center rounded-full text-[#007fff]">
          <FaShareAlt className="text-[30px] ml-1" />
        </span>

        {/* Hidden buttons, revealed on hover */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex gap-2 ml-2"
        >
          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-white text-[#007fff] hover:bg-[#007fff] hover:text-white transition duration-200"
          >
            <FaLinkedin className="text-[30px]" />
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-white text-green-500 hover:bg-green-500 hover:text-white transition duration-200"
          >
            <FaWhatsapp className="text-[30px]" />
          </motion.a>

          {/* Copy Button */}
          <motion.button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full hover:cursor-pointer bg-white text-[#007fff] hover:bg-[#007fff] hover:text-white transition duration-200"
          >
            <FaCopy className="text-[30px]" />
          </motion.button>
        </motion.div>
      </motion.div>
      {/* for mobile */}
      <motion.div
        initial={{ width: "60px", borderRadius: "50%" }}
        animate={expanded ? { width: "225px", borderRadius: "50px" } : {}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={() => setExpanded(!expanded)} // Click to expand/collapse
        className={`md:hidden ${
          isSmallScreen
            ? "flex flex-col items-center gap-2 justify-center"
            : "flex items-center"
        } border border-[#007fff] bg-[#fff] text-[#007fff] cursor-pointer px-2 py-2 overflow-hidden shadow-lg`}
      >
        {/* Main Share Icon */}
        <span className="flex items-center justify-center rounded-full text-[#007fff]">
          <FaShareAlt className="text-[30px] ml-1" />
        </span>

        {/* Hidden buttons, revealed on click */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2 ml-2"
          >
            {/* LinkedIn Button */}
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-white text-[#007fff] hover:bg-[#007fff] hover:text-white transition duration-200"
            >
              <FaLinkedin className="text-[30px]" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-white text-green-500 hover:bg-green-500 hover:text-white transition duration-200"
            >
              <FaWhatsapp className="text-[30px]" />
            </motion.a>

            {/* Copy Button */}
            <motion.button
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full hover:cursor-pointer bg-white text-[#007fff] hover:bg-[#007fff] hover:text-white transition duration-200"
            >
              <FaCopy className="text-[30px]" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
      {/* for samsung fold */}
    </>
  );
}
