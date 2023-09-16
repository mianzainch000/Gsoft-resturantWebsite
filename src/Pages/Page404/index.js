import React from "react";
import { Typography } from "@mui/material";
import page404 from "../Page404/page404.module.css";
export const Page404 = () => {
  return (
    <Typography variant="h1" className={page404.error}>
      Page Not Found
    </Typography>
  );
};
