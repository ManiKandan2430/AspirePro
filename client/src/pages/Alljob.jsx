import React, { useContext, useEffect, useState } from "react";
import { SearchContainer } from "../components";
import { customFetch } from "../utils/cutomFetch";
import { JobContext } from "../context/JobContext";
import useFetch from '../utils/useFetch'

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
