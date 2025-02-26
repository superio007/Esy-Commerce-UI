import { useState,useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Circle from "../assets/circle.lottie";
const contentArray = [
  {
    title: "Customer-first always",
    description:
      "That’s why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
  },
  {
    title: "No spam or gimmicks",
    description:
      'No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use at your pace, the way you like.',
  },
  {
    title: "The Zerodha universe",
    description:
      "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
  },
  {
    title: "Do better with money",
    description: (
      <>
        With initiatives like <span className="text-blue-500">Nudge</span> and{" "}
        <span className="text-blue-500">Kill Switch</span>, we don’t just
        facilitate transactions but actively help you do better with your money.
      </>
    ),
  },
];
const CMS = () => {
    const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          const section = document.getElementById("CMSSection");
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
              setIsVisible(true);
            }
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <>
      <section
        id="CMSSection"
        className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl py-16 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          {/* Left Content */}
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-semibold">Services We Offer</h2>

            <div className="">
              {contentArray.map((item, index) => (
                <div className="pb-4" key={index}>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content (Lottie Animation) */}
          <div
            className={`flex justify-center md:justify-end transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <DotLottieReact
              style={{ width: "500px", height: "500px" }}
              src={Circle}
              loop
              autoplay
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default CMS;
