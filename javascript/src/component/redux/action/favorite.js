export const AddFavoriteCountry = "add_favorite_country";
export const RemoveFavoriteCountry = "remove_favorite_country";

export function addFavoriteCountry(favoriteCountry) {
  return {
    type: AddFavoriteCountry,
    payload: {
      favoriteCountry: favoriteCountry,
    },
  };
}

export function removeFavoriteCountry(favoriteCountry) {
  return {
    type: RemoveFavoriteCountry,
    payload: {
      favoriteCountry: favoriteCountry,
    },
  };
}
