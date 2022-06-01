import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const tableHeadTitle = [
  "Name",
  "Capital",
  "Flag",
  "Language",
  "Population",
  "Favorite",
];
export default function CountryTableHead() {
  return (
    <TableHead>
      <TableRow>
        {tableHeadTitle.map((title) => (
          <TableCell key={title}>{title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
