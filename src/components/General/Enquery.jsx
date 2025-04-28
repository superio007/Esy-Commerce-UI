import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styles from "./css/EnqueryFrom.module.scss";
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
  const [selectedService, setSelectedService] = useState("");
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
        ServiceInfo: data.service,
      },
    };
    console.log(formattedData);
    // postEnqueryForm(formattedData);
    // console.log(data);
    reset(); // Reset the form fields after submission

    setSelectedService("");
    setIsThanks(true);
  };

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center py-10 px-5 max-w-md mx-auto rounded-lg shadow-lg">
        <h2 className={`${styles.FormHeading} mb-5  uppercase text-center`}>
          Let’s Build Your Success Story -{" "}
          <span className="text-[#007fff]">Together</span>
        </h2>
        {/* <p className={`text-center mb-5 ${styles.FormSubHeading}`}>
          How our expertise can meet your needs
        </p> */}

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
            placeholder="Work Email*"
            {...register("email", { required: true })}
            className="w-full rounded-md p-2 mb-3 outline-none text-black"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}

          <select
            className={`w-full rounded-md p-2 mb-3 outline-none ${
              selectedService ? "text-black" : "text-[#6e7582]"
            }`}
            {...register("service", { required: true })}
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="" disabled hidden>
              Service Interest*
            </option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Design">Design</option>
            <option value="BPM">BPM</option>
            <option value="Development">Development</option>
            <option value="Other">Other</option>
          </select>
          {errors.service && (
            <span className="text-red-500">Service selection is required</span>
          )}
          <textarea
            placeholder="Tell us about your project goals..."
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
