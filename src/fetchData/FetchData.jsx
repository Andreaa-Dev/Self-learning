import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "./Country";

export default function FetchData() {
  const [data, setData] = useState([]);
  const url = "https://restcountries.com/v3.1/all/";

  const fetchCountry = () => {
    try {
      axios(url).then((response) => {
        let result = response.data;
        console.log(result, "data");
        setData(result);
        return result;
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);
  return (
    <div>
      FetchData
      {data.slice(0, 10).map((item) => {
        return item.name.common;
      })}
      <div>
        <Country />
      </div>
    </div>
  );
}
