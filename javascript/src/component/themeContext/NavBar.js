import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeContext } from "./ThemeContextComponent";
import SwitchThemeButton from "./SwitchThemeButton";

export default function NavBar() {
  const theme = useContext(ThemeContext);
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: theme.foreground,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, backgroundColor: theme.foreground }}
          >
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <SwitchThemeButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
