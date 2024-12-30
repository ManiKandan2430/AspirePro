import React from 'react'
import { Outlet } from 'react-router-dom';
import { Footer, NavbarCom } from '../components';
import Box from "@mui/material/Box";

const HomePage = ({children,user}) => {
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures it spans the entire viewport
      }}
    >
      <Box sx={{ flex: 1 }}>{children}</Box>
      <NavbarCom current={user} />
      <Outlet />
      <div
        className="absoulte w-full bottom-0 "
      >
        <Footer />
      </div>
    </Box>
  );
}
export default HomePage