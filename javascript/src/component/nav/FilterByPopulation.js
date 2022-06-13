import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FilterListIcon from "@mui/icons-material/FilterList";

import { sortCountryByPopulation } from "../redux/action/country";

export default function FilterByPopulation() {
  const [orderBy, setOrderBy] = useState("desc");

  const dispatch = useDispatch();
  const onClickSortHandler = () => {
    if (orderBy === "asc") {
      setOrderBy("desc");
      dispatch(sortCountryByPopulation("desc"));
    } else {
      setOrderBy("asc");
      dispatch(sortCountryByPopulation("asc"));
    }
  };
  return <FilterListIcon sx={{ margin: 2 }} onClick={onClickSortHandler} />;
}
