import { combineReducers } from "@reduxjs/toolkit";
import cart from "./features/cartSlice";

const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    cart,
  });

  return combinedReducer(state, action);
};

export default createReducer;
