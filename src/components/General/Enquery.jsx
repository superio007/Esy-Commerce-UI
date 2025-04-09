import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import axios from "axios";
const postEnqueryForm = async (formattedData) => {
  const { data } = await axios.post(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/enquery-form-entries",
    formattedData, // Sending formattedData in the request body
    {
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    }
  );
  return data;
};
const ProposalForm = () => {
  const [pageLoc, setPageLoc] = useState("");
  let Location = useLocation().pathname;
  useEffect(() => {
    if (Location === "/") {
      setPageLoc("Home Page");
    } else {
      setPageLoc(Location.split("/").join(""));
    }
  }, [Location]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isThanks, setIsThanks] = useState(false);
  const onSubmit = (data) => {
    const formattedData = {
      data: {
        FullName: data.fullName,
        Email: data.email,
        Message: data.message,
        PageInfo: pageLoc,
      },
    };
    postEnqueryForm(formattedData);
    // console.log(data);
    reset(); // Reset the form fields after submission
    setIsThanks(true);
  };

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center py-10 px-5 max-w-md mx-auto rounded-lg shadow-lg">
        <h2 className="text-xl font-bold uppercase text-center">
          <span className="text-[#007fff]">Shape Your</span> Future Growth
        </h2>
        <p className="text-center mb-5 text-sm">
          How our expertise can meet your needs
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            type="text"
            placeholder="Full Name*"
            {...register("fullName", { required: true })}
            className="w-full rounded-md p-2 mb-3 outline-none text-black"
          />
          {errors.fullName && (
            <span className="text-red-500">Full Name is required</span>
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
        <div className="text-white text-center py-4">
          <span>
            Thanks for your message! Our team will get back to you shortly.
          </span>
        </div>
      )}
    </>
  );
};

export default ProposalForm;
