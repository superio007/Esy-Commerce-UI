import React from "react";
const Locations = () => {
  return (
    <>
      <div className="xl:p-10 gap-2 3xl:mx-auto 3xl:max-w-screen-xl">
        <h2 className="text-2xl font-medium p-8 text-center">Our Offices</h2>
        <div className="flex md:flex-row flex-col justify-evenly">
          <div className="w-max">
            <div className="bg-white rounded-md px-12 py-6">
              <p className="flex flex-wrap gap-2 text-1xl leading-normal font-medium mb-2">
                <img
                  className="w-[25px]"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1fa-1f1f8.svg"
                  alt=""
                />
                EsyCommerce Digital Services LLC
              </p>
              <p className="font-normal text-[16px] ">
                447 Broadway, 2nd Floor, Suite 896,
                <br /> New York, New York 10013, USA <br /> Phone: +1 (279)
                732-6842
              </p>
            </div>
          </div>
          <div className="w-max">
            <div className="bg-white rounded-md px-12 py-6">
              <p className="flex flex-wrap gap-2 text-1xl leading-normal font-medium mb-2">
                <img
                  className="w-[25px]"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1ee-1f1f3.svg"
                  alt=""
                />
                Offshore Global Capability Center (GCC)
              </p>
              <p className="font-normal text-[16px] ">
                811, Opal Business Park, Wagle Estate <br /> Thane, Mumbai 400
                606, India <br /> Phone: +91 865-223-3399
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Locations;
