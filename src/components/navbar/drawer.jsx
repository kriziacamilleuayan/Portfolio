import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { NavItems, drawerWidth } from "../../const";

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
          <Typography variant="h6" sx={{ my: 2 }}>
            {/* Portfolio */}
          </Typography>
          <Divider />
          <List>
            {NavItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  component="a"
                  href={item.href}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
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
