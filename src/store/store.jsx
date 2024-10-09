import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/cartSlice";
import glove from "./features/gloveSlice";

const store = configureStore({
  reducer: {
    cart,
    glove,
  },
});
export default store;
