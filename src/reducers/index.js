import itemreducer from "./itemreducer";
import { combineReducers } from "redux";

const root = combineReducers({
  Item: itemreducer,
});

export default root;
