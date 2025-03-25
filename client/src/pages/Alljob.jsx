import React, { useContext } from "react";
import { SearchContainer } from "../components";
import { JobContext } from "../context/JobContext";


const Alljob = () => {
  const {loading,error} = useContext(JobContext) 
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <SearchContainer />
    </div>
  );
};

export default Alljob;
