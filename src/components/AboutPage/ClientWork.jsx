import styles from "./css/ClientWorkSection.module.scss";
export default function ClientWorkSection({ points, heading }) {
  function highlightLastWord(text) {
    const words = text.trim().split(" ");
    const lastWord = words.pop();
    return `${words.join(
      " "
    )} <br />\n<span className="text-[#007fff]">${lastWord}</span>`;
  }
  return (
    <section className="bg-white">
      <div className={styles.ClientWorkSection}>
        <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
          <div className="px-6 md:px-0 flex flex-col md:flex-row items-start md:items-center justify-between ">
            <div className="md:w-1/2">
              {points.map((point, index) => (
                <p key={index} className={`${styles.pointP} ${index === 0 ? "mt-0" : "mt-4"}`}>
                  {point.Point}
                </p>
              ))}
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 text-gray-600 text-lg leading-relaxed text-left md:text-right">
              <h2
                className={`${styles.ClientWorkH2}`}
                dangerouslySetInnerHTML={{
                  __html: `${highlightLastWord(
                    heading.Heading ||
                      `How we work with our <br />
            <span className="text-[#007fff]">Clients.</span>`
                  )}`,
                }}
              />
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg  space-x-2 hover:bg-blue-700 transition">
                <span>Contact us</span>
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
