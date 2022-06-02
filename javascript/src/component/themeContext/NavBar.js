import React, { useContext } from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { ThemeContext, themes } from "./ThemeContextComponent";
import SwitchThemeButton from "./SwitchThemeButton";
import SearchComponent from "./SearchComponent";

export default function NavBar() {
  const { currentTheme } = useContext(ThemeContext);
  const color = themes[currentTheme];

  const favoriteCountries = useSelector(
    (state) => state.favoriteCountry.favoriteCountry
  );
  const favoriteCount = favoriteCountries.length;

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: color.background }}>
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
            sx={{ flexGrow: 1, backgroundColor: color.background }}
          >
            Country
          </Typography>
          <Button color="inherit">Home</Button>
          <SearchComponent />
          <Badge badgeContent={favoriteCount} color="primary">
            <FavoriteBorderIcon />
          </Badge>
          <SwitchThemeButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
