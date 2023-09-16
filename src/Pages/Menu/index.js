import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { addProduct } from "../../Redux/Slice/cartSlice";
import { useDispatch } from "react-redux";
import menuCompCss from "../Menu/menuCompCss.module.css";
import { Product } from "../ProductData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const MenuComp = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Product.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={menu.id}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  component={"div"}
                  textAlign="center"
                >
                  {menu.name}
                </Typography>
                <Typography variant="body2" className={menuCompCss.description}>
                  {menu.description}
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  component={"div"}
                  textAlign="center"
                >
                  $ {menu.price}
                </Typography>
                <button
                  variant="contained"
                  sx={{ width: "100%", marginTop: "20px" }}
                  onClick={() => {
                    dispatch(addProduct(menu));
                    toast.success("Product Add Successfully", {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  }}
                  className={menuCompCss.button}
                >
                  Add Product
                </button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <ToastContainer />
    </>
  );
};
