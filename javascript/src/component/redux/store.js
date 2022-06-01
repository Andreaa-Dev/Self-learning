import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

import createRootReducer from "./reducer";

const initState = {
  countryState: {
    country: [],
    search: [],
    eachCountry: [],
  },
};

export default function makeStore(initialState = initState) {
  const middlewares = [thunk];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  if (module.hot) {
    module.hot.accept("./reducer", () => {
      const nextReducer = require("./reducer").default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
