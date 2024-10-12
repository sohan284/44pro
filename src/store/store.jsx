import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/cartSlice";
import color from "./features/colorSlice";

const store = configureStore({
  reducer: {
    cart,
    color,
  },
});
export default store;
