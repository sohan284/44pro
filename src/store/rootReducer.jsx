import { combineReducers } from "@reduxjs/toolkit";
import cart from "./features/cartSlice";
import glove from "./features/gloveSlice";

const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    cart,
    glove,
  });

  return combinedReducer(state, action);
};

export default createReducer;
