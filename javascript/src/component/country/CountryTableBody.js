import React from "react";
import TableBody from "@mui/material/TableBody";

import CountryTableRow from "./CountryTableRow";

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
        return <CountryTableRow key={country.name.common} country={country} />;
      })}
    </TableBody>
  );
}
