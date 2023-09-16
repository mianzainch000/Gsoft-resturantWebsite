import React, { useEffect } from "react";
import navbarStyling from "./navbarStyling.module.css";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../Redux/Slice/cartSlice";
import { useTheme, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import { DrawerComp } from "../Drawer";

export const NavbarComp = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.allCart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ bgcolor: "black;" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <Button color="inherit">
              <AddShoppingCartIcon />
              <sup style={{ color: "red" }}>
                <h4>{cart.length}</h4>
              </sup>
            </Button>{" "}
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: "goldenrod;" }}
          >
            Resturant
          </Typography>
          <Toolbar>
            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <Stack direction="row" spacing={2}>
                  <Button color="inherit"></Button>
                  <Button color="inherit" className={navbarStyling.button}>
                    <NavLink to="/" className={navbarStyling.button}>
                      Home
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/about" className={navbarStyling.button}>
                      About
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/contact" className={navbarStyling.button}>
                      Contact
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/menu" className={navbarStyling.button}>
                      Menu
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/cart" className={navbarStyling.button}>
                      Cart
                    </NavLink>
                  </Button>{" "}
                </Stack>
              </>
            )}
          </Toolbar>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
