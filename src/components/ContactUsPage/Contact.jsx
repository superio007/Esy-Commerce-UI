import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const postContactForm = async (formattedData) => {
  const { data } = await axios.post(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/contact-from-entries",
    formattedData, // Sending formattedData in the request body
    {
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    }
  );
  return data;
};
const usePostContactForm = () => {
  return useMutation({
    mutationFn: postContactForm, // ✅ Correct way to use mutation function
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Form Submitted Successfully!",
        text: "Your contact form has been sent.",
        confirmButtonText: "OK",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
        confirmButtonText: "OK",
      });
    },
  });
};
const Conatct = ({ sectionPoints }) => {
  const { mutate } = usePostContactForm();
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const FullnameValue = watch("name", "");
  const PhoneValue = watch("Phone", "");
  const EmailValue = watch("Email", "");
  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICEID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_CONTACTTEMPLATEID, // Replace with your EmailJS Template ID
        data,
        import.meta.env.VITE_PUBLICID // Replace with your EmailJS Public Key
      )
      .then(() => console.log("Email sent successfully"))
      .catch((error) => alert("Error sending email: " + error.text));
    const formattedData = {
      data: {
        FullName: data.name,
        Phone: data.Phone,
        Email: data.Email,
      },
    };
    mutate(formattedData);
    setLoading(false);
    reset();
  };
  return (
    <>
      <div className="flex md:flex-row items-center p-6 flex-col-reverse xl:p-10 gap-2 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="w-full md:w-1/2 lg:w-3/5">
          <div className="flex flex-wrap ">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  {sectionPoints[0].Heading || "Authentic Cliche Forage"}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  {sectionPoints[1].Heading || "Kinfolk Chips Snackwave"}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  {sectionPoints[2].Heading || "Coloring Book Ethical"}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  {sectionPoints[3].Heading || "Typewriter Polaroid Cray"}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  {sectionPoints[4].Heading || "Pack Truffaut Blue"}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  {sectionPoints[5].Heading || "The Catcher In The Rye"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  {sectionPoints[6].Heading || "Authentic Cliche Forage"}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  {sectionPoints[7].Heading || "Kinfolk Chips Snackwave"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5flex flex-col md:ml-auto mb-8 md:mb-0">
          <h2 className="text-gray-900 text-2xl  mb-1 uppercase title-font">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
            {/* Submit */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="mt-4 bg-[#007fff] hover:bg-indigo-700 hover:cursor-pointer  text-white px-16 py-4 rounded-lg"
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
      </div>
    </>
  );
};

export default Conatct;
