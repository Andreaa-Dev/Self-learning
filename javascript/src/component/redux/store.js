import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

import createRootReducer from "./reducer";

//whole app
const initState = {
  countryState: {
    country: [],
    search: [],
    eachCountry: [],
  },
  favoriteCountry: {
    favoriteCountry: [],
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

  //store favorite countries to local storage
  //get data to local storage
  let favoriteObject = localStorage.getItem("favoriteItem");

  let finalState;

  if (favoriteObject) {
    let stored = JSON.parse(favoriteObject);
    console.log("stored", stored);
    initState.favoriteCountry.favoriteCountry = stored;
    finalState = initState;
  } else {
    finalState = initState;
  }

  const store = createStore(
    createRootReducer(),
    finalState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // each dispatch an action => run
  // all thing put in localStorage had to be string
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem(
      "favoriteItem",
      JSON.stringify(state.favoriteCountry.favoriteCountry)
    );
  });

  // webpack
  if (module.hot) {
    module.hot.accept("./reducer", () => {
      const nextReducer = require("./reducer").default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
