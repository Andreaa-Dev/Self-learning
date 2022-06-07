import React, { useState } from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useDispatch } from "react-redux";
import { sortCountryByName } from "../redux/action/country";

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
  const [orderBy, setOrderBy] = useState("desc");

  const dispatch = useDispatch();
  const onClickSortHandler = () => {
    if (orderBy === "asc") {
      setOrderBy("desc");
      dispatch(sortCountryByName("desc"));
    } else {
      setOrderBy("asc");
      dispatch(sortCountryByName("asc"));
    }
  };
  return (
    <TableHead>
      <TableRow>
        {tableHeadTitle.map((title) => (
          <TableCell key={title}>
            <TableSortLabel onClick={onClickSortHandler} />
            {title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
