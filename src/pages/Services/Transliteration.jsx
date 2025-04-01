import styles from "../../css/Transliteration.module.css";
const Transliteration = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          className={`${styles.Transliteration} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <h1 className="text-[45px] font-bold text-center text-white capitalize">
            Transliteration
          </h1>
        </section>
      </div>
    </>
  );
};
export default Transliteration;
