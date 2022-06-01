import { FetchCountry, SearchCountry } from "../type";

export function fetchCountry(country) {
  return {
    type: FetchCountry,
    payload: {
      country: country,
    },
  };
}

export function fetchCountryDetail(country) {
  return {
    type: FetchCountry,
    payload: {
      country: country,
    },
  };
}

export function searchCountry(input) {
  return {
    type: SearchCountry,
    payload: {
      userInput: input,
    },
  };
}

//redux-thunk
export function fetchData() {
  return (dispatch) => {
    fetch("https://restcountries.com/v3.1/all/")
      .then((response) => response.json())
      .then((country) => dispatch(fetchCountry(country)));
  };
}

export function fetchDataDetail(name) {
  return (dispatch) => {
    fetch(`https://restcountries.com/v3.1/all/{name}`)
      .then((response) => response.json())
      .then((countryDetail) => dispatch(fetchCountryDetail(countryDetail)));
  };
}
