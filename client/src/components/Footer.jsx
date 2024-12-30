import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="mt-10">
      <Box
        component="footer"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          padding: "2rem",
          textAlign: "center",
          borderRadius: "2px",
        }}
      >
        {/* Navigation Links */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography
              component="a"
              href="#about-us"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="a"
              href="#contact"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Typography>
          </Grid>
        </Grid>

        {/* Social Media Icons */}
        <Box sx={{ marginY: "1rem" }}>
          <IconButton
            component="a"
            href="#"
            rel="noopener"
            sx={{ color: "white" }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            rel="noopener"
            sx={{ color: "white" }}
          >
            <FacebookIcon />
          </IconButton>
        </Box>

        {/* Footer Text */}
        <Typography variant="body2">
          Copyright © {new Date().getFullYear()} - All rights reserved by
          HellFire
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
