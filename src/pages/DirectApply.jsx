import ApplyNowForm from "../components/CareerPage/ApplyNowForm";
let title = "Work With Us";
import { useEffect } from "react";
import styles from "../components/CareerPage/css/SinglePosting.module.scss";
const DirectApply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  return (
    <>
      <div
        className={`${styles.singleHeading} bg-[#007fff] text-white h-auto md:h-80 flex flex-col gap-4  justify-center items-center `}
      >
        <div className="px-6 md:px-0">
          <h1 className={`${styles.CareerPageHeading}`}>{title}</h1>
        </div>
      </div>
      <div
        className={`xl:px-40 ${styles.singleHeading} 3xl:mx-auto 3xl:max-w-screen-xl`}
      >
        <ApplyNowForm />
      </div>
    </>
  );
};

export default DirectApply;
