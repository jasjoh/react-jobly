import JobCard from "./JobCard.js";
import "./JobCardList.css";


/** Renders a list of JobCards
 *
 * Props:
 *  - jobs: a list of jobs { [job, ... ] }
 *
 * State:
 *  - None
 *
 * { CompanyDetail, JobList } -> JobCardList -> [ JobCard, ... ]  */
function JobCardList({ jobs }) {
  if (!jobs) { return "" }
  return (
    <div className="JobCardList">
      {jobs.map(j => <JobCard key={j.id} job={j} />)}
    </div>
  );
}

export default JobCardList;