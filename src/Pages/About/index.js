import { Box, Typography } from "@mui/material";
import React from "react";
import about from "./about.module.css";
export const AboutComp = () => {
  return (
    <Box className={about.container}>
      <Typography variant="h4" className={about.heading}>
        Welecome to my Resturant
      </Typography>
      <p className={about.p}>
        The first restaurant proprietor is believed to have been one A.
        Boulanger, a soup vendor, who opened his business in Paris in 1765. The
        sign above his door advertised restoratives, or restaurants, referring
        to the soups and broths available within. The institution took its name
        from that sign, and restaurant now denotes a public eating place in
        English, French, Dutch, Danish, Norwegian, Romanian, and many other
        languages, with some variations. For example, in Spanish and Portuguese
        the word becomes restaurante, in Italian it is ristorante, in Swedish
        restaurang, in Russian restoran, and in Polish restauracia. Although
        inns and hostelries often served paying guests meals from the host’s
        table, or table d’hôte, and beverages were sold in cafés, Boulanger’s
        restaurant was probably the first public place where any diner might
        order a meal from a menu offering a choice of dishes.
      </p>
      <br />
      <p className={about.p}>
        The first restaurant proprietor is believed to have been one A.
        Boulanger, a soup vendor, who opened his business in Paris in 1765. The
        sign above his door advertised restoratives, or restaurants, referring
        to the soups and broths available within. The institution took its name
        from that sign, and restaurant now denotes a public eating place in
        English, French, Dutch, Danish, Norwegian, Romanian, and many other
        languages, with some variations. For example, in Spanish and Portuguese
        the word becomes restaurante, in Italian it is ristorante, in Swedish
        restaurang, in Russian restoran, and in Polish restauracia. Although
        inns and hostelries often served paying guests meals from the host’s
        table, or table d’hôte, and beverages were sold in cafés, Boulanger’s
        restaurant was probably the first public place where any diner might
        order a meal from a menu offering a choice of dishes.
      </p>
    </Box>
  );
};
