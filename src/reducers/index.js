import { combineReducers } from "redux";
import { productReducer } from "./productreducer";

export const reducers = combineReducers({
  allProducts: productReducer,
})