import React, { useContext, useEffect } from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { Formrow, Logo } from "../components"; // Assuming these are your components
import { AuthContext } from "../context/AuthContext";


const Login = () => {
  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    Login(data,navigate);
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        bgcolor: "#f9fafc",
        py: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Logo and Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Logo />
        <Typography variant="h4" component="h3" sx={{ mt: 2 }}>
          Login
        </Typography>
      </Box>

      {/* Form */}
      <Form method="post" onSubmit={handleSubmit} style={{ width: "70%" }}>
        <Formrow type="text" labelText="Email" name="email" />
        <Formrow type="password" labelText="password" name="password" />

        {/* Action Buttons */}
        <Box sx={{ mb: 3 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 1.5 }}
          >
            Submit
          </Button>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Button
            type="button"
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ py: 1.5 }}
          >
            Explore the App
          </Button>
        </Box>

        {/* Footer */}
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, color: "text.secondary" }}
        >
          Not a member?{" "}
          <Link to="/register" style={{ color: "#1976d2" }}>
            Register
          </Link>
        </Typography>
      </Form>
    </Container>
  );
};

export default Login;
