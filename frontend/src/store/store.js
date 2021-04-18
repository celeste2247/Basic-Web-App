import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/root";

function Store(preloadedState) {
  return createStore(reducer, preloadedState, applyMiddleware(thunk));
}

export default Store;
