import { useParams, NavLink } from "react-router-dom";
import Jobs from "../components/CareerPage/assets/jobs.json";
const ApplyNowPage = () => {
  let jobTitle = useParams();
  let title = jobTitle.title.split("-").join(" ");
  const SingleJob = [];
  Jobs.forEach((job) => {
    if (job.job_title === title) {
      SingleJob.push(job);
    }
  });
//   console.log(SingleJob);
  return <div>ApplyNowPage</div>;
};

export default ApplyNowPage;
