import styles from "./css/CoreValues.module.scss";
export default function CoreValues({ coreValues }) {
  const values = [
    {
      title: "Collaboration",
      description:
        "Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.",
      icon: "⚡",
    },
    {
      title: "Transparency",
      description:
        "Transparency, as used in science, is operating in such a way that it is easy for others to see what actions are performed.",
      icon: "⏳",
    },
    {
      title: "Trust",
      description:
        "Trust will help us foster a positive and productive environment that delivers value to our users and customers.",
      icon: "📈",
    },
    {
      title: "Integrity",
      description:
        "Integrity is the practice of being honest and showing a consistent and uncompromising adherence to strong moral and ethical principles.",
      icon: "🎯",
    },
    {
      title: "Innovation",
      description:
        "Innovation drives us to create new solutions, improve existing processes, and continuously push the boundaries of what’s possible.",
      icon: "🚀",
    },
    {
      title: "Customer Focus",
      description:
        "We prioritize our customers’ needs, ensuring we deliver exceptional value and an outstanding experience in every interaction.",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-white">
      <section className={styles.CoreValuesSection}>
        <section className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl text-center">
          <section className="px-6 md:px-0 ">
            <h2 className={styles.coreH2}>Our Core Values</h2>
            <p className={styles.coresub}>
              Our values shape the culture of our organization and define the
              character of our company.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className={styles.coreH3}>{value.title}</h3>
                  <p className={styles.coreP}>{value.description}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
