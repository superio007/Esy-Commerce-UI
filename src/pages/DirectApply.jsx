import ApplyNowForm from "../components/CareerPage/ApplyNowForm";
let title = "Work With Us";
import styles from "../components/CareerPage/css/SinglePosting.module.css";
const DirectApply = () => {
  return (
    <>
      <div className={`${styles.singleHeading} bg-[#007fff] text-white h-auto py-[60px] px-[30px] md:h-80 flex flex-col gap-4  justify-center items-center `}>
        <h1 className="text-center text-[32px] text-wrap sm:text-4xl md:text-6xl">
          {title}
        </h1>
      </div>
      <div className="xl:px-40 py-[60px] 3xl:mx-auto 3xl:max-w-screen-xl">
        <ApplyNowForm />
      </div>
    </>
  );
};

export default DirectApply;
