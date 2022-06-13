import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeContext, themes } from "../themeContext/ThemeContextComponent";
import { CustomizedLink } from "../country/CountryTableRow";
import SwitchThemeButton from "./SwitchThemeButton";
import SearchComponent from "./SearchComponent";
import FilterByPopulation from "./FilterByPopulation";
import FavoriteComponent from "./FavoriteComponent";
import { sortCountryByName } from "../redux/action/country";

export default function NavBar() {
  const { currentTheme } = useContext(ThemeContext);
  const color = themes[currentTheme];
  //sort
  const [orderBy, setOrderBy] = useState("desc");

  const dispatch = useDispatch();
  const onClickSortHandler = () => {
    if (orderBy === "asc") {
      setOrderBy("desc");
      dispatch(sortCountryByName("desc"));
    } else {
      setOrderBy("asc");
      dispatch(sortCountryByName("asc"));
    }
  };
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
          <CustomizedLink to="">HOME</CustomizedLink>
          <SearchComponent />
          <FavoriteComponent />
          <FilterByPopulation />
          <button onClick={onClickSortHandler}> Sort name</button>
          <SwitchThemeButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
