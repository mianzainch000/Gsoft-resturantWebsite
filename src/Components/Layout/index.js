import React from "react";
import { NavbarComp } from "../Navbar";
import { Footer } from "../Footer";

export const LayoutComp = ({ children }) => {
  return (
    <>
      <NavbarComp />
      <div>{children}</div>
      <Footer />
    </>
  );
};
