import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function CountryTableBody({ countryData }) {
  return (
    <TableBody>
      {countryData.map((country) => {
        return (
          <TableRow>
            <TableCell> {country.name.common}</TableCell>
            <TableCell align="left">
              {country.capital ? country.capital[0] : "No capital"}
            </TableCell>
            <TableCell> {country.flag}</TableCell>
            <TableCell> language</TableCell>{" "}
            <TableCell> {country.population}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
