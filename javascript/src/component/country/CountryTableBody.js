import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function CountryTableBody({ countryData, countryFiltered }) {
  let countryDataAll;
  if (countryFiltered.length === 0) {
    countryDataAll = countryData;
  } else {
    countryDataAll = countryFiltered;
  }
  return (
    <TableBody>
      {countryDataAll.map((country) => {
        const language = country.languages;
        return (
          <TableRow key={country.name.common}>
            <TableCell> {country.name.common}</TableCell>
            <TableCell align="left">
              {country.capital ? country.capital[0] : "No capital"}
            </TableCell>
            <TableCell> {country.flag}</TableCell>
            <TableCell>
              {language
                ? Object.values(language).map((item) => <p>{item}</p>)
                : "No language"}
            </TableCell>
            <TableCell> {country.population}</TableCell>
            <TableCell>
              <FavoriteBorderIcon />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
