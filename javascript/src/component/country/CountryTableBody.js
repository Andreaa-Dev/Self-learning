import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { v4 as uuidv4 } from "uuid";

import { addFavoriteCountry } from "../redux/action/favorite";

export const CustomizedLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function CountryTableBody({ countryData, countryFiltered }) {
  const dispatch = useDispatch();

  let countryDataAll;
  if (countryFiltered.length === 0) {
    countryDataAll = countryData;
  } else {
    countryDataAll = countryFiltered;
  }

  const onClickHandler = (favoriteCountry) => {
    dispatch(addFavoriteCountry(favoriteCountry));
  };

  return (
    <TableBody>
      {countryDataAll.map((country) => {
        const language = country.languages;
        return (
          <TableRow key={country.name.common}>
            <TableCell>
              <CustomizedLink to={`/${country.name.common}`}>
                {country.name.common}
              </CustomizedLink>
            </TableCell>
            <TableCell align="left">
              {country.capital ? country.capital[0] : "No capital"}
            </TableCell>
            <TableCell> {country.flag}</TableCell>
            <TableCell>
              {language
                ? Object.values(language).map((item) => (
                    <p key={uuidv4()}>{item}</p>
                  ))
                : "No language"}
            </TableCell>
            <TableCell> {country.population}</TableCell>
            <TableCell>
              <FavoriteBorderIcon onClick={() => onClickHandler(country)} />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
