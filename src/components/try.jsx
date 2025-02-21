import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      type="button"
      className="relative w-10 h-10 flex items-center justify-center p-2 rounded-md focus:outline-none"
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
  );
};

export default AnimatedMenuButton;
