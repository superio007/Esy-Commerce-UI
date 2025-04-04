export default function ClientWorkSection({ points, heading }) {
  function highlightLastWord(text) {
    const words = text.trim().split(" ");
    const lastWord = words.pop();
    return `${words.join(
      " "
    )} <br />\n<span className="text-[#007fff]">${lastWord}</span>`;
  }
  return (
    <section className="bg-white py-16">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed">
          {points.map((point, index) => (
            <p key={index} className={`${index === 0 ? "mt-0" : "mt-4"}`}>
              {point.Point}
            </p>
          ))}
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 text-gray-600 text-lg leading-relaxed text-center md:text-right">
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
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
    </section>
  );
}
