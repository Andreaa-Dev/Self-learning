import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const tableHeadTitle = ["Name", "Capital", "Flag", "Language", "Population"];
export default function CountryTableHead() {
  return (
    <TableHead>
      <TableRow>
        {tableHeadTitle.map((title) => (
          <TableCell>{title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
