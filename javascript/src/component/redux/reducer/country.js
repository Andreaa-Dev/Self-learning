import { FetchCountry } from "../type";

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
    default:
      return state;
  }
}
