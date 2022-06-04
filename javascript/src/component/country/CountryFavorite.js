import React from "react";
import { useSelector } from "react-redux";
import CountryFavoriteCard from "./CountryFavoriteCard";

export default function CountryFavorite() {
  const favoriteCountryData = useSelector(
    (state) => state.favoriteCountry.favoriteCountry
  );
  console.log(favoriteCountryData, "d");

  if (favoriteCountryData.length === 0) {
    return <div>No favorite countries</div>;
  }
  return (
    <div>
      Country favorite
      {favoriteCountryData.map((favoriteCountry) => (
        <CountryFavoriteCard favoriteCountry={favoriteCountry} />
      ))}
    </div>
  );
}
