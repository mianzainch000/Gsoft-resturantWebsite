import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  CardMedia,
  Card,
  Grid,
  Box,
  CardContent,
  AppBar,
  IconButton,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  CardActionArea,
} from "@mui/material";
import {
  deleteProduct,
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartTotal,
} from "../../Redux/Slice/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Cart = () => {
  // States

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, totalPrice, totalQuantity } = useSelector(
    (state) => state.allCart
  );

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  if (cart.length === 0) {
    setTimeout(() => {
      navigate("/menu");
    });
  }

  // Functions

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      {/* DialogBox */}

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogContent>
          <DialogContentText>
            Are you sure wnat to delete this product ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
            }}
            sx={{ color: "white;", backgroundColor: "blue" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setDialogOpen(false);
              dispatch(deleteProduct(deleteId));
              toast.error("Product Delete successfully", {
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
            sx={{ color: "white;", backgroundColor: "red" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Card  */}

      <AppBar position="sticky">
        <Card>
          <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography variant="h6">Total Price : ${totalPrice}</Typography>
            <Typography variant="h6">Total Items : {totalQuantity}</Typography>
          </CardContent>
        </Card>
      </AppBar>

      {/* Product Card */}

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {cart.map((cart) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={cart.image}
                alt={cart.name}
              />

              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  component={"div"}
                  textAlign="center"
                >
                  {cart.name}
                </Typography>
                <Typography variant="body2">{cart.description}</Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  component={"div"}
                  textAlign="center"
                >
                  $ {cart.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    onClick={() => dispatch(decreaseItemQuantity(cart.id))}
                  >
                    <RemoveCircleOutlineIcon />
                  </Typography>
                  <Typography>{cart.quantity}</Typography>

                  <Typography
                    onClick={() => dispatch(increaseItemQuantity(cart.id))}
                  >
                    <AddCircleOutlineIcon />
                  </Typography>

                  <Typography
                    onClick={() => {
                      setDialogOpen(true);
                    }}
                  >
                    <DeleteIcon
                      onClick={() => {
                        setDeleteId(cart.id);
                      }}
                      sx={{ color: "red;", fontSize: "40px;" }}
                    />
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <ToastContainer />
    </>
  );
};
