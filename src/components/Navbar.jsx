import React, { useState } from "react";
import {
  AppBar,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Badge,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Notifications, Mail, Pets } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" display={{ xs: "none", sm: "block" }}>
          NavBar
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <Badge badgeContent={4} color="primary">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 24, height: 24 }}>H</Avatar>
        </Icons>
        <Box display={{ xs: "block", sm: "none" }}>
          <Avatar sx={{ width: 20, height: 20 }}>H</Avatar>
        </Box>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
