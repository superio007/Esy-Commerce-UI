import { useState , useEffect } from "react";
const faqsList = [
  {
    q: "What are some random questions to ask?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "Do you include common questions?",
    a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
  },
  {
    q: "Can I use this for 21 questions?",
    a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
  },
  {
    q: "Are these questions for girls or for boys?",
    a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
  },
  {
    q: "What do you wish you had more talent doing?",
    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    toggleFAQ(0);
  },[])
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl py-16 px-4">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl text-gray-800 font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-lg">
            Answered all frequently asked questions. Still confused? Feel free
            to contact us.
          </p>
        </div>
        <div className="mt-14 space-y-4">
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
                <div className="bg-white w-full rounded-md p-4 md:p-6" onClick={() => toggleFAQ(index)}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
