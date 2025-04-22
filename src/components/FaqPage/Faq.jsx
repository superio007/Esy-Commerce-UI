import styles from "./css/Faq.module.scss";

const Faq = ({ faqs }) => {
  return (
    <>
      <div className="bg-white">
        <div
          className={`xl:px-10 ${styles.FaqSection} 3xl:mx-auto 3xl:max-w-screen-xl`}
        >
          <div className="px-6 md:px-0">
            {faqs.map((faq, index) => (
              <div key={index} className={styles.FaqContainer}>
                <h2 className={styles.FaqH2}>
                  {faq.question ||
                    "Isn’t nearshore outsourcing better due to time zone alignment?"}
                </h2>
                <p className={styles.FaqP}>
                  {faq.answer ||
                    `Indian outsourcing teams are experienced in working with U.S.,
                  UK, and EU clients. Most offer flexible overlapping hours,
                  ensuring smooth communication and real-time progress updates
                  despite the time difference.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;
