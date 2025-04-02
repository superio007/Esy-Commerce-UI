import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const FAQ = ({ apiRes }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [faqsList, setFaqsList] = useState([]);
  useEffect(() => {
    setOpenIndex(0);
    setFaqsList(
      apiRes.faq_qnas.map((faq) => ({ q: faq.Question, a: faq.Answer }))
    );
    if (apiRes.faq_qnas.length > 0) {
      setSelectedAnswer(apiRes.faq_qnas[0].Answer);
    }
  }, [apiRes]);
  const toggleFAQ = (index) => {
    setOpenIndex(index);
    setSelectedAnswer(faqsList[index].a);
  };

  return (
    <section className="py-16 px-4 xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl text-gray-800 font-semibold">
          {apiRes.Heading || "Frequently Asked Questions"}
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          {apiRes.subHeading ||
            `Answered all frequently asked questions. Still confused? Feel free to
          contact us.`}
        </p>
      </div>
      <div className="hidden md:flex mt-14 flex-col md:flex-row gap-6">
        {/* FAQ List */}
        <div className="w-full md:w-1/2 space-y-4">
          {faqsList.map((faq, index) => (
            <div
              key={index}
              className={`bg-white relative p-4 md:p-6 rounded-md cursor-pointer border border-gray-200 ${
                openIndex === index ? "bg-gray-100" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">{faq.q}</h3>
                {openIndex === index ? (
                  <IoIosArrowForward className="text-xl text-[#00234b]" />
                ) : (
                  <IoIosArrowDown className="text-xl text-[#00234b]" />
                )}
              </div>
              <div
                className={`absolute ${
                  openIndex === index ? `block` : `hidden`
                }`}
                style={{
                  borderTop: "1px solid #e5e7eb",
                  right: -27,
                  width: 30,
                  top: -1,
                  padding: "37.6px 0px 38px 0",
                  backgroundColor: "white",
                  height: "100%",
                  zIndex: 99999,
                  borderBottom: "1px solid #e5e7eb",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Dynamic Answer Block */}
        <div className="w-full md:w-1/2 bg-white rounded-md p-6 border border-gray-200">
          <p className="text-gray-600 text-lg">{selectedAnswer}</p>
        </div>
      </div>
      <div className="md:hidden mt-14 space-y-4">
        {faqsList.map((faq, index) => (
          <div key={index} className="flex md:flex-row flex-col">
            <div
              className="bg-white w-full flex rounded-md justify-between p-4 md:p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.q}</h3>
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </div>
            {openIndex === index && (
              <div
                className="bg-white w-full rounded-md p-4 md:p-6"
                onClick={() => toggleFAQ(index)}
              >
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
