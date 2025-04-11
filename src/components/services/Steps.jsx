const Steps = ({ apiRes }) => {
  let count = 1;
  return (
    <>
      <div className="xl:px-10 md:py-16 py-8 px-8 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900">
            {apiRes.Heading || "How It Work"}
          </h2>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="w-full mb-4 md:mb-0 md:w-1/2">
            {apiRes.steps.map((step, index) => (
              <div
                key={index}
                className="flex relative pb-8 sm:items-center md:w-2/3 mx-auto"
              >
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                  {count++}
                </div>
                <div className="flex-grow md:pl-8 pl-2 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-2 mt-3 sm:mt-0">
                    <h3 className="font-medium title-font text-gray-900 mb-1 text-xl">
                      {step.Heading}
                    </h3>
                    <p className="leading-relaxed">{step.subHeading}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-full object-cover object-center rounded"
              alt={apiRes.sideimage.alternativeText || "hero"}
              src={apiRes.sideimage.url || "https://dummyimage.com/720x600"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Steps;
