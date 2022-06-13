import {
  FetchCountry,
  FetchCountryDetail,
  SearchCountry,
  SortCountryByName,
  SortCountryByPopulation,
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
    case SortCountryByPopulation: {
      const sortBy = action.payload.orderBy;
      console.log("sortBy", sortBy);

      const sortedCountries = state.country.slice().sort((a, b) => {
        if (sortBy === "asc") {
          return a.population - b.population;
        }

        if (sortBy === "desc") {
          return b.population - a.population;
        }

        return 0;
      });

      return {
        ...state,
        country: sortedCountries,
      };
    }
    case SortCountryByName: {
      const sortBy = action.payload.orderBy;

      const sortedCountries = state.country.slice().sort((a, b) => {
        if (a.name.common > b.name.common) {
          if (sortBy === "asc") {
            return 1;
          }
          return -1;
        }

        if (a.name.common < b.name.common) {
          if (sortBy === "desc") {
            return 1;
          }
          return -1;
        }

        return 0;
      });

      return {
        ...state,
        country: sortedCountries,
      };
    }

    default:
      return state;
  }
}
