import { set, useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import Select from "react-select";
import styles from "./css/PartnerForm.module.css";
import axios from "axios";
import emailjs from "@emailjs/browser";
const postPartnerForm = async (formattedData) => {
  const { data } = await axios.post(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/partner-form-entries",
    formattedData, // Sending formattedData in the request body
    {
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    }
  );
  return data;
};
const PartnerForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    shouldUnregister: true,
  });
  const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState(""); // Store uploaded file URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const FirstNameValue = watch("FirstName", "");
  const LastNameValue = watch("LastName", "");
  const PhoneValue = watch("Phone", "");
  const EmailValue = watch("Email", "");
  const CompanyNameValue = watch("CompanyName", "");
  const WebsiteValue = watch("Website", "");
  const CompanyTypeValue = watch("CompanyType", "");
  const CompanySizeValue = watch("CompanySize", "");
  const AddressValue = watch("Address", "");
  const PrimaryServicesValue = watch("PrimaryServices", "");
  const ElevatorPitchValue = watch("ElevatorPitch", "");
  const SocialMediaValue = watch("SocialMedia", "");
  const OtherCompanyTypeValue = watch("OtherCompanyType", "");
  const showOtherSocialValue = watch("showOtherSocial", "");
  const OtherPrimaryServiceValue = watch("OtherPrimaryService", "");
  const SecondaryServicesValue = watch("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOtherCompanyTypeInput, setshowOtherCompanyTypeInput] =
    useState(false);
  const [showOtherSocialInput, setshowOtherSocialInput] = useState(false);
  const [showOtherPrimaryServiceInput, setshowOtherPrimaryServiceInput] =
    useState(false);
  useEffect(() => {
    setshowOtherPrimaryServiceInput(PrimaryServicesValue === "Other");
  }, [PrimaryServicesValue]);
  useEffect(() => {
    setshowOtherSocialInput(SocialMediaValue === "Other");
  }, [SocialMediaValue]);
  useEffect(() => {
    setshowOtherCompanyTypeInput(CompanyTypeValue === "Other");
  }, [CompanyTypeValue]);
  const onFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type !== "application/pdf") {
        setError("Only PDF files are allowed.");
        setFileName(""); // Clear the file name
      } else if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB.");
        setFileName(""); // Clear the file name
      } else {
        setFileName(file.name);
        setValue("Protfolio", file); // ✅ Manually set file in react-hook-form
        trigger("Protfolio");
        setError(""); // Clear previous errors
      }
    }
  };
  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", data.Protfolio);
    formData.append("upload_preset", UPLOAD_PRESET); // Required by Cloudinary

    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setFileUrl(result.secure_url); // ✅ Store the file URL
      //   console.log("Uploaded File URL:", result.secure_url);
      data.Protfolio = result.secure_url;
      console.log(data);
      //   alert("Protfolio uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload Protfolio");
    }
    emailjs
      .send(
        import.meta.env.VITE_SERVICEID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_CONTACTTEMPLATEID, // Replace with your EmailJS Template ID
        data,
        import.meta.env.VITE_PUBLICID // Replace with your EmailJS Public Key
      )
      .then(() => console.log(""))
      .catch((error) => alert("Error sending email: " + error.text));
    const formatedData = {
      data: {
        FirstName: data.FirstName,
        LastName: data.LastName,
        Phone: data.Phone,
        Email: data.Email,
        WebsiteURL: data.Website,
        CompanyName: data.CompanyName,
        CompanyType: data.CompanyType,
        OtherCompanyType: data.OtherCompanyType,
        CompanySize: data.CompanySize,
        Address: data.Address,
        PrimaryService: data.PrimaryServices,
        OtherPrimaryService: data.OtherPrimaryService,
        SecondaryServices: data.SecondaryServices,
        PortfolioLink: data.Protfolio,
        SocialMedia: data.SocialMedia,
        OtherSocialMedia: data.showOtherSocial,
        Pitch: data.ElevatorPitch,
      },
    };
    postPartnerForm(formatedData);
    setLoading(false);
    reset();
    reset({ SecondaryServices: [] });
    setFileName("");
    setFileUrl("");
  };
  const customStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      border: error
        ? "1px solid #dc2626" // Red if error
        : selectedOptions.length > 0
        ? "1px solid #16a34a" // Green if selected
        : "1px solid #9ca3af", // Default gray
      boxShadow: isFocused ? "0 0 0 2px rgba(79, 70, 229, 0.2)" : "none",
      "&:hover": {
        borderColor: isFocused ? "#4f46e5" : "#9ca3af",
      },
      borderRadius: "8px",
      padding: "3px",
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: "#80bfff", // Green background for tags
      display: "flex",
      alignItems: "center",
      padding: "4px 0",
      borderRadius: "8px",
      color: "#ffffff",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "#ffffff", // White text in tag
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      padding: "12px",
      color: "#fff", // Red remove button
      ":hover": {
        backgroundColor: "#ff6666",
        color: "#fff",
      },
    }),
  };
  const options = [
    { value: "Web Development", label: "Web Development" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "3D/VR Creation", label: "3D/VR Creation" },
    {
      value: "Custom Software Development",
      label: "Custom Software Development",
    },
    { value: "AI/ML Development", label: "AI/ML Development" },
    { value: "CRM/ERP Development", label: "CRM/ERP Development" },
    {
      value: "Mobile Application Development",
      label: "Mobile Application Development",
    },
    { value: "Photography", label: "Photography" },
    { value: "Videography", label: "Videography" },
    { value: "Editing", label: "Editing" },
    { value: "HR Consultancy", label: "HR Consultancy" },
    {
      value: "Educational or Training Institute",
      label: "Educational or Training Institute",
    },
    { value: "Bulk SMS/Email Provider", label: "Bulk SMS/Email Provider" },
    { value: "Sales Consultancy", label: "Sales Consultancy" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "PR/ATL/BTL Marketing", label: "PR/ATL/BTL Marketing" },
    { value: "Content Writing", label: "Content Writing" },
    { value: "Other", label: "Other" },
  ];
  return (
    <>
      <div className="xl:px-40 py-[60px] 3xl:mx-auto 3xl:max-w-screen-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First | Last | Name */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Full Name */}
            <div className="py-4 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="FirstName"
                  {...register("FirstName", {
                    required: "First Name is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.FirstName
                      ? "border-red-600"
                      : FirstNameValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="FirstName"
                  className={`absolute text-sm ${
                    errors.FirstName
                      ? "text-red-600"
                      : FirstNameValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your First Name
                </label>
              </div>
              {errors.FirstName && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.FirstName.message}
                </span>
              )}
            </div>
            {/* Last Name */}
            <div className="py-4 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="LastName"
                  {...register("LastName", {
                    required: "Last Name is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.LastName
                      ? "border-red-600"
                      : LastNameValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="LastName"
                  className={`absolute text-sm ${
                    errors.LastName
                      ? "text-red-600"
                      : LastNameValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Last Name
                </label>
              </div>
              {errors.LastName && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.LastName.message}
                </span>
              )}
            </div>
          </div>
          {/* Phone | Email */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Phone number */}
            <div className="py-4 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="Phone"
                  {...register("Phone", {
                    required: "Phone is required",
                    maxLength: {
                      value: 10,
                      message: "Phone number should be 10 digits",
                    },
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.Phone
                      ? "border-red-600"
                      : PhoneValue.length <= 0
                      ? "border-gray-500"
                      : PhoneValue.length < 10
                      ? "border-yellow-500"
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
                      : PhoneValue.length < 10
                      ? "text-yellow-500"
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
            {/* Email */}
            <div className="py-4 w-full">
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
          </div>
          {/* Website | Company Name */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Website */}
            <div className="py-4 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="Website"
                  {...register("Website", {
                    required: "Website Link is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.Website
                      ? "border-red-600"
                      : WebsiteValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="Website"
                  className={`absolute text-sm ${
                    errors.Website
                      ? "text-red-600"
                      : WebsiteValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Website Link
                </label>
              </div>
              {errors.Website && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Website.message}
                </span>
              )}
            </div>
            {/* Company Name */}
            <div className="py-4 w-full">
              <div className="relative">
                <input
                  type="text"
                  id="CompanyName"
                  {...register("CompanyName", {
                    required: "Company Name is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.CompanyName
                      ? "border-red-600"
                      : CompanyNameValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="CompanyName"
                  className={`absolute text-sm ${
                    errors.CompanyName
                      ? "text-red-600"
                      : CompanyNameValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Company Name
                </label>
              </div>
              {errors.CompanyName && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.CompanyName.message}
                </span>
              )}
            </div>
          </div>
          {/* Companany Type | Other Company Type | Company Size */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Company Type */}
            <div className="py-4 w-full">
              <div className="relative">
                <select
                  id="CompanyType"
                  {...register("CompanyType", {
                    required: "This field is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.CompanyType
                        ? "border-red-600"
                        : CompanyTypeValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                >
                  <option value="" hidden>
                    Choose
                  </option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Sole Proprietorship">
                    Sole Proprietorship
                  </option>
                  <option value="Registered Partnership">
                    Registered Partnership
                  </option>
                  <option value="LLP">LLP</option>
                  <option value="Private Limited">Private Limited</option>
                  <option value="Public Limited">Public Limited</option>
                  <option value="Other">Other</option>
                </select>
                <label
                  htmlFor="CompanyType"
                  className={`absolute text-sm ${
                    errors.CompanyType
                      ? "text-red-600"
                      : CompanyTypeValue
                      ? "text-green-600"
                      : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Select Your Company Type
                </label>
              </div>
              {errors.CompanyType && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.CompanyType.message}
                </span>
              )}
            </div>
            {/* Other Company Type*/}
            {showOtherCompanyTypeInput && (
              <div className={`py-4 w-full`}>
                <div className="relative">
                  <input
                    type="text"
                    id="OtherCompanyType"
                    {...register("OtherCompanyType", {
                      required: "Other Company Type is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.OtherCompanyType
                        ? "border-red-600"
                        : OtherCompanyTypeValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="OtherCompanyType"
                    className={`absolute text-sm ${
                      errors.OtherCompanyType
                        ? "text-red-600"
                        : OtherCompanyTypeValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Other Company Type
                  </label>
                </div>
                {errors.OtherCompanyType && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.OtherCompanyType.message}
                  </span>
                )}
              </div>
            )}
            {/* Company Size */}
            <div className="py-4 w-full">
              <div className="relative ">
                <input
                  type="number"
                  id="CompanySize"
                  {...register("CompanySize", {
                    required: "Compnay Size is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.CompanySize
                      ? "border-red-600"
                      : CompanySizeValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="CompanySize"
                  className={`absolute text-sm ${
                    errors.CompanySize
                      ? "text-red-600"
                      : CompanySizeValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Company Size
                </label>
              </div>
              {errors.CompanySize && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.CompanySize.message}
                </span>
              )}
            </div>
          </div>
          {/* Address */}
          <div className="py-4 w-full">
            <div className="relative">
              <input
                type="text"
                id="Address"
                {...register("Address", {
                  required: "Address is required",
                })}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                  errors.Address
                    ? "border-red-600"
                    : AddressValue.length <= 0
                    ? "border-gray-500"
                    : "border-green-600"
                } appearance-none focus:outline-none focus:ring-0 peer`}
                placeholder=""
              />
              <label
                htmlFor="Address"
                className={`absolute text-sm ${
                  errors.Address
                    ? "text-red-600"
                    : AddressValue.length <= 0
                    ? "text-gray-500"
                    : "text-green-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
              >
                Enter Your Address
              </label>
            </div>
            {errors.Address && (
              <span className="mt-2 pl-2 text-xs text-red-600">
                {errors.Address.message}
              </span>
            )}
          </div>
          {/* Primary Services */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Primary Services */}
            <div className="py-4 w-full">
              <div className="relative">
                <select
                  id="PrimaryServices"
                  {...register("PrimaryServices", {
                    required: "This field is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.PrimaryServices
                        ? "border-red-600"
                        : PrimaryServicesValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                >
                  <option value="" hidden>
                    Choose
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="3D/VR Creation">3D/VR Creation</option>
                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>
                  <option value="AI/ML Developmentd">AI/ML Development</option>
                  <option value="CRM/ERP Development">
                    CRM/ERP Development
                  </option>
                  <option value="Mobile Application Development">
                    Mobile Application Development
                  </option>
                  <option value="Photography">Photography</option>
                  <option value="Videography">Videography</option>
                  <option value="Editing">Editing</option>
                  <option value="HR Consultancy">HR Consultancy</option>
                  <option value="Educational or Training Institute">
                    Educational or Training Institute
                  </option>
                  <option value="Bulk SMS/Email Provider">
                    Bulk SMS/Email Provider
                  </option>
                  <option value="Sales Consultancy">Sales Consultancy</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="PR/ATL/BTL Marketing">
                    PR/ATL/BTL Marketing
                  </option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Other">Other</option>
                </select>
                <label
                  htmlFor="PrimaryServices"
                  className={`absolute text-sm ${
                    errors.PrimaryServices
                      ? "text-red-600"
                      : PrimaryServicesValue
                      ? "text-green-600"
                      : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Select Your Primary Services
                </label>
              </div>
              {errors.PrimaryServices && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.PrimaryServices.message}
                </span>
              )}
            </div>
            {showOtherPrimaryServiceInput && (
              <div className="py-4 w-full">
                <div className="relative">
                  <input
                    type="text"
                    id="OtherPrimaryService"
                    {...register("OtherPrimaryService", {
                      required: "Other Primary Service is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.OtherPrimaryService
                        ? "border-red-600"
                        : OtherPrimaryServiceValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="OtherPrimaryService"
                    className={`absolute text-sm ${
                      errors.OtherPrimaryService
                        ? "text-red-600"
                        : OtherPrimaryServiceValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Other Primary Service
                  </label>
                </div>
                {errors.OtherPrimaryService && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.OtherPrimaryService.message}
                  </span>
                )}
              </div>
            )}
          </div>
          {/* Secondary Services */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Secondary Services */}
            <div className="py-4 w-full">
              <div className="relative">
                {/* Controller wraps the Select component */}
                <Controller
                  name="SecondaryServices"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={options}
                      isMulti
                      styles={customStyles}
                      placeholder="Choose"
                    />
                  )}
                />

                <label
                  className={`absolute text-sm ${
                    errors.SecondaryServices ? "text-red-600" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 left-2 bg-[#fafafa] px-2`}
                >
                  Select Your Secondary Services
                </label>
              </div>
              {errors.SecondaryServices && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.SecondaryServices.message}
                </span>
              )}
            </div>
          </div>
          {/* Protfolio Upload */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Upload Protfolio */}
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
                        <span className="font-semibold">
                          Click to upload Portfolio
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        Only PDF (MAX. 5MB)
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={onFileChange} // ✅ Handles file selection and validation
                />
              </label>
            </div>
            {/* Show Error Message */}
            {error && (
              <span className="mt-2 text-sm text-red-600">{error}</span>
            )}
          </div>
          {/* Social Media Handles | Other Social Platform */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Social Media Handles */}
            <div className="py-4 w-full">
              <div className="relative">
                <select
                  id="SocialMedia"
                  {...register("SocialMedia", {
                    required: "This field is required",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.SocialMedia
                        ? "border-red-600"
                        : SocialMediaValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                >
                  <option value="" hidden>
                    Choose
                  </option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Insta">Insta</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Other">Other</option>
                </select>
                <label
                  htmlFor="SocialMedia"
                  className={`absolute text-sm ${
                    errors.SocialMedia
                      ? "text-red-600"
                      : SocialMediaValue
                      ? "text-green-600"
                      : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Select Your Social Media
                </label>
              </div>
              {errors.SocialMedia && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.SocialMedia.message}
                </span>
              )}
            </div>
            {/* Other Social Platform */}
            {showOtherSocialInput && (
              <div className="py-4 w-full">
                <div className="relative">
                  <input
                    type="text"
                    id="showOtherSocial"
                    {...register("showOtherSocial", {
                      required: "Other Social Platform is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.showOtherSocial
                        ? "border-red-600"
                        : showOtherSocialValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="showOtherSocial"
                    className={`absolute text-sm ${
                      errors.showOtherSocial
                        ? "text-red-600"
                        : showOtherSocialValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Other Social Platform
                  </label>
                </div>
                {errors.showOtherSocial && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.showOtherSocial.message}
                  </span>
                )}
              </div>
            )}
          </div>
          {/* Elevator Pitch */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Elevator Pitch */}
            <div className="py-4 w-full">
              <div className="relative">
                <textarea
                  type="text"
                  id="ElevatorPitch"
                  {...register("ElevatorPitch", {
                    required: "Elevator Pitch is required",
                  })}
                  className={`block h-25 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.ElevatorPitch
                      ? "border-red-600"
                      : ElevatorPitchValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="ElevatorPitch"
                  className={`absolute text-sm ${
                    errors.ElevatorPitch
                      ? "text-red-600"
                      : ElevatorPitchValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Elevator Pitch
                </label>
              </div>
              {errors.ElevatorPitch && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.ElevatorPitch.message}
                </span>
              )}
            </div>
          </div>
          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-[#007fff] hover:bg-[#0066ff] hover:cursor-pointer  text-white px-16 py-4 rounded-lg"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default PartnerForm;
