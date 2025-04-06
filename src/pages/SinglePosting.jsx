import { useParams, NavLink } from "react-router-dom";
import Jobs from "../assets/CareerPage/jobs.json";
import styles from "../components/CareerPage/css/SinglePosting.module.css";
import { FiDownload } from "react-icons/fi";
import AnimatedBtn from "../components/General/AnimatedBtn";
import openPdfInNewTab from "../components/CareerPage/GeneratePdf";
// import ReactPDF from "@react-pdf/renderer";
const SinglePosting = () => {
  let jobTitle = useParams();
  let title = jobTitle.title.split("-").join(" ");
  const SingleJob = [];
  Jobs.forEach((job) => {
    if (job.job_title === title) {
      SingleJob.push(job);
    }
  });
  // console.log(SingleJob);
  return (
    <>
      <div
        className={`${styles.singleHeading} bg-[#007fff] text-white h-auto py-[60px] px-[30px] md:h-80 flex flex-col gap-4  justify-center items-center `}
      >
        <h1 className="text-center text-[32px] text-wrap sm:text-4xl md:text-6xl">
          {title}
        </h1>
        {SingleJob.map((job) => (
          <div className="flex gap-4 justify-center flex-wrap p-2">
            <div className="flex items-center gap-1">
              {/* location */}
              <svg
                width="25"
                height="25"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1230_44377)">
                  <path
                    d="M9.85686 4.78683C9.85686 6.92112 5.99972 12.0725 5.99972 12.0725C5.99972 12.0725 2.14258 6.92112 2.14258 4.78683C2.14258 3.76385 2.54895 2.78277 3.27231 2.05942C3.99566 1.33606 4.97674 0.929687 5.99972 0.929688C7.0227 0.929688 8.00378 1.33606 8.72713 2.05942C9.45049 2.78277 9.85686 3.76385 9.85686 4.78683Z"
                    stroke="#fff"
                    strokeWidth="0.857143"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6.00056 6.07143C6.71064 6.07143 7.28627 5.49579 7.28627 4.78571C7.28627 4.07563 6.71064 3.5 6.00056 3.5C5.29048 3.5 4.71484 4.07563 4.71484 4.78571C4.71484 5.49579 5.29048 6.07143 6.00056 6.07143Z"
                    stroke="#fff"
                    strokeWidth="0.857143"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1230_44377">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <h2 className={`${styles.headH2}`}>{job.location}</h2>
            </div>
            <div className="flex items-center gap-1">
              {/* experience */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#fff"
                  fillRule="nonzero"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  textAnchor="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M9,3v1h-5c-1.09306,0 -2,0.90694 -2,2v4v4v4c0,1.09306 0.90694,2 2,2h16c1.09306,0 2,-0.90694 2,-2v-4v-4v-4c0,-1.09306 -0.90694,-2 -2,-2h-5v-1zM4,6h16v4v4h-16v-4zM12,10c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM4,16h16v2h-16z"></path>
                  </g>
                </g>
              </svg>
              <h2 className={`${styles.headH2}`}>{job.experience_required}</h2>
            </div>
            <div className="flex items-center gap-1">
              {/* Mode */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#fff"
                  fillRule="nonzero"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  textAnchor="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M9,3v1h-5c-1.09306,0 -2,0.90694 -2,2v4v4v4c0,1.09306 0.90694,2 2,2h16c1.09306,0 2,-0.90694 2,-2v-4v-4v-4c0,-1.09306 -0.90694,-2 -2,-2h-5v-1zM4,6h16v4v4h-16v-4zM12,10c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM4,16h16v2h-16z"></path>
                  </g>
                </g>
              </svg>
              <h2 className={`${styles.headH2}`}>{job.mode}</h2>
            </div>
            <div className="flex items-center gap-1">
              {/* type */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#fff"
                  fillRule="nonzero"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  textAnchor="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M9,3v1h-5c-1.09306,0 -2,0.90694 -2,2v4v4v4c0,1.09306 0.90694,2 2,2h16c1.09306,0 2,-0.90694 2,-2v-4v-4v-4c0,-1.09306 -0.90694,-2 -2,-2h-5v-1zM4,6h16v4v4h-16v-4zM12,10c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM4,16h16v2h-16z"></path>
                  </g>
                </g>
              </svg>
              <h2 className={`${styles.headH2}`}>{job.contract_duration}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="xl:px-40 py-[60px] 3xl:mx-auto 3xl:max-w-screen-xl">
        {SingleJob.map((job, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              {/* <div>
                {job.technologies.map((tech, index) => (
                  <span
                    className="bg-[#57a1e2] rounded-3xl gap-2.5 text-white text-wrap py-2 px-4"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
              <div className="flex  flex-row flex-wrap gap-4">
                {job.technologies.map((tech, index) => (
                  <div
                    className="bg-[#c7c7c7] rounded-xl gap-2.5 text-[12px] text-white text-wrap py-0.5 px-2"
                    key={index}
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="py-4 md:px-0 px-2">
                <h2 className="py-2 font-bold text-2xl">Job Description: </h2>
                <p>{job.job_description}</p>
              </div>
              <div className="py-4 md:px-0 px-2">
                <h2 className="py-2 font-bold text-2xl">Job Requirements:</h2>
                <ul>
                  {job.required_skills.map((sentence, index) => (
                    <li
                      style={{ listStyleType: "disc" }}
                      className="pb-2"
                      key={index}
                    >
                      <p>{sentence.trim()}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-4 md:px-0 px-2">
                <h2 className="py-2 font-bold text-2xl">
                  Job Role & Responsibilities:
                </h2>
                <ul>
                  {job.roles_responsibilities.map((sentence, index) => (
                    <li
                      style={{ listStyleType: "disc" }}
                      className="pb-2"
                      key={index}
                    >
                      <p>{sentence.trim()}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-4 md:px-0 px-2">
                <h2 className="py-2 font-bold text-2xl">Prefered Skills:</h2>
                <ul>
                  {job.preferred_skills.map((sentence, index) => (
                    <li
                      style={{ listStyleType: "disc" }}
                      className="pb-2"
                      key={index}
                    >
                      <p>{sentence.trim()}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-4 flex flex-col  gap-8">
                <div className="flex md:justify-start justify-center gap-4">
                  <button onClick={() => openPdfInNewTab("MyCustomPDF")}>
                    <span className="flex gap-2 bg-[#ffffff00]  hover:text-[#007fff] border-[#007fff] cursor-pointer border-1 text-[#007fff] w-[35px] h-[35px] p-2 items-center justify-center rounded-full overflow-hidden shadow-lg">
                      <FiDownload className="text-[20px]" />
                    </span>
                  </button>
                  <AnimatedBtn />
                </div>
                <div className="flex justify-center ">
                  <NavLink to={`/jobs/${title.split(" ").join("-")}/apply-to`}>
                    <span className="bg-[#007fff] text-white px-14 py-5 overflow-hidden shadow-lg hover:bg-white hover:text-[#007fff] hover:border-2 hover:border-[#007fff] rounded-4xl">
                      Apply Now
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className=" p-6 bg-white rounded-xl">
                <h2 className="py-2 font-bold text-2xl">Company Overview</h2>

                <div className="flex flex-col gap-2 pb-2 ">
                  <h3 className="font-medium text-[18px]">Company:</h3>
                  <p>{job.company_overview.name}</p>
                </div>
                <div className="flex flex-col  gap-2 pb-2 ">
                  <h3 className="font-medium text-[18px]">Description:</h3>
                  <p>{job.company_overview.description}</p>
                </div>
              </div>
              <div className=" p-6 bg-white rounded-xl">
                <h2 className="py-2 font-bold text-2xl">Contact Details</h2>
                <div className="flex gap-2 pb-2 flex-col md:flex-row">
                  <h3 className="font-medium text-[18px]">Email:</h3>
                  <p className="text-wrap">{job.contact_details.email}</p>
                </div>
                <div className="flex gap-2 pb-2 flex-col md:flex-row">
                  <h3 className="font-medium text-[18px]">Phone:</h3>
                  <p className="text-wrap">{job.contact_details.phone}</p>
                </div>
                <div className="flex gap-2 pb-2 flex-col md:flex-row">
                  <h3 className="font-medium text-[18px]">Address:</h3>
                  <p className="text-wrap">{job.contact_details.address}</p>
                </div>
                <div className="flex gap-2 pb-2 flex-col md:flex-row">
                  <h3 className="font-medium text-[18px]">Website:</h3>
                  <p className="text-wrap">{job.contact_details.website}</p>
                </div>
                <div className="flex gap-2 pb-2 flex-col md:flex-row">
                  <h3 className="font-medium text-[18px]">Youtube:</h3>
                  <p className="text-wrap">{job.contact_details.youtube}</p>
                </div>
              </div>
              <div className="py-3 flex justify-center md:justify-start">
                <NavLink to={`/jobs/${title.split(" ").join("-")}/apply-to`}>
                  <span className="bg-[#007fff] text-white px-14 py-4 rounded-4xl">
                    Apply Now
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default SinglePosting;
