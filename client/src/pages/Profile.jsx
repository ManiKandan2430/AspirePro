import React, { useContext } from "react";
import { Formrow } from "../components";
import { AuthContext } from "../context/AuthContext";
import { Typography,Button } from "@mui/material";
import "../App.css";
import { toast } from "react-toastify";
import { customFetch } from "../utils/cutomFetch";
import { redirect } from "react-router-dom";

const Profile = ({ data }) => {
  const { isloading } = useContext(AuthContext);

  const profile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    

    const file = formData.get("avatar");
    if (file && file.size > 50000) {
      toast.error("Image size too large");
      return;
    }

    try {
      await customFetch.patch("/users/update-user", formData);
      toast.success("Profile updated successfully");
      window.location.reload()
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Something went wrong");
    }
  };

  if (isloading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="profile">
      <Typography
        variant="h5"
        sx={{ textTransform: "capitalize", marginBottom: "5px" }}
      >
        Profile
      </Typography>
      {data ? (
        <form method="post" onSubmit={profile} encType="multipart/form-data">
          <p className="mb-4">Select an image file (max 0.5MB)</p>
          <div className="grid lg:grid-cols-2 gap-2 w-full">
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="file-input file-input-bordered file-input-info w-full max-w-full"
            />
            <Formrow
              name="name"
              labelText="Firstname"
              defaultvalue={data?.name}
            />
            <Formrow
              name="lastname"
              labelText="Lastname"
              defaultvalue={data?.lastname}
            />
            <Formrow
              name="email"
              labelText="Email"
              defaultvalue={data?.email}
            />
            <Formrow
              name="jobLocation"
              labelText="Location"
              defaultvalue={data?.jobLocation}
            />
          </div>
          <Button
            sx={{
              bgcolor: "#1976d2",
              color: "white",
              marginTop: "20px",
              marginLeft:"20px",
              px: "40px",
            }}
            type="sumbit"
          >
            Submit
          </Button>
        </form>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Profile;
