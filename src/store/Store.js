import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import root from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  root,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
