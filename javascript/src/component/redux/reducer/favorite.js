import { AddFavoriteCountry, RemoveFavoriteCountry } from "../action/favorite";

//fav country - state
const initialState = {
  favoriteCountry: [],
};

export default function favorite(state = initialState, action) {
  switch (action.type) {
    case AddFavoriteCountry: {
      return {
        ...state,
        favoriteCountry: [
          ...state.favoriteCountry,
          action.payload.favoriteCountry,
        ],
      };
    }
    case RemoveFavoriteCountry: {
      const selectedCountries = action.payload.favoriteCountry;
      const favoriteCountries = state.favoriteCountry;
      const result = favoriteCountries.filter(
        (item) => item.name.common !== selectedCountries.name.common
      );
      return {
        ...state,
        favoriteCountry: result,
      };
    }
    default:
      return state;
  }
}
