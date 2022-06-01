import { FetchCountry } from "../type";

export function fetchCountry(country) {
  return {
    type: FetchCountry,
    payload: {
      country: country,
    },
  };
}

export function fetchData() {
  return (dispatch) => {
    fetch("https://restcountries.com/v3.1/all/")
      .then((response) => response.json())
      .then((country) => dispatch(fetchCountry(country)));
  };
}
