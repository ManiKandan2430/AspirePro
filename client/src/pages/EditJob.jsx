import { useParams, Form, redirect, useNavigate } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { FormJobs } from "../components";
import { JobContext } from "../context/JobContext";

const EditJob = () => {
  const { id } = useParams();
  const { alljobs, loading, error } = useContext(JobContext);
  const { Editjob } = useContext(JobContext);
  const navigate = useNavigate();
  if (loading) {
    return <p>Loading user data...</p>;
  }
;
  console.log(alljobs);
  
  const jobToEdit = alljobs.find((job) => job._id === id);
  const { position, company, jobLocation, jobType, jobStatus } = jobToEdit;

  const handleEditjob = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    Editjob(data, navigate, id);
  };

  return (
    <Form method="post" onSubmit={handleEditjob}>
      {jobToEdit && (
        <FormJobs
          labelText="Edit Job"
          defaultvalue={jobLocation}
          company={company}
          position={position}
          jobStatus={jobStatus}
          jobType={jobType}
        />
      )}
    </Form>
  );
};

export default EditJob;
