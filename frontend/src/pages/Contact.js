import React from "react";
import { Typography } from "@mui/material";

const Contact = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Email: support@disasterrelief.com
      </Typography>
    </div>
  );
};

export default Contact;
