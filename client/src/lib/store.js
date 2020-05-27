import { createStore as cs } from "redux";
import rootReducer from "../reducers/rootReducer";

export function createStore(initialState = {}) {
  return cs(rootReducer, initialState);
}
