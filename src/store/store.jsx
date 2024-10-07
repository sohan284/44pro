import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/cartSlice";

const store = configureStore({
  reducer: {
    cart,
  },
});
export default store;
