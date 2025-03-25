import React, { useContext } from "react";
import { FormJobs} from "../components";
import { AuthContext } from "../context/AuthContext";
import { Form, useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext.jsx";

const Addjob = ({data}) => {
  const { isLoading } = useContext(AuthContext);
  const { CreateJob } = useContext(JobContext);
  const navigate = useNavigate();
  
  if (isLoading) {
    return <p>Loading user data...</p>; // Show loading state
  }
  const location = data?.jobLocation || "Unknown location";
  const handleAddjob = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    CreateJob(data, navigate);
  };

  return (
    <Form method="post" onSubmit={handleAddjob}>
      <FormJobs labelText="Add job" defaultvalue={location} />
    </Form>
  );
};

export default Addjob;
