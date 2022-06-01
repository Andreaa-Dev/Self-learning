import { combineReducers } from "redux";

import country from "./country";

const createRootReducer = () => {
  return combineReducers({ countryState: country });
};

export default createRootReducer;
