import React from "react";
import { Box, Typography } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#130f40", color: "#ecf0f1", p: 4 }}
      >
        <Typography
          variant="h4"
          sx={{
            "@media (max-width:100px)": {
              fontSize: "25px",
            },
          }}
        >
          Foodie Haven
        </Typography>

        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "50px",
              color: "#ecf0f1",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "#ecf0f1",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <a
            href="https://www.linkedin.com/in/swati-mittal08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={50}
              style={{ margin: "0 10px" }}
            />
          </a>

          <a
            href="https://github.com/swatimittal08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={50} style={{ margin: "0 10px" }} />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
