import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Box from "@mui/material/Box";

export default function CountryFavoriteCard({ favoriteCountry }) {
  console.log(favoriteCountry, "d");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "500px",
      }}
    >
      <div> Name: {favoriteCountry.name.common}</div>

      <div>
        <RemoveCircleOutlineIcon />
      </div>
    </Box>
  );
}
