import styles from "../../css/Translation.module.css";
const Translation = () => {
    return (
      <>
        <div className="bg-[#007fff]">
          <section
            className={`${styles.Translation} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
          >
            <h1 className="text-[45px] font-bold text-center text-white capitalize">
              Translation
            </h1>
          </section>
        </div>
      </>
    );
}
export default Translation