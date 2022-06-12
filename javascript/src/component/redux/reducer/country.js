import {
  FetchCountry,
  FetchCountryDetail,
  SearchCountry,
  SortCountryByName,
} from "../action/country";

//country -state - search and each country need country information - same file
const initialState = {
  country: [],
  search: [],
  eachCountry: [],
};

export default function country(state = initialState, action) {
  switch (action.type) {
    case FetchCountry:
      return {
        ...state,
        country: action.payload.country,
      };
    case FetchCountryDetail:
      return {
        ...state,
        eachCountry: action.payload.countryDetail,
      };
    case SearchCountry:
      const filteredCountry = state.country.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(action.payload.userInput.toLowerCase());
      });
      return {
        ...state,
        search: filteredCountry,
      };
    case SortCountryByName: {
      const countriesData = state.country;
      const sortBy = action.payload;

      const sortedCountries = state.country.sort((a, b) => {
        console.log("run");
        if (a.name.common < b.name.common) {
          if (sortBy === "asc") {
            return 1;
          }

          return -1;
        }
        if (a.name.common > b.name.common) {
          if (sortBy === "desc") {
            return 1;
          }

          return -1;
        }
        return 0;
      });

      console.log("sort", sortedCountries);
      return {
        ...state,
        country: [...sortedCountries],
      };
    }
    default:
      return state;
  }
}
