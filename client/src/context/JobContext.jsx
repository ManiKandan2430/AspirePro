import { createContext, useState, useEffect } from "react";
import { customFetch } from "../utils/cutomFetch";
import { toast } from "react-toastify";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [newjob, setNewJob] = useState(null);
  const [editjob, setEditjob] = useState(null);
  const [alljobs, setAlljobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const CreateJob = async (data, navigate) => {
    try {
      const response = await customFetch.post("/jobs", data);
      console.log(response);
      setNewJob(response);
      toast.success("job created");
      navigate("/dashboard/alljobs");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    }
  };
  const Editjob = async (data, navigate, id) => {
    try {
      const response = await customFetch.patch(`/jobs/${id}`, data);
      console.log(response.data);
      setEditjob(response.data);
      toast.success("Job Modified");
      navigate("/dashboard/alljobs");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    }
  };

  const Deletejob = async (_id) => {
    try {
      await customFetch.delete(`/jobs/${_id}`);
      toast.success("job deleted");
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  const getAlljobs = async () => {
    try {
      setLoading(true);
      const response = await customFetch.get("/jobs");
      console.log(response.data);
      setAlljobs(response.data.jobs);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    getAlljobs()
  },[])

  return (
    <JobContext.Provider value={{ CreateJob, Editjob, Deletejob, getAlljobs,alljobs,loading,error }}>
      {children}
    </JobContext.Provider>
  );
};
