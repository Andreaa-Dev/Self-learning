import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function CountryTableBody({ countryData, countryFiltered }) {
  console.log(countryData, "d", countryFiltered);
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
        if (language) {
          const countryLanguage = Object.values(language);
          return (
            <TableRow key={country.name.common}>
              <TableCell> {country.name.common}</TableCell>
              <TableCell align="left">
                {country.capital ? country.capital[0] : "No capital"}
              </TableCell>
              <TableCell> {country.flag}</TableCell>
              <TableCell>
                {countryLanguage.map((language) => (
                  <p>{language}</p>
                ))}
              </TableCell>
              <TableCell> {country.population}</TableCell>
              <TableCell>
                <FavoriteBorderIcon />
              </TableCell>
            </TableRow>
          );
        }
      })}
    </TableBody>
  );
}
