import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollCircle = () => {
  const [scroll, setScroll] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScroll(scrollPercent);

    setShowButton(scrollTop > 400); // Show after 400px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 24;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scroll / 100) * circumference;

  if (!showButton) return null; // 👈 hide if scroll is less than 400px

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "56px",
        height: "56px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <svg height="56" width="56">
        <circle
          stroke="#e0e0e0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="28"
          cy="28"
        />
        <circle
          stroke="#007fff"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="28"
          cy="28"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 28 28)"
          style={{ transition: "stroke-dashoffset 0.35s" }}
        />
      </svg>
      <FaArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#007fff]" />
    </div>
  );
};

export default ScrollCircle;
