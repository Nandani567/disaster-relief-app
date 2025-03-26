import React from "react";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4">About Us</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        We are dedicated to providing disaster relief and emergency support.
      </Typography>
    </div>
  );
};

export default About;
