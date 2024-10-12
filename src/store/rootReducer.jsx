import { combineReducers } from "@reduxjs/toolkit";
import cart from "./features/cartSlice";
import color from "./features/colorSlice";

const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    cart,
    color,
  });

  return combinedReducer(state, action);
};

export default createReducer;
