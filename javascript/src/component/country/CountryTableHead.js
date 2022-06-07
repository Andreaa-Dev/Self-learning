import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";

const tableHeadTitle = [
  "Name",
  "Capital",
  "Flag",
  "Language",
  "Population",
  "Favorite",
];

//sort here

export default function CountryTableHead() {
  return (
    <TableHead>
      <TableRow>
        {tableHeadTitle.map((title) => (
          <TableCell key={title}>
            <TableSortLabel />
            {title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
