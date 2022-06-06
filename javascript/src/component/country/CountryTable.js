import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action/country";
import CountryTableHead from "./CountryTableHead";
import CountryTableBody from "./CountryTableBody";
import LoadingComponents from "../misc/LoadingComponent";

export default function CountryTable() {
  //250 countries
  const countryData = useSelector((state) => state.countryState.country);
  // result from search
  const countryFiltered = useSelector((state) => state.countryState.search);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (countryData.length === 0) {
    return <LoadingComponents />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <CountryTableHead />
        <CountryTableBody
          countryData={countryData}
          countryFiltered={countryFiltered}
        />
      </Table>
    </TableContainer>
  );
}
