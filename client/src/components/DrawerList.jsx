import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  Typography,
  Box,
} from "@mui/material";
import links from "../utils/links";
import "../App.css";
import { AuthContext } from "../context/AuthContext";

const DrawerList = () => {
      const { currentUser } = useContext(AuthContext);
      const user = currentUser?.role;
  const drawerWidth = 240;
  return (
    <div className="hidden lg:flex">
      <Box sx={{ display: "flex" }}>
        <Drawer
          className="drawer"
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              marginTop: 10,
              width: drawerWidth,
              height: 300,
              boxSizing: "border-box",
            },
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            textTransform="uppercase"
            fontWeight="bold"
            sx={{ bgcolor:"ghostwhite", py: "6px",color:"dodgerblue"}}
          >
            DashBoard
          </Typography>
          <List>
            {links.map((link) => {
              const { text, path, icon } = link;
              if (user !== "admin" && path === "/dashboard/admin") return;
              return (
                <NavLink
                  to={path}
                  key={text}
                  className="block p-2 rounded text-gray-700 hover:bg-blue-500 focus:bg-blue-400 focus:text-white hover:text-white transition-colors"
                  size="lg"
                >
                  <span className="px-4">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </List>
        </Drawer>
      </Box>
    </div>
  );
};

export default DrawerList;
