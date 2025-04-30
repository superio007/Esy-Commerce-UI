import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styles from "./css/EnqueryFrom.module.scss";
import axios from "axios";
import { sendMail } from "../../utils/SendFile";
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
  const [showDropdown, setShowDropdown] = useState(false);
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
    setValue,
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
    postEnqueryForm(formattedData);
    // Add FormTemplate
    formattedData.data.FormTemplate = "enquery";
    sendMail(formattedData);
    console.log(formattedData);
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

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            type="text"
            onClick={() => setShowDropdown(false)}
            placeholder="Full Name*"
            {...register("fullName", { required: true })}
            className="w-full rounded-md p-2 mb-3 outline-none text-black"
          />
          {errors.fullName && (
            <span className="text-red-500">Full Name is required</span>
          )}
          <input
            type="email"
            onClick={() => setShowDropdown(false)}
            placeholder="Work Email*"
            {...register("email", { required: true })}
            className="w-full rounded-md p-2 mb-3 outline-none text-black"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Service Interest*"
              autoComplete="off"
              {...register("service", { required: true })}
              onClick={() => setShowDropdown(!showDropdown)}
              value={selectedService}
              className={`w-full rounded-md p-2 ${
                showDropdown ? "mb-1" : ""
              } outline-none text-black`}
            />
            {showDropdown && (
              <>
                <div className="absolute border-1 border-[#6b7280] flex flex-col gap-1 rounded-md top-full p-2 left-0 w-full bg-white">
                  <span
                    className="text-[#6e7582] text-md hover:cursor-pointer"
                    onClick={() => {
                      setSelectedService("Ecommerce");
                      setShowDropdown(false);
                      setValue("service", "Ecommerce");
                    }}
                  >
                    Ecommerce
                  </span>
                  <span
                    className="text-[#6e7582] text-md hover:cursor-pointer"
                    onClick={() => {
                      setSelectedService("Design");
                      setShowDropdown(false);
                      setValue("service", "Design");
                    }}
                  >
                    Design
                  </span>
                  <span
                    className="text-[#6e7582] text-md hover:cursor-pointer"
                    onClick={() => {
                      setSelectedService("Development");
                      setShowDropdown(false);
                      setValue("service", "Development");
                    }}
                  >
                    Development
                  </span>
                  <span
                    className="text-[#6e7582] text-md hover:cursor-pointer"
                    onClick={() => {
                      setSelectedService("BPM");
                      setShowDropdown(false);
                      setValue("service", "BPM");
                    }}
                  >
                    BPM
                  </span>
                  <span
                    className="text-[#6e7582] text-md hover:cursor-pointer"
                    onClick={() => {
                      setSelectedService("Other");
                      setShowDropdown(false);
                      setValue("service", "Other");
                    }}
                  >
                    Other
                  </span>
                </div>
              </>
            )}
          </div>
          {errors.service && (
            <span className="text-red-500">Service Interest is required</span>
          )}
          <textarea
            placeholder="Tell us about your project goals..."
            rows={4}
            onClick={() => setShowDropdown(false)}
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
