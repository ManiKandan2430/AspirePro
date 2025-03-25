import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { customFetch } from "../utils/cutomFetch.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CardAdmin from "../components/CardAdmin.jsx";
import HailIcon from "@mui/icons-material/Hail";
import AnalyticsIcon from "@mui/icons-material/Analytics";
const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [adminStats, setAdminStats] = useState(null);
  const toastShownRef = useRef(false); // Track if toast is shown
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const adminFetch = async () => {
    try {
      setLoading(true);
      const response = await customFetch.get("/users/admin/app-stats");
      setAdminStats(response.data);
    } catch (error) {
      if (!toastShownRef.current) {
        // Check if the toast has been shown
        toast.error("You are not authorized to view this page");
        toastShownRef.current = true; // Mark as shown
      }
      navigate("/dashboard/alljobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    adminFetch();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!adminStats) {
    return <p>No data available.</p>;
  }
  const { jobs, users } = adminStats;
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="">
          <CardAdmin
            title="users"
            data={users}
            icon={
              <HailIcon
                sx={{
                  fontSize: "50px",
                  color: "#3a6530",
                  backgroundColor: "#5b9b4c",
                  borderRadius: "4px",
                }}
              />
            }
            color="yellowgreen"
          />
        </div>
        <div className="">
          <CardAdmin
            title="jobs"
            data={jobs}
            icon={
              <AnalyticsIcon
                sx={{
                  fontSize: "50px",
                  color: "#834881",
                  backgroundColor: "#b265b3",
                  borderRadius: "4px",
                }}
              />
            }
            color="violet"
          />
        </div>
      </div>
    </>
  );
};

export default Admin;