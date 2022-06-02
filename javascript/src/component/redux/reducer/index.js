import { combineReducers } from "redux";

import country from "./country";
import favorite from "./favorite";

const createRootReducer = () => {
  return combineReducers({ countryState: country, favoriteCountry: favorite });
};

export default createRootReducer;
