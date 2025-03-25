import React, { useContext, useState } from "react";
import { Form } from "react-router-dom";
import Formrow from "./Formrow";
import { Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { customFetch } from "../utils/cutomFetch";
import { JobContext } from "../context/JobContext";
import { JobContainer, SelectInput } from "../components";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const SearchContainer = () => {
  const { alljobs, loading, error } = useContext(JobContext);
  const [jobs, setJobs] = useState(null);
  const [searchParams, setSearchParams] = useState({});
  const [page, setPage] = useState(1); // State to track the current page

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = async (params, page) => {
    try {
      const response = await customFetch.get("/jobs", {
        params: { ...params, page },
      });
      setJobs(response.data.jobs);
    } catch (err) {
      console.error("Search Error:", err);
    }
  };

  // Debounced function for onChange
  const debouncedSearch = debounce((event) => {
    const value = event.target.value;
    setSearchParams((prev) => ({ ...prev, search: value }));
    handleSearch({ ...searchParams, search: value }, page); // Pass current page
  }, 500);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const params = Object.fromEntries(formData.entries());

    try {
      const response = await customFetch.get("/jobs", {
        params: { ...params, page },
      });
      setJobs(response.data.jobs);
    } catch (err) {
      console.error("Form Submission Error:", err);
    }
  };

  const handleReset = () => {
    setJobs(null); // Reset jobs to display all jobs
    setSearchParams({});
    document.getElementById("searchForm").reset(); // Reset form fields
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage); // Update page state
    handleSearch(searchParams, newPage); // Fetch jobs for the new page
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="mb-10">
        <Typography
          textTransform="uppercase"
          variant="h5"
          sx={{ color: "navy", marginBottom: "5px" }}
        >
          Search
        </Typography>
        <Form id="searchForm" method="get" onSubmit={handleFormSubmit}>
          <div className="lg:w-[50%]">
            <Formrow
              labelText="Search your jobs..."
              type="search"
              name="search"
              onChange={debouncedSearch} // Adjusted debounce function
            />
          </div>
          <SelectInput />
          <div className="flex h-12 justify-center mt-6">
            <Button
              type="reset"
              variant="contained"
              color="secondary"
              startIcon={<AutorenewIcon />}
              sx={{ py: 1.5, px: 3, marginRight: 2 }}
              onClick={handleReset}
            >
              Reset All
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              sx={{ py: 1.5, px: 3 }}
            >
              Search
            </Button>
          </div>
        </Form>
      </div>
      <div>
        <JobContainer data={jobs || alljobs} loading={loading} error={error} />
      </div>
      <div className="ml-56 mt-10">
        <Stack spacing={2}>
          <Pagination
            count={10} // Total pages (you may want to fetch this dynamically)
            shape="rounded"
            size="large"
            page={page} // Controlled page
            onChange={handlePageChange} // Handle page change
          />
        </Stack>
      </div>
    </>
  );
};

export default SearchContainer;
