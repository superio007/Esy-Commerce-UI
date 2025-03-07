import { useForm } from "react-hook-form";
import { useState } from "react";
import "./css/ApplyNowForm.css";
import { CiLinkedin } from "react-icons/ci";
import { BsLightningChargeFill } from "react-icons/bs";

const ApplyNowForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
  const FullnameValue = watch("name", "");
  const PhoneValue = watch("Phone", "");
  const EmailValue = watch("Email", "");
  const ExpectedCtcValue = watch("ExpectedCtc", "");
  const CurrentCtcValue = watch("CurrentCtc", "");
  const CurrentCityValue = watch("CurrentCity", "");
  const ExperienceValue = watch("Experience", "");
  const MessageValue = watch("Message", "");

  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState(""); // Store uploaded file URL
  const [loading, setLoading] = useState(false);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setValue("resume", file); // ✅ Manually set file in react-hook-form
      trigger("resume"); // ✅ Trigger validation
    }
  };

  const onSubmit = async (data) => {
    if (!data.resume) {
      alert("Please upload a resume");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", data.resume);
    formData.append("upload_preset", UPLOAD_PRESET); // Required by Cloudinary

    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setFileUrl(result.secure_url); // ✅ Store the file URL
      //   console.log("Uploaded File URL:", result.secure_url);
      data.resume = result.secure_url;
      console.log(data);
      //   alert("Resume uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload resume");
    }

    setLoading(false);
    reset();
    setFileName("");
    setFileUrl("");
  };

  return (
    <>
      <div className="ApplyNowForm flex flex-col md:flex-row gap-4 justify-between items-center p-8 rounded-2xl bg-[#fff]">
        <div>
          <h2 className="text-2xl text-center font-bold flex items-center md:justify-start justify-center gap-2">
            <BsLightningChargeFill />
            AutoFill Application
          </h2>
          <p className="">Save time by applying through our AutoFill form</p>
        </div>
        <div>
          <span className="text-white bg-[#0a66c2] p-4 flex items-center gap-2 rounded-xl cursor-pointer">
            <CiLinkedin className="text-4xl text-[#fff]" /> Apply with Linkedin
          </span>
        </div>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="py-4">
            <div className="relative">
              <input
                type="text"
                id="FullName"
                {...register("name", { required: "Full Name is required" })}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                  errors.name
                    ? "border-red-600"
                    : FullnameValue.length <= 0
                    ? "border-gray-500"
                    : "border-green-600"
                } appearance-none focus:outline-none focus:ring-0 peer`}
                placeholder=""
              />
              <label
                htmlFor="FullName"
                className={`absolute text-sm ${
                  errors.name
                    ? "text-red-600"
                    : FullnameValue.length <= 0
                    ? "text-gray-500"
                    : "text-green-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
              >
                Enter Your Full Name
              </label>
            </div>
            {errors.name && (
              <span className="mt-2 pl-2 text-xs text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* Email */}
          <div className="py-4">
            <div className="relative">
              <input
                type="text"
                id="Email"
                {...register("Email", {
                  required: "Email is required",
                  validate: (value) =>
                    value.includes("@") || "Email should include @",
                })}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                  errors.Email
                    ? "border-red-600"
                    : EmailValue.length <= 0
                    ? "border-gray-500"
                    : "border-green-600"
                } appearance-none focus:outline-none focus:ring-0 peer`}
                placeholder=""
              />
              <label
                htmlFor="Email"
                className={`absolute text-sm ${
                  errors.Email
                    ? "text-red-600"
                    : EmailValue.length <= 0
                    ? "text-gray-500"
                    : "text-green-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
              >
                Enter Your Email
              </label>
            </div>
            {errors.Email && (
              <span className="mt-2 pl-2 text-xs text-red-600">
                {errors.Email.message}
              </span>
            )}
          </div>
          {/* Phone number */}
          <div className="py-4">
            <div className="relative">
              <input
                type="text"
                id="Phone"
                {...register("Phone", { required: "Phone is required" })}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                  errors.Phone
                    ? "border-red-600"
                    : PhoneValue.length <= 0
                    ? "border-gray-500"
                    : "border-green-600"
                } appearance-none focus:outline-none focus:ring-0 peer`}
                placeholder=""
              />
              <label
                htmlFor="Phone"
                className={`absolute text-sm ${
                  errors.Phone
                    ? "text-red-600"
                    : PhoneValue.length <= 0
                    ? "text-gray-500"
                    : "text-green-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
              >
                Enter Your Phone
              </label>
            </div>
            {errors.Phone && (
              <span className="mt-2 pl-2 text-xs text-red-600">
                {errors.Phone.message}
              </span>
            )}
          </div>
          {/* Position | Experience */}
          <div className="flex md:flex-row flex-col md:gap-4 justify-between">
            {/* Position */}
            <div className="py-4 w-full">
              <div className="relative">
                <select
                  id="Postion"
                  {...register("Postion", {
                    required: "This field is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${errors.Postion ? "border-red-600" : "border-gray-500"} 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                >
                  <option value="" hidden>
                    Chosse
                  </option>
                  <option value="Front_End_Developer">
                    Front End Developer
                  </option>
                  <option value="Back_End_Developer">Back End Developer</option>
                  <option value="Full_Stack_Developer">
                    Full Stack Developer
                  </option>
                  <option value="Data_Engeenier">Data Engeenier</option>
                  <option value="Other">Other</option>
                </select>
                <label
                  htmlFor="Postion"
                  className={`absolute text-sm ${
                    errors.Postion ? "text-red-600" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Select Your Position
                </label>
              </div>
              {errors.Postion && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Postion.message}
                </span>
              )}
            </div>
            {/* Experience */}
            <div className="py-4 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="Experience"
                  {...register("Experience", {
                    required: "Experience is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.Experience
                      ? "border-red-600"
                      : ExperienceValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="Experience"
                  className={`absolute text-sm ${
                    errors.Experience
                      ? "text-red-600"
                      : ExperienceValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Experience
                </label>
              </div>
              {errors.Experience && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Experience.message}
                </span>
              )}
            </div>
          </div>
          {/* Current CTC | Expected CTC | City */}
          <div className="flex md:flex-row flex-col md:gap-4 justify-between">
            {/* Current CTC */}
            <div className="py-4 w-full">
              <div className="relative ">
                <input
                  type="text"
                  id="CurrentCtc"
                  {...register("CurrentCtc", {
                    required: "Current Ctc is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.CurrentCtc
                      ? "border-red-600"
                      : CurrentCtcValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="CurrentCtc"
                  className={`absolute text-sm ${
                    errors.CurrentCtc
                      ? "text-red-600"
                      : CurrentCtcValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Current CTC
                </label>
              </div>
              {errors.CurrentCtc && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.CurrentCtc.message}
                </span>
              )}
            </div>
            {/* Expected CTC */}
            <div className="py-4 w-full">
              <div className="relative ">
                <input
                  type="text"
                  id="ExpectedCtc"
                  {...register("ExpectedCtc", {
                    required: "Expected ctc is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.ExpectedCtc
                      ? "border-red-600"
                      : ExpectedCtcValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="ExpectedCtc"
                  className={`absolute text-sm ${
                    errors.ExpectedCtc
                      ? "text-red-600"
                      : ExpectedCtcValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Expected CTC
                </label>
              </div>
              {errors.ExpectedCtc && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.ExpectedCtc.message}
                </span>
              )}
            </div>
            {/* Current City */}
            <div className="py-4 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="CurrentCity"
                  {...register("CurrentCity", {
                    required: "Current City is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.CurrentCity
                      ? "border-red-600"
                      : CurrentCityValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="CurrentCity"
                  className={`absolute text-sm ${
                    errors.CurrentCity
                      ? "text-red-600"
                      : CurrentCityValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Current City
                </label>
              </div>
              {errors.CurrentCity && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.CurrentCity.message}
                </span>
              )}
            </div>
          </div>
          {/* Upload Resume */}
          <div className="flex items-center justify-center w-full my-4">
            <label
              htmlFor="dropzone-file"
              className="flex bg-white flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {fileName ? (
                  <p className="mb-2 text-sm text-green-600 font-semibold">
                    {fileName}
                  </p>
                ) : (
                  <>
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOCX, PNG, JPG (MAX. 5MB)
                    </p>
                  </>
                )}
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept=".pdf,.doc,.docx,.png,.jpg"
                className="hidden"
                onChange={onFileChange} // ✅ Handles file selection
              />
            </label>
          </div>
          {errors.resume && (
            <p className="mt-2 text-sm text-red-600">{errors.resume.message}</p>
          )}
          {/* Find | Reason */}
          <div className="flex md:flex-row flex-col md:gap-4 justify-between">
            {/* Find */}
            <div className="py-4 w-full">
              <div className="relative">
                <select
                  id="Find"
                  {...register("Find", {
                    required: "This field is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${errors.Find ? "border-red-600" : "border-gray-500"} 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                >
                  <option value="" hidden>
                    Chosse
                  </option>
                  <option value="Naukri">Naukri</option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Glassdoor">Glassdoor</option>
                  <option value="Indeed">Indeed</option>
                  <option value="Other">Other</option>
                </select>
                <label
                  htmlFor="Find"
                  className={`absolute text-sm ${
                    errors.Find ? "text-red-600" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Select Where You Find This Job
                </label>
              </div>
              {errors.Find && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Find.message}
                </span>
              )}
            </div>
            {/* Reason */}
            <div className="py-4 w-full">
              <div className="relative">
                <select
                  id="Reason"
                  {...register("Reason", {
                    required: "This field is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${errors.Reason ? "border-red-600" : "border-gray-500"} 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                >
                  <option value="" hidden>
                    Chosse
                  </option>
                  <option value="Better_Growth_Opportunities">
                    Better Growth Opportunities
                  </option>
                  <option value="Higher_Pay_Expectations">
                    Higher Pay Expectations
                  </option>
                  <option value="Better_Growth_Opportunities">
                    Better Working Environment
                  </option>
                  <option value="Other">Other</option>
                </select>
                <label
                  htmlFor="Reason"
                  className={`absolute text-sm ${
                    errors.Reason ? "text-red-600" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Select Reason For Leaving
                </label>
              </div>
              {errors.Reason && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Reason.message}
                </span>
              )}
            </div>
          </div>
          {/* System | Internet */}
          <div className="flex md:flex-row flex-col md:gap-4 justify-between">
            {/* Sytsem */}
            <div className="py-4 w-full">
              <div className="relative">
                <select
                  id="Sytsem"
                  {...register("Sytsem", {
                    required: "This field is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${errors.Sytsem ? "border-red-600" : "border-gray-500"} 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                >
                  <option value="" hidden>
                    Chosse
                  </option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
                <label
                  htmlFor="Sytsem"
                  className={`absolute text-sm ${
                    errors.Sytsem ? "text-red-600" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Do You Own A Computer System For (WFH/Hybrid)
                </label>
              </div>
              {errors.Sytsem && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Sytsem.message}
                </span>
              )}
            </div>
            {/* Internet */}
            <div className="py-4 w-full">
              <div className="relative">
                <select
                  id="Internet"
                  {...register("Internet", {
                    required: "This field is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${errors.Internet ? "border-red-600" : "border-gray-500"} 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                >
                  <option value="" hidden>
                    Chosse
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <label
                  htmlFor="Internet"
                  className={`absolute text-sm ${
                    errors.Internet ? "text-red-600" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Do You Have Internet?
                </label>
              </div>
              {errors.Reason && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Reason.message}
                </span>
              )}
            </div>
          </div>
          {/* Join | Message */}
          <div className="flex md:flex-row flex-col md:gap-4 justify-between">
            {/* Join */}
            <div className="py-4 w-full">
              <div className="relative">
                <select
                  id="Join"
                  {...register("Join", {
                    required: "This field is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${errors.Join ? "border-red-600" : "border-gray-500"} 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                >
                  <option value="" hidden>
                    Chosse
                  </option>
                  <option value="Immediate">Immediate Joiner</option>
                  <option value="15-30">Need 15-30 days notice period</option>
                  <option value="30-60">Need 30-60 days notice period</option>
                  <option value="60+">Need 60+ days notice period</option>
                </select>
                <label
                  htmlFor="Join"
                  className={`absolute text-sm ${
                    errors.Join ? "text-red-600" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  How Soon Can You Join?
                </label>
              </div>
              {errors.Join && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Join.message}
                </span>
              )}
            </div>
            {/* Message */}
            <div className="py-4 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="Message"
                  {...register("Message", {
                    required: "Message is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.Message
                      ? "border-red-600"
                      : MessageValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="Message"
                  className={`absolute text-sm ${
                    errors.name
                      ? "text-red-600"
                      : MessageValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Message
                </label>
              </div>
              {errors.Message && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Message.message}
                </span>
              )}
            </div>
          </div>
          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-[#007fff]  text-white px-16 py-4 rounded-lg"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplyNowForm;
