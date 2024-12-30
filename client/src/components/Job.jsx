import React, { useContext } from "react";
import moment from "moment";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import JobInfo from "./JobInfo";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobStatus,
  jobType,
  createdAt,
}) => {
  const date = moment(createdAt).format("MMM Do YY");
  const navigate = useNavigate();
  const { Deletejob } = useContext(JobContext);
  const handleEdit = () => {
    navigate(`/dashboard/edit-job/${_id}`);
  };
  const handledelete = async () => {
    Deletejob(_id, navigate);
  };
  return (
    <div data-aos="zoom-in" className="alljobs">
      <Card
        sx={{
          width: "320px",
          height: "250px",
        }}
      >
        <div className="flex">
          <div className="mt-3 ml-4 focus:shadow-lg">
            <Typography
              sx={{
                p: "4px",
                backgroundColor: "blueviolet",
                width: "40px",
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                textTransform: "uppercase",
                borderRadius: "5px",
              }}
            >
              {company.charAt(0)}
            </Typography>
          </div>
          <div className="ml-3 mt-3">
            <Typography sx={{ fontSize: "14px", textTransform: "capitalize" }}>
              {position}
            </Typography>
            <Typography sx={{ fontSize: "10px" }}>{company}</Typography>
            <div className={`status ${jobStatus}`}>
              <AccessTimeIcon sx={{ fontSize: "14px" }} />
              {jobStatus}
            </div>
          </div>
        </div>
        <div className="border border-slate-600 mt-2"></div>
        <div className="px-3 py-2">
          <div className="">
            <JobInfo
              icon={<LocationOnIcon sx={{ fontSize: "20px" }} />}
              text={jobLocation}
            />
            <JobInfo
              icon={<EngineeringIcon sx={{ fontSize: "20px" }} />}
              text={jobType}
            />
            <JobInfo
              icon={<CalendarMonthIcon sx={{ fontSize: "20px" }} />}
              text={date}
            />
          </div>
        </div>
        <div>
          {/* <Link to={`/dashboard/edit-job/${_id}`} onClick={handleEdit} className="updates">Edit</Link> */}
          <div className="flex">
            <button className="updates" onClick={handleEdit}>
              Edit
            </button>
            <button onClick={handledelete} className="updates">
              Delete
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Job;
