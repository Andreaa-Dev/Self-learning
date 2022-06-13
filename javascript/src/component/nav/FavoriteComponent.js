import React from "react";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { CustomizedLink } from "../country/CountryTableRow";

export default function FavoriteComponent() {
  const favoriteCountries = useSelector(
    (state) => state.favoriteCountry.favoriteCountry
  );
  const favoriteCount = favoriteCountries.length;
  return (
    <div>
      <CustomizedLink to="./favorite">
        <Badge
          badgeContent={favoriteCount}
          color="primary"
          sx={{ marginRight: "10px" }}
        >
          <FavoriteBorderIcon />
        </Badge>
      </CustomizedLink>
    </div>
  );
}
