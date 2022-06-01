import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action/country";

export default function CountryTable() {
  const countryData = useSelector((state) => state.countryState.country);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(countryData, "d");
  return <div>CountryTable</div>;
}
