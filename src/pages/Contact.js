import React from "react";
import Layout from "./../components/Layout/Layout";
import { FaEnvelope } from "react-icons/fa";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
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

const Contact = () => {
  return (
    <Layout>
      {/* Centered Heading */}
      <Box sx={{ my: 10, textAlign: "center" }}>
        <Typography variant="h4" color="#130f40" fontWeight="bold" mb={2}>
          Contact Foodie Haven
        </Typography>
        <Typography>
          Should you have any questions, please do not hesitate to contact me.
        </Typography> 
      </Box>

      {/* Centered Contact Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TableContainer component={Paper} sx={{ width: "600px", maxWidth: "90%" }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "#130f40", color: "white", textAlign: "center" }}
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <a
                    href="mailto:swatemittal@gmail.com"
                    style={{ color: "#353b48", textDecoration: "none", display: "flex", alignItems: "center" }}
                  >
                    <FaEnvelope size={15} style={{ marginRight: "15", color: "#130f40" }} />
                    swatemittal@gmail.com
                  </a>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <PlaceIcon sx={{ color: "#130f40", pt: 1, mr: 1 }} />
                  Bengaluru, Karnataka, India
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "#130f40", pt: 1, mr: 1 }} />
                  +91-7828558364
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
