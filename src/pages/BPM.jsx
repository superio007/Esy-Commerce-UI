import styles from "../css/BPM.module.css";
const BPM = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          className={`${styles.BPM} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <h1 className="text-[45px] font-bold text-center text-white capitalize">
            BPM
          </h1>
        </section>
      </div>
    </>
  );
};
export default BPM;
