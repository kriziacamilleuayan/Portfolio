import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import { HomePath, NavItems, PrimaryColors, drawerWidth } from "../../const";
import { NavLink } from "react-router-dom";

const DrawerNav = (props) => {
  const { window, handleDrawerToggle, mobileOpen } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              py: 2,
              fontFamily: "Reenie Beanie",
              fontSize: "2.5rem",
              color: PrimaryColors[0],
              background: PrimaryColors[3],
            }}
          >
            <NavLink
              to={HomePath}
              style={{ textDecoration: "none", color: PrimaryColors[0] }}
            >
              KriziaUayan
            </NavLink>
          </Typography>
          <Divider />
          <ListComponent>
            {NavItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  style={navlinkStyle}
                  key={item.name}
                >
                  <ListItemButton sx={{ textAlign: "center" }} component="div">
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </ListComponent>
        </Box>
      </Drawer>
    </nav>
  );
};

export default DrawerNav;

DrawerNav.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  window: PropTypes.instanceOf(window.constructor),
};

const ListComponent = styled(List)({
  ".isActive ": {
    // color: `${PrimaryColors[0]} !important`,
    color: "white !important",
    background: PrimaryColors[1],
  },
});

const navlinkStyle = {
  textDecoration: "none",
  color: PrimaryColors[3],
  textAlign: "center",
  width: "100%",
};
