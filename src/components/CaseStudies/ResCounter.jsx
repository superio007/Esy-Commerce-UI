import SlotCounter from "react-slot-counter";
import styles from "./css/ResCounter.module.css";
const ResCounter = () => {
  return (
    <>
      <div className={`${styles.ResCounter} bg-white`}>
        <div className="p-6 py-12 md:py-24 xl:px-16 3xl:mx-auto 3xl:max-w-screen-xl">
          <div className="flex flex-col gap-8 items-center">
            <h2 className="md:text-6xl text-center font-bold">
              Results & Feedback
            </h2>
            <div className="flex md:flex-row flex-col gap-18 items-center">
              <div className="flex flex-col gap-4 items-center">
                <h3 className="text-4xl font-bold text-[#007ff]">
                  <SlotCounter
                    startValue={0}
                    value={1222}
                    animateOnChange={true}
                    animateOnVisible={true}
                    className="counter"
                    duration={0.5}
                  />{" "}
                  +
                </h3>
                <h4>Heading</h4>
                <p>Description</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <h3 className="text-4xl font-bold text-[#007ff]">
                  <SlotCounter
                    startValue={0}
                    value={1222}
                    animateOnChange={true}
                    animateOnVisible={true}
                    className="counter"
                    duration={0.5}
                  />{" "}
                  +
                </h3>
                <h4>Heading</h4>
                <p>Description</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <h3 className="text-4xl font-bold text-[#007ff]">
                  <SlotCounter
                    startValue={0}
                    value={1222}
                    animateOnChange={true}
                    animateOnVisible={true}
                    className="counter"
                    duration={0.5}
                  />{" "}
                  +
                </h3>
                <h4>Heading</h4>
                <p>Description</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <h3 className="text-4xl font-bold text-[#007ff]">
                  <SlotCounter
                    startValue={0}
                    value={1222}
                    animateOnChange={true}
                    animateOnVisible={true}
                    className="counter"
                    duration={0.5}
                  />{" "}
                  +
                </h3>
                <h4>Heading</h4>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResCounter;
