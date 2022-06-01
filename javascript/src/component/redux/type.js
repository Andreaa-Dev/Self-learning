export const FetchCountry = "fetch_country";
export const SearchCountry = "search_country";

export const FetchAction = {
  type: FetchCountry,
  payload: {
    country: [],
  },
};

export const SearchCountryAction = {
  type: SearchCountry,
  payload: {
    userInput: "",
  },
};

export const AllAction = FetchAction | SearchCountry;

export const CountryState = {
  country: [],
  search: [],
  eachCountry: [],
};

export const AppState = {
  CountryState,
};
