export const FetchCountry = "fetch_country";
export const FetchCountryDetail = "fetch_country_detail";
export const SearchCountry = "search_country";
export const SortCountryByPopulation = "sort_country_by_population";
export const SortCountryByName = "sort_country_by_name";

// write to do action
//action 1: fetch data
export function fetchCountry(country) {
  return {
    type: FetchCountry,
    payload: {
      country: country,
    },
  };
}

export function fetchCountryDetail(countryDetail) {
  return {
    type: FetchCountryDetail,
    payload: {
      countryDetail: countryDetail,
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

export function sortCountryByPopulation(orderBy) {
  return {
    type: SortCountryByPopulation,
    payload: {
      orderBy: orderBy,
    },
  };
}

export function sortCountryByName(orderBy) {
  return {
    type: SortCountryByName,
    payload: {
      orderBy: orderBy,
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
    fetch(`https://restcountries.com/v3.1/name/${name.name}`)
      .then((response) => response.json())
      .then((countryDetail) => dispatch(fetchCountryDetail(countryDetail)));
  };
}
