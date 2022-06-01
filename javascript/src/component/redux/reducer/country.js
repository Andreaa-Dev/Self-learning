import { FetchCountry, SearchCountry } from "../type";

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
    case SearchCountry:
      const filteredCountry = state.country.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(action.payload.userInput);
      });
      return {
        ...state,
        search: filteredCountry,
      };
    default:
      return state;
  }
}
