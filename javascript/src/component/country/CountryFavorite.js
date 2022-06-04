import React from "react";
import { useSelector } from "react-redux";
import CountryFavoriteCard from "./CountryFavoriteCard";
import { v4 as uuidv4 } from "uuid";

export default function CountryFavorite() {
  const favoriteCountryData = useSelector(
    (state) => state.favoriteCountry.favoriteCountry
  );

  if (favoriteCountryData.length === 0) {
    return <div>No favorite countries</div>;
  }
  return (
    <div>
      Country favorite
      {favoriteCountryData.map((favoriteCountry) => (
        <CountryFavoriteCard key={uuidv4()} favoriteCountry={favoriteCountry} />
      ))}
    </div>
  );
}
