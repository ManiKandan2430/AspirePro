import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const links = [
  { text: "Add jobs", path: "/dashboard", icon: <FormatAlignJustifyIcon /> },
  { text: "All Job", path: "/dashboard/alljobs", icon: <WorkIcon /> },
  { text: "Profile", path: "/dashboard/profile", icon: <PersonIcon /> },
  { text: "Stats", path: "/dashboard/stats", icon: <QueryStatsIcon /> },
  { text: "Admin", path: "/dashboard/admin", icon:<AdminPanelSettingsIcon/> },
];
export default links;
