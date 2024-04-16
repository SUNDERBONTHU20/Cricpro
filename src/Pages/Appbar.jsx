import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../Images/cricket (1).png"; 

const Appbar = () => {
  return (
    <div>
      <AppBar position="static" style={{ textAlign: "left" }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '40px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CricPro
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
