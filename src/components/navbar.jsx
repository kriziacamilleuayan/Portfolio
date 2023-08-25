import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: trigger ? scrolled : top,
  });
};

const Navbar = (props) => {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          style={{
            color: "red",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              Some random portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

export default Navbar;

const scrolled = {
  color: "red",
};

const top = {
  color: "blue",
};
