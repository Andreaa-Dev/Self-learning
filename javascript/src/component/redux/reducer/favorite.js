import { AddFavoriteCountry, RemoveFavoriteCountry } from "../action/favorite";

const initialState = {
  favoriteCountry: [],
};

export default function favorite(state = initialState, action) {
  switch (action.type) {
    case AddFavoriteCountry: {
      console.log(state.favoriteCountry, "s");
      return {
        ...state,
        favoriteCountry: [
          ...state.favoriteCountry,
          action.payload.favoriteCountry,
        ],
      };
    }
    case RemoveFavoriteCountry: {
      const countriesRemoved = action.payload;
      return {
        ...state,
        favoriteCountry: countriesRemoved,
      };
    }
    default:
      return state;
  }
}
