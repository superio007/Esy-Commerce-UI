import RotateEffect from "./RotateEffect";
import { ParallaxProvider } from "react-scroll-parallax";
import "../css/CMS.css";
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

  return (
    <>
      <div className="bg-white">
        <section
          id="CMSSection"
          className=" xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl py-16 "
        >
          <div className="md:text-left text-center grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            {/* Left Content */}
            <div className={`space-y-6 `}>
              <h2 className="Land-CMS-Heading sm:text-4xl capitalize text-3xl font-semibold">
                Services We Offer
              </h2>

              <div className="">
                {contentArray.map((item, index) => (
                  <div className="pb-4" key={index}>
                    <h3 className="Land-CMS-Subheading text-[21px] font-semibold">
                      {item.title}
                    </h3>
                    <p className="Land-CMS-Para text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content (Lottie Animation) */}
            <div className="flex justify-center">
              <ParallaxProvider>
                <RotateEffect />
              </ParallaxProvider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default CMS;
