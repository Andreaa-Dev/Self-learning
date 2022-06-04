import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function CountryFavoriteCard({ favoriteCountry }) {
  return (
    <div>
      <div> Name: {favoriteCountry.name.common}</div>
      <div>
        <RemoveCircleOutlineIcon />
      </div>
    </div>
  );
}
