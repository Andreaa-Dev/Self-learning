import React from "react";
import { useSelector } from "react-redux";

export default function CountryFavorite() {
  const favoriteCountryData = useSelector(
    (state) => state.favoriteCountry.favoriteCountry
  );
  console.log(favoriteCountryData, "d");
  return <div>CountryFavorite</div>;
}
