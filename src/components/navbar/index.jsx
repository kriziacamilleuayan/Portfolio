import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useScrollTrigger } from "@mui/material";
import DrawerNav from "./drawer";
import { styled } from "@mui/material/styles";
import Granim from "react-granim";
import { NavItems, granimGradient } from "../../const";
import { NavLink } from "react-router-dom";

const ElevationScroll = (elevProps) => {
  const { children, window } = elevProps;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: trigger ? scrolledStyle : topStyle,
  });
};

const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const granimProps = {
    id: "canvas-nav",
    direction: "left-right",
    states: {
      "default-state": {
        gradients: granimGradient,
        transitionSpeed: 7000,
      },
    },
  };

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar component="nav">
          <Granim {...granimProps} />
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { sm: "block" } }}
            >
              Portfolio
            </Typography>
            <NavBox sx={{ display: { xs: "none", sm: "block" } }}>
              {NavItems.map((item) => (
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  key={item.name}
                >
                  <NavButton key={item.name}>{item.name}</NavButton>
                </NavLink>
              ))}
            </NavBox>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <DrawerNav
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </>
  );
};

export default Navbar;

const NavBox = styled(Box)({
  ".isActive > button": {
    borderColor: "white",
  },
});

const NavButton = styled(Button)({
  fontFamily: "'Press Start 2P', cursive",
  color: "white",
  background: "transparent",
  border: "transparent solid 1px",
  borderRadius: "0",
  margin: "0 4px",
  paddingLeft: "10px",

  "&:hover": {
    backgroundColor: "#ffffff42",
  },
});

const scrolledStyle = {
  color: "white",
  background: "red",
  boxShadow: "none",
};

const topStyle = {
  color: "red",
  background: "transparent",
};
