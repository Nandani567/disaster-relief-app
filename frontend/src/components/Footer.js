import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box 
      sx={{
        width: "100%",
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#333",
        color: "white",
        position: "fixed", // Stick to the bottom
        bottom: 0,
        left: 0
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Disaster Relief App. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
