import { createStore as cs, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

export function createStore(initialState = {}) {
  return cs(rootReducer, initialState, applyMiddleware(thunk));
}
