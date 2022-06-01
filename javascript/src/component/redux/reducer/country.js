import { fetchCountryDetail } from "../action/country";
import { FetchCountry, FetchCountryDetail, SearchCountry } from "../type";

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
      console.log(action.payload, "action");
      return {
        ...state,
        eachCountry: action.payload.countryDetail,
      };
    case SearchCountry:
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
