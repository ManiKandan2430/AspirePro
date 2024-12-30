import React from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils/cutomFetch";
import { Formrow, Logo } from "../components";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        bgcolor: "#f9fafc",
        py: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Logo Section */}
      <Box sx={{ mb: 2 }}>
        <Logo />
      </Box>

      {/* Header */}
      <Typography variant="h4" component="h3" gutterBottom>
        Register
      </Typography>

      {/* Form */}
      <Form method="post" style={{ width: "80%" }}>

        <Formrow type="text" labelText="Firstname" name="name"  />
        <Formrow type="text" labelText="Lastname" name="lastname" />
        <Formrow type="email" labelText="Email" name="email" />
        <Formrow type="text" labelText="Location" name="jobLocation" />
        <Formrow type="password" labelText="password" name="password" />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ py: 1.5 }}
        >
          Submit
        </Button>

        {/* Login Redirect */}
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, color: "text.secondary" }}
        >
          Already a member?{" "}
          <Link to="/login" style={{ color: "#1976d2" }}>
            Login
          </Link>
        </Typography>
      </Form>
    </Container>
  );
};

export default Register;
