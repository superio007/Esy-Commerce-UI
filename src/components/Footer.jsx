import WebsitLogo from "../assets/Logo.png";
import "../css/Footer.css";
import FooterBrands from "../assets/footerBrands.png";
const Footer = () => {
  return (
    <>
      <div id="Footer" className="bg-white  w-full">
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
            <p className="mb-3 leading-normal text-[18px] font-bold">Our Services</p>
            <ul style={{ width: "max-content" }}>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                Ecommerce
              </li>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                Design
              </li>

              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                Development
              </li>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                BPM
              </li>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                About Us
              </li>
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="mb-3 leading-normal text-[18px] font-bold">Legal Compliance</p>
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
              <li className="nav-heads mb-3 leading-normal flex gap-6 items-center justify-between">
                FAQ
              </li>
            </ul>
          </div>
          <div className="xl:col-span-2 md:col-span-1">
            <p className="mb-1 leading-normal text-[18px] font-bold">Contact Us</p>
            <div className="pb-1">
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
            <div className="">
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