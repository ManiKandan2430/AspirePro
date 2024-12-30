import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DrawerList } from "../components";
import { Box } from "@mui/material";
import { JobProvider } from "../context/JobContext";

const Dashboard = () => {

  return (
    <JobProvider>
      <Box sx={{ display: "flex", minHeight: "80vh" }}>
        <DrawerList />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "", // Light background for content area
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </JobProvider>
  );
};

export default Dashboard;
