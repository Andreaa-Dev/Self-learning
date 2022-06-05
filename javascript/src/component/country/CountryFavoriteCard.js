import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { removeFavoriteCountry } from "../redux/action/favorite";

export default function CountryFavoriteCard({ favoriteCountry }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(removeFavoriteCountry(favoriteCountry));
  };
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
        <RemoveCircleOutlineIcon onClick={onClickHandler} />
      </div>
    </Box>
  );
}
