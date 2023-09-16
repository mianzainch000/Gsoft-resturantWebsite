import { Box, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
export const Footer = () => {
  return (
    <Box
      sx={{ textAlign: "center;", color: "white;", bgcolor: "#1A1A19;", p: 3 }}
    >
      <Box
        sx={{
          my: 3,
          "& svg": {
            fontSize: "50px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translateX(5px)",
            transition: "all 400ms",
          },
        }}
      >
        {/* Icons */}
        <WhatsAppIcon />
        <YouTubeIcon />
        <FacebookIcon />
        <InstagramIcon />
      </Box>
      <Typography variant="h5">All Reserved &copy; Techinfo YT</Typography>
    </Box>
  );
};
