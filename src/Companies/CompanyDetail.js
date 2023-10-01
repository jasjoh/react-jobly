import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "../Jobs/JobCardList.js";
import JoblyApi from "../api.js";
import "./CompanyDetail.css";


/** CompanyDetail, renders list of job cards
 *
 * Props:
 *  - None
 *
 * State:
 *  - company {data: [ { company }, ... ], isLoading: bool}
 *
 * RoutesList -> CompanyDetail -> JobCardList  */
function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState({
    data: {},
    isLoading: true
  });
  console.log("COMPANY DETAIL STATE", company);

  // fetches and sets company details; sets isLoading to false
  useEffect(function fetchCompanyOnMount() {
    console.log("FETCH COMPANY RAN");
    async function fetchCompany() {
      const companyResponse = await JoblyApi.getCompany(handle);
      setCompany({
        data: companyResponse,
        isLoading: false
      });
    }
    fetchCompany();
  }, [handle]);

  if (company.isLoading) return <h3>Loading...</h3>;
  return (
    <div className="CompanyDetail">
      <span className="CompanyDetail-name">{company.data.name}</span>
      <p className="CompanyDetail-description">{company.data.description}</p>
      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}

export default CompanyDetail;