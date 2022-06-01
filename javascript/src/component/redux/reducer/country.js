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
      console.log(action.payload.userInput, "a");
      const filteredCountry = state.country.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(action.payload.userInput.element.toLowerCase());
      });
      return {
        ...state,
        search: filteredCountry,
      };
    default:
      return state;
  }
}
