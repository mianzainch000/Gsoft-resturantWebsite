import React from "react";
import contact from "./contact.module.css";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
export const ContactComp = () => {
  return (
    <>
      <Box className={contact.container}>
        <Typography variant="h4" className={contact.heading}>
          Contact My Resturant
        </Typography>
        <p>
          If you wish to contact us regarding any questions or comments you may
          have, please connect with us via our inbuilt help centre. You can also
          initiate a chat for your order during the course of delivery or after
          it by selecting Help Centre My Orders Get Help
        </p>
      </Box>
      <Box className={contact.tableContainer}>
        <TableContainer component={Paper}>
          <Table aria-aria-label="contact-table">
            <TableHead>
              <TableRow sx={{ bgcolor: "black;" }}>
                <TableCell className={contact.tableHeading}>Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <LocalPhoneIcon sx={{ color: "red;", pt: 1 }} />
                  1234567890 (Contact Number)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "green;", pt: 1 }} />
                  zain@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <HomeIcon sx={{ color: "blue;", pt: 1 }} />
                  D-Ground
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
