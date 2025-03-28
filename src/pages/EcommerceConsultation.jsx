import styles from "../css/EcommerceConsultation.module.css";
const EcommerceConsultation = () => {
  return (
    <>
      <div className="bg-[#007fff]">
        <section
          className={`${styles.EcommerceConsultation} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <h1 className="text-[45px] font-bold text-center text-white capitalize">
            Ecommerce Consultation
          </h1>
        </section>
      </div>
    </>
  );
};
export default EcommerceConsultation;
