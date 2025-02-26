import WebsitLogo from "../assets/Logo.png";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 h-[300px]">
        <div className="p-4 xl:px-12 3xl:mx-auto 3xl:max-w-screen-xl grid xl:grid-cols-5 xl:grid-rows-1 gap-6">
          <div>
            <img src={WebsitLogo} alt="Website Logo" />
          </div>
          <div>Section 2</div>
          <div>Section 3</div>
          <div className="col-span-2">Section 4</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
