import styles from "../components/PartnerPage/css/PartnerForm.module.css";
import PartnerForm from "../components/PartnerPage/PartnerForm";
import React,{useEffect} from "react";
const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  return (
    <>
      <div className="bg-[#007fff]">
        <div className="xl:px-12 p-6 3xl:mx-auto 3xl:max-w-screen-xl py-[80px] px-4">
          <h1
            className={`${styles.PartnerHeading} text-2xl md:text-5xl font-bold text-center mb-6`}
          >
            Become A Partner
          </h1>
        </div>
      </div>
      <div>
        <PartnerForm />
      </div>
    </>
  );
};
export default Partner;
