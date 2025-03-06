import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaCopy, FaShareAlt } from "react-icons/fa";

export default function CircularDownloadButton() {
  return (
    <motion.div
      initial={{ width: "60px", height: "auto", borderRadius: "50%" }}
      whileHover={{ width: "225px", height: "auto", borderRadius: "50px" }} // Expands horizontally but keeps a rounded shape
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex items-center border border-[#007fff] bg-[#fff]] text-[#007fff] cursor-pointer px-2 py-2 overflow-hidden shadow-lg"
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
          className="p-2 rounded-full bg-white text-[#007fff] hover:bg-[#007fff] hover:text-white transition duration-200"
        >
          <FaCopy className="text-[30px]" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
