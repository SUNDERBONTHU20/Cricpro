import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "..//.//..//Images/cricket (1).png"; 

const Appbar = ({ darkMode, toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" style={{ textAlign: "left" }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '40px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CricPro
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={toggleDarkMode}>
                Dark Mode
                <Switch checked={darkMode} onChange={toggleDarkMode} />
              </MenuItem>
              <MenuItem component={Link} to="/LoginPage" onClick={handleClose}>Login</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
 