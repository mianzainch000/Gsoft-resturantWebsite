import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../../Images/banner.jpeg";
import home from "./home.module.css";
export const HomeComp = () => {
  return (
    <Box className={home.home} sx={{ backgroundImage: `url(${Banner})` }}>
      <Box className={home.headerContainer}>
        <Typography variant="h1" className={home.h1}>
          Food Web
        </Typography>
        <Typography className={home.p} xs={{ fontSize: "10px;" }}>
          Best Food In Pakistan
        </Typography>
        <NavLink to="/menu">
          <Button variant="contained" className={home.button}>
            Order Now
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};
