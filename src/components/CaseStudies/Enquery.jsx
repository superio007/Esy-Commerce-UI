import { useState } from "react";
import { set, useForm } from "react-hook-form";
import "./css/EnqueryForm.css";

const ProposalForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isThanks, setIsThanks] = useState(false);

  const onSubmit = (data) => {
    reset();
      console.log(data);
      setIsThanks(true);
  };

  return (
    <>
      <div id="EnqueryForm" className="grid grid-cols-12 gap-8">
        <div className="col-span-7"></div>
        <div className="col-span-5">
          <div className="bg-white flex flex-col items-center justify-center py-10 px-5 max-w-md rounded-lg shadow-lg">
            <h2 className="text-xl font-bold uppercase text-center">
              <span className="text-[#007fff]">Shape Your</span> Future Growth
            </h2>
            <p className="text-center mb-5 text-sm">
              How our expertise can meet your needs
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <input
                type="text"
                placeholder="First Name*"
                {...register("firstName", { required: true })}
                className="w-full rounded-md p-2 mb-3 outline-none text-black"
              />
              {errors.firstName && (
                <span className="text-red-500">First Name is required</span>
              )}

              <input
                type="email"
                placeholder="Email*"
                {...register("email", { required: true })}
                className="w-full rounded-md p-2 mb-3 outline-none text-black"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}

              <textarea
                placeholder="Type message here..."
                rows={4}
                {...register("message")}
                className="w-full rounded-md p-2 mb-3 outline-none text-black resize-none"
              ></textarea>

              <div className="flex flex-col xl:flex-row">
                <button
                  type="submit"
                  className="bg-[#007fff] text-white py-2 px-5 rounded-md uppercase font-bold hover:bg-[#006ae0] transition duration-300"
                >
                  Get Your Free Proposal
                </button>
              </div>
            </form>
          </div>
          {isThanks && (
            <div className="text-green-700 text-center py-4">
              <p>
                Thanks for your message! Our team will get back to you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProposalForm;