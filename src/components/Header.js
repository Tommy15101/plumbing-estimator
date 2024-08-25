import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg"; // Path to your SVG logo

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Logo} alt="Logo" style={{ height: 40 }} />{" "}
        </Link>
        <Box sx={{ flex: 1 }}></Box>
        <Typography variant="h6" sx={{ flex: 1, textAlign: "right" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Plumbing Estimator
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
