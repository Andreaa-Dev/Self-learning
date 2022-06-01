import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { fetchData, searchCountry } from "../redux/action/country";
import CountryTableHead from "./CountryTableHead";
import CountryTableBody from "./CountryTableBody";

export default function CountryTable() {
  const countryData = useSelector((state) => state.countryState.country);
  const countryFiltered = useSelector((state) => state.countryState.search);

  console.log(countryFiltered, "search");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(searchCountry());
  }, [dispatch]);

  console.log(countryData, "d");
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <CountryTableHead />
          <CountryTableBody countryData={countryData} />
        </Table>
      </TableContainer>
    </div>
  );
}
