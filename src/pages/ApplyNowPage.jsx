import { useParams, NavLink } from "react-router-dom";
import ApplyNowForm from "../components/CareerPage/ApplyNowForm";
import styles from "../components/CareerPage/css/SinglePosting.module.scss";
import CarrearPageData from "../Data/CarrearPageData.json";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
const fetchApplyNowContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/carrear-page?populate[open_positions][populate]=*&populate[carrear_points][populate]=*&populate[job_description]populate]=*"
  );
  return data.data;
};
const ApplyNowPage = () => {
  const [SingleJob, setSingleJob] = useState([]);
  const [Jobs, setJobs] = useState([]);
  const [JobsDesc, setJobsDesc] = useState([]);
  let jobTitle = useParams();
  let title = jobTitle.title.split("-").join(" ");
  const { data, isLoading, error } = useQuery({
    queryKey: ["ApplyNowpage-content"],
    queryFn: fetchApplyNowContent,
    initialData: CarrearPageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? CarrearPageData.data || [] : data || [];
  useEffect(() => {
    if (
      apiResponse.open_positions &&
      Array.isArray(apiResponse.open_positions)
    ) {
      const jobMatch = apiResponse.open_positions.find(
        (job) => job.PositionName === title
      );
      setJobs(apiResponse.open_positions); // Set all jobs
      setJobsDesc(apiResponse.job_description); // Set all job descriptions
      setSingleJob(jobMatch ? [jobMatch] : []); // Set matched job
    }
  }, [apiResponse, title]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {apiResponse ? (
        <>
          <div
            className={`${styles.singleHeading} bg-[#007fff] text-white h-auto md:h-80 flex flex-col gap-4  justify-center items-center`}
          >
            {/* //   <div className="px-6 md:px-0"> */}
            <h1 className={`${styles.CareerPageHeading} text-center`}>
              {title}
            </h1>
            {SingleJob.map((job, index) => (
              <div
                key={index}
                className="flex gap-4 justify-center flex-wrap p-2"
              >
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
                  <h2 className={`${styles.headSub}`}>{job.Location}</h2>
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
                  <h2 className={`${styles.headSub}`}>{job.Experiance}</h2>
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
                  <h2 className={`${styles.headSub}`}>{job.JobType}</h2>
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
                  <h2 className={`${styles.headSub}`}>{job.JobPeriod}</h2>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}
          <div
            className={`xl:px-40 ${styles.singleHeading} 3xl:mx-auto 3xl:max-w-screen-xl`}
          >
            <ApplyNowForm />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">No Data Available...</h1>
        </div>
      )}
    </>
  );
};

export default ApplyNowPage;
