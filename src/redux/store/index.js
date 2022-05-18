import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducer/authReducer";
import { productReducer } from "../reducer/productReducer";

const reducers = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const composeEnhacers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhacers(applyMiddleware(thunk))
);
