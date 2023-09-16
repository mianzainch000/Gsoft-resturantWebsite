import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomeComp } from "../Pages/Home";
import { AboutComp } from "../Pages/About";
import { ContactComp } from "../Pages/Contact";
import { MenuComp } from "../Pages/Menu";
import { LayoutComp } from "../Components/Layout";
import { Page404 } from "../Pages/Page404";
import { Cart } from "../Pages/Cart";

export const RouterComp = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutComp>
                <HomeComp />
              </LayoutComp>
            }
          />
          <Route
            path="/about"
            element={
              <LayoutComp>
                <AboutComp />
              </LayoutComp>
            }
          />
          <Route
            path="/contact"
            element={
              <LayoutComp>
                <ContactComp />
              </LayoutComp>
            }
          />
          <Route
            path="/menu"
            element={
              <LayoutComp>
                <MenuComp />
              </LayoutComp>
            }
          />
          <Route
            path="/cart"
            element={
              <LayoutComp>
                <Cart />
              </LayoutComp>
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
