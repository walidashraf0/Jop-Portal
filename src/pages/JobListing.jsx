import { getJobs } from "@/Api/ApiJobs";
import useFetch from "@/hooks/useFetch";
import React, { useEffect } from "react";

const JobListing = () => {
  // console.log(session);

  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {});

  console.log(dataJobs)

  useEffect(() => {
    fnJobs();
  }, []);

  return (
    <>
      <div>Job Listing</div>
    </>
  );
};

export default JobListing;
