import { combineReducers } from "redux";
import productReducer from "./products";

export default combineReducers({
  products: productReducer,
});
