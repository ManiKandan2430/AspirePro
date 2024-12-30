import React, { useContext } from "react";
import { FormJobs} from "../components";
import { AuthContext } from "../context/AuthContext";
import { Form, useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext.jsx";
// import "../App.css";

const Addjob = ({data}) => {
  const { isLoading } = useContext(AuthContext);
  const { CreateJob } = useContext(JobContext);
  const navigate = useNavigate();
  console.log("addjob",data?.jobLocation);
  
  if (isLoading) {
    return <p>Loading user data...</p>; // Show loading state
  }
  const location = data?.jobLocation || "Unknown location";
  console.log(location);
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
